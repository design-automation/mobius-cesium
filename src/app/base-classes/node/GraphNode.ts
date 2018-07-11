import {IdGenerator} from '../misc/GUID';

import {IProcedure, ProcedureFactory, ProcedureTypes, ProcedureUtils} from "../procedure/ProcedureModule";
import {InputPort, OutputPort, InputPortTypes} from "../port/PortModule";
import {ICodeGenerator, IModule} from "../code/CodeModule";

import {IGraphNode} from './IGraphNode';

export class GraphNode implements IGraphNode{

	private portCounter: number = 0;
	private inputPortCounter: number = 0;
	private outputPortCounter: number = 0;

	private _name: string;
	private _id: string; 
	private _version: number = 1; 

	private _type: string = undefined;

	private _inputs: InputPort[] = [];
	private _outputs: OutputPort[] = [];
	private _procedure: IProcedure[] = [];

	private _enabled: boolean = true; 
	private _hasExecuted: boolean = false;
	public _hasError: boolean = false;


	private _position: any;

	private _dependencies: any = [];
	private _dependencyNodes: number[] = [];

	private _active: IProcedure;

	public position: number[] = [0,0];

	private _time;

	constructor(data?: any){
		this._id = IdGenerator.getId();
		if(data){
			this.update_properties(data);
		}
	}

	get name(): string{
		return this._name;
	}

	set name(value: string){
		this._name = value;
	}

	get id(): string{
		return this._id;
	}

	set id(uuid: string) {
		this._id = uuid;
	}

	get inputs(): InputPort[]{
		return this._inputs;
	}

	set inputs(values: InputPort[]){
		this._inputs = values;
	}

	get outputs(): OutputPort[]{
		return this._outputs;
	}

	set outputs(values: OutputPort[]){
		this._outputs = values;
	}

	get enabled(): boolean{
		return this._enabled;
	}

	set enabled(value: boolean){
		this._enabled = value;
	}

	get type(): string{
		return this._type;
	}

	set type(value: string){
		this._type = value;
	}

	get procedure(): IProcedure[]{
		return this._procedure;
	}

	set procedure(prod: IProcedure[]){
		this._procedure = prod;
	}


	get active_procedure(): IProcedure{
		return this._active;
	}

	set active_procedure(value: IProcedure){
		this._active = value;

		// todo: validate if value exists
	}

	get version(): number{
		return this._version; 
	}

	set version(value: number){
		this._version = value;
	}

	get hasExecuted(): boolean{
		return this._hasExecuted; 
	}

	set hasExecuted(value: boolean){
		this._hasExecuted = value;
	}

	get hasError(): boolean{
		return this._hasError; 
	}

	set hasError(value: boolean){
		this._hasError = value;
	}

	get children(): IProcedure[]{
		return this._procedure;
	}

	set children(values: IProcedure[]){
		this._procedure = values;
	}

	get time_taken(): number{
		return this._time;
	}

	set time_taken(value: number){
		this._time = value;
	}


	update_properties(nodeData: IGraphNode, nodeMap?: any): void{

		this._name = nodeData["_name"];
		this._position = nodeData["_position"] || [0, 0];

		// map direct properties
		this._enabled = nodeData["_enabled"];


		// add inputs
		let inputs: InputPort[] = nodeData["_inputs"];
		for( let input_index in inputs ){
			let inp_data :InputPort = inputs[input_index];
			let input :InputPort = new InputPort(inp_data["_name"]);

			input.update(inp_data, "inp");
			this._inputs.push(input);
		}
			
		// add outputs
		let outputs: OutputPort[] = nodeData["_outputs"];
		for( let output_index in outputs ){
			let output_data: OutputPort = outputs[output_index];
			let output: OutputPort = new OutputPort(output_data["_name"]);

			output.update(output_data, "out");
			this._outputs.push(output);
		}

		// add procedure
		for( let p_data of nodeData["_procedure"] ){
			this._procedure.push(ProcedureUtils.copy_procedure(p_data));
		}
	}

	reset(): boolean{
		this._hasExecuted = false;
		this._hasError = false;

		this._procedure.map(function(prod){
			prod.reset();
		});

		this._outputs.map(function(output){
			output.reset();
		});

		this.time_taken = undefined;

		return (this._hasExecuted == false); 
	}
	
}

