import {InputPort, OutputPort, InputPortTypes, PortTypes} from "../port/PortModule";
import {IGraphNode} from "./IGraphNode";
import {GraphNode} from "./GraphNode";
import {IProcedure, ProcedureTypes} from "../procedure/ProcedureModule";
import {ProcedureUtils} from '../procedure/ProcedureUtils';
import {ICodeGenerator, IModule} from "../code/CodeModule";

export abstract class NodeUtils{

	public static copy_node(node: IGraphNode): IGraphNode{

		let n: IGraphNode = new GraphNode();

		let id = n.id;
		n.update_properties(node);
		n.name = node.name +  Math.floor(Math.random()*100);
		n.id = id;
		n.position  = [ Math.floor(Math.random()*100), Math.floor(Math.random()*100) ];

		return n;
	}	
 
	public static add_port(node: IGraphNode, type: PortTypes, name?: string): IGraphNode{
		console.log(type);
		let default_name = type.toString().substring(0, 3) + node[`${type}s`].length; 

		if( name !== undefined ){
			default_name = name;
		}

		let port: InputPort|OutputPort;
		if(type == PortTypes.Input){
			port = new InputPort(default_name);
		}
		else if(type == PortTypes.Output){
			port = new OutputPort(default_name);
		}
		else{
			throw Error("Unrecognised Port Type");
		}

		node[`${type}s`].push(port);
		node.type = undefined;
		
		return node;
	}

	public static delete_port(node: IGraphNode, port: InputPort|OutputPort): IGraphNode{

		let prop = "";

		if (port instanceof InputPort){
			prop = "inputs"
		}
		else if( port instanceof OutputPort){
			prop = "outputs";
		}
		else{
			throw Error("Invalid Port Type");
		}

		for (const [idx, p] of node[prop].entries()) {
		  	if(p.id === port.id){
				node[prop].splice(idx, 1);
				break;
			}
		}

		return node;
	}

	public static delete_port_by_index(node: IGraphNode, type: string, port_index: number): IGraphNode{
		node[type].splice(port_index, 1);
		node.type = undefined;
		return node;
	}

	public static add_procedure(node: IGraphNode, procedure: IProcedure): IGraphNode{
      
		let active_procedure: IProcedure = node.active_procedure;
		// TODO: Validate procedure
		// this.checkProcedure(prod);

		if(active_procedure){
		    if(active_procedure.hasChildren){
		    	active_procedure = ProcedureUtils.add_child(active_procedure, procedure);
		    }
		    else{
		       if(active_procedure.parent){
		           let parent: IProcedure = active_procedure.parent;
		           let position: number = ProcedureUtils.get_child_position(parent, active_procedure);
		           ProcedureUtils.add_child_at_position(parent, procedure, position+1);
		       }
		       else{
		       	   let position: number = NodeUtils.get_child_position(node, active_procedure);
		           NodeUtils.add_procedure_at_position(node, procedure, position + 1);
		       }
		    }
		}
		else{
			node.procedure.push(procedure);
		}

      	node.active_procedure = procedure;
		return node;
	}

	public static add_procedure_at_position(node: IGraphNode, procedure: IProcedure, index: number): IGraphNode{
		node.type = undefined;
		node.procedure.splice(index, 0, procedure);
		procedure.parent = undefined;
		return node;
	}

	public static get_child_position(node: IGraphNode, procedure: IProcedure): number{
		let index: number = 0;
		for(const prod of node.procedure){
			if (prod.id === procedure.id){
				return index;
			}
			index++;
		}

		return -1;
	}

	public static delete_procedure(node): IGraphNode{

		if(!node.active_procedure){
			console.warn("Delete procedure called without active");
			return;
		}

		let index: number = 0;
		let prodArr: IProcedure[] = node.active_procedure.parent ? node.active_procedure.parent.children : node.procedure;
		for (const prod of prodArr){
			if (prod.id == node.active_procedure.id){
				prodArr.splice(index, 1);
				node.active_procedure = index < prodArr.length ? prodArr[index] : undefined;
				break;
			}
			index++;
		}

		return node;
	}

	public static get_variable_list(node: IGraphNode): string[]{

		let varList: string[] = [];

		//push undefined
		varList.push("undefined");

		//push names of inputs and outputs
		node.inputs.map(function(inp){
			varList.push(inp.name);
		});

		node.outputs.map(function(out){
			varList.push(out.name);
		});

		// push names of left components in procedure
		node.procedure.map(function(prod){
			let type = prod.type;
			if( type == ProcedureTypes.Data || 
				type == ProcedureTypes.ForLoopControl || 
				type == ProcedureTypes.Action){
				let var_name: string = prod.left.expression;
				if(var_name && var_name.length > 0){
					varList.push(var_name);
				};
			}
		});

		return varList;
	}
	
	public static execute_node(node: IGraphNode, code_generator: ICodeGenerator, modules: IModule[], print: Function, globals?: any): void{

		let window_params: string[] = [];

		let params: any[] = [];

		let live_data_downloads = 0;

		node.inputs.map(function(i, index){ 

			// if any of the inputs is a web url, get data first
			if(i.type == InputPortTypes.URL){
				
				live_data_downloads++;
				
				let urlString: any = i.getOpts().url;
				fetch(urlString)
				.then((res) => res.text())
				.then((out) => {

					i.value = out;
					try{
						i.value = JSON.parse(out);
					}
					catch(ex){
						console.error(`Error fetching data from ${urlString}`)
					}

					live_data_downloads--;

					// when last of all data has downloaded
					if(live_data_downloads == 0){
						outputProcessing();
					}

				})
				.catch(err => { alert("Oops...Error fetching data from URL."); throw err; });
			}
			else if(i.isFunction()){
				let oNode: IGraphNode = i.getFnValue();
				let codeString: string = code_generator.get_code_node(oNode);

				// converts string to functin
				let fn_def = Function("return " + codeString)();
				params[i.name] = fn_def;
			}
			else{
				params[i.name] = i.value; 
			}

		});

		// this code runs only after live_data_downloads = 0;
	    function outputProcessing(){
			node.outputs.map(function(o){
				if(o.isFunction()){
					let node_code: string =  code_generator.get_code_node(node, undefined, true);
					o.setDefaultValue( node_code );
				}
			});


			// use code generator to execute code
			let result: any  = code_generator.execute_node(node, params, modules, print, globals);

			// add results to self node
			for( let n=0;  n < node.outputs.length; n++ ){
				let output_port = node.outputs[n];
				output_port.value = (result[output_port.name]);
			}

			node.hasExecuted = true;

			// delete all files stored in window reference
			window_params.map(function(filename){
				delete window[filename];
			})
	    }


	    if(live_data_downloads == 0){
	    	outputProcessing();
	    }
	}

	public static get_result(node: IGraphNode):any{
		let final_values :any = {};
		for(let o=0; o < node.outputs.length; o++ ){
			let output: OutputPort = node.outputs[o];
			final_values[output.name] = output.value;
		}

		return final_values;
	}


}