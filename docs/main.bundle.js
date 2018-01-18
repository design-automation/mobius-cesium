webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"app-container\" *ngIf=\"supported\">\r\n\r\n  <!-- <app-menu></app-menu> -->\r\n <!--  <button id=\"setting\" mat-button color=\"secondary\" \r\n   (click)=\"showMenu = !showMenu\">\r\n   <mat-icon>settings</mat-icon>\r\n </button> -->\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"wrapper\">\r\n\r\n      <split  direction=\"horizontal\" \r\n              [gutterSize]=\"layout.gutter\" \r\n              [useTransition]=\"layout.useTransition\">\r\n\r\n            <!-- main pane -->\r\n            <split-area \r\n              [size]=\"layout.size.main\" order=\"1\">\r\n              <app-panel panel_id=\"main\"></app-panel>\r\n            </split-area>\r\n\r\n            <!-- secondary split pane -->\r\n            <split-area \r\n              [size]=\"layout.size.side\"  order=\"2\">\r\n\r\n                <split  direction=\"vertical\" \r\n                        [gutterSize]=\"layout.gutter\" \r\n                        [useTransition]=\"layout.useTransition\">\r\n\r\n                    <split-area [size]=\"layout.size.top\" order=\"1\">\r\n                      <app-panel panel_id=\"top\"></app-panel>\r\n                    </split-area>\r\n\r\n                    <split-area [size]=\"layout.size.middle\" order=\"2\">\r\n                      <app-panel panel_id=\"middle\"></app-panel>\r\n                    </split-area>\r\n\r\n                    <!-- fixed -->\r\n                    <split-area [size]=\"layout.size.bottom\" order=\"3\">\r\n                      <app-panel panel_id=\"bottom\"></app-panel>\r\n                    </split-area>\r\n\r\n                </split>\r\n\r\n            </split-area>\r\n            \r\n      </split>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      width: 250px;\n      border-right: 4px solid #A9BCEC;\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n#app-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n  padding: 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  /* Webkit */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* IE 10  */\n  /* Currently not supported in Opera but will be soon */\n  -o-user-select: none;\n  user-select: none; }\n  #app-container #setting {\n    position: absolute;\n    left: 30px;\n    bottom: 30px; }\n  #app-container .container {\n    position: relative;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    background-color: white; }\n    #app-container .container .wrapper {\n      position: absolute;\n      width: 100%;\n      height: 100%; }\n      #app-container .container .wrapper .split {\n        height: 100%;\n        -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n                flex-grow: 1; }\n      #app-container .container .wrapper .split-area {\n        overflow: hidden; }\n        #app-container .container .wrapper .split-area .view-wrapper {\n          position: absolute;\n          height: 100%;\n          width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_layout_service__ = __webpack_require__("../../../../../src/app/global-services/layout.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*import { gs_json as gs } from "gs-json"; */
let AppComponent = class AppComponent {
    constructor(layoutService) {
        this.layoutService = layoutService;
        this.supported = false;
        let browser = this.checkBrowser();
        if (browser == "Chrome") {
            this.layout = layoutService.getAssets();
            this.supported = true;
        }
        else {
            alert("Oops... You seem to be using a browser not supported by Mobius. Please use Chrome.");
            this.supported = false;
        }
    }
    checkBrowser() {
        let brw = "";
        if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
            brw = 'Opera';
        }
        else if (navigator.userAgent.indexOf("Chrome") != -1) {
            brw = 'Chrome';
        }
        else if (navigator.userAgent.indexOf("Safari") != -1) {
            brw = 'Safari';
        }
        else if (navigator.userAgent.indexOf("Firefox") != -1) {
            brw = 'Firefox';
        }
        else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document["documentMode"] == true)) {
            brw = 'IE';
        }
        else {
            brw = 'unknown';
        }
        return brw;
    }
};
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__global_services_layout_service__["a" /* LayoutService */]])
], AppComponent);



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__custom_angular_modules_CustomMaterialModule__ = __webpack_require__("../../../../../src/app/custom-angular-modules/CustomMaterialModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_split__ = __webpack_require__("../../../../angular-split/esm2015/angular-split.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_ace_editor__ = __webpack_require__("../../../../ng2-ace-editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__global_services_flowchart_service__ = __webpack_require__("../../../../../src/app/global-services/flowchart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__global_services_layout_service__ = __webpack_require__("../../../../../src/app/global-services/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ui_components_controls_flowchart_controls_flowchart_controls_component__ = __webpack_require__("../../../../../src/app/ui-components/controls/flowchart-controls/flowchart-controls.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ui_components_controls_main_menu_menu_component__ = __webpack_require__("../../../../../src/app/ui-components/controls/main-menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ui_components_editors_procedure_editor_procedure_editor_component__ = __webpack_require__("../../../../../src/app/ui-components/editors/procedure-editor/procedure-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ui_components_editors_parameter_editor_parameter_editor_component__ = __webpack_require__("../../../../../src/app/ui-components/editors/parameter-editor/parameter-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ui_components_editors_flowchart_viewer_flowchart_viewer_component__ = __webpack_require__("../../../../../src/app/ui-components/editors/flowchart-viewer/flowchart-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ui_components_viewers_code_viewer_code_viewer_component__ = __webpack_require__("../../../../../src/app/ui-components/viewers/code-viewer/code-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ui_components_viewers_geometry_viewer_geometry_viewer_component__ = __webpack_require__("../../../../../src/app/ui-components/viewers/geometry-viewer/geometry-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ui_components_viewers_module_viewer_module_viewer_component__ = __webpack_require__("../../../../../src/app/ui-components/viewers/module-viewer/module-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ui_components_viewers_parameter_viewer_parameter_viewer_component__ = __webpack_require__("../../../../../src/app/ui-components/viewers/parameter-viewer/parameter-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ui_components_controls_modulebox_modulebox_component__ = __webpack_require__("../../../../../src/app/ui-components/controls/modulebox/modulebox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ui_components_editors_editor_editor_component__ = __webpack_require__("../../../../../src/app/ui-components/editors/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ui_components_viewers_viewer_container_viewer_container_component__ = __webpack_require__("../../../../../src/app/ui-components/viewers/viewer-container/viewer-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ui_components_viewers_text_viewer_text_viewer_component__ = __webpack_require__("../../../../../src/app/ui-components/viewers/text-viewer/text-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ui_components_viewers_help_viewer_help_viewer_component__ = __webpack_require__("../../../../../src/app/ui-components/viewers/help-viewer/help-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ui_components_viewers_node_library_node_library_component__ = __webpack_require__("../../../../../src/app/ui-components/viewers/node-library/node-library.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ui_components_layout_panel_panel_component__ = __webpack_require__("../../../../../src/app/ui-components/layout/panel/panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__gs_viewer_gs_viewer_module__ = __webpack_require__("../../../../../src/app/gs-viewer/gs-viewer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ui_components_console_console_component__ = __webpack_require__("../../../../../src/app/ui-components/console/console.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__global_services_console_service__ = __webpack_require__("../../../../../src/app/global-services/console.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











/*import { ModuleService } from './global-services/module.service';
*/



















let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__ui_components_controls_main_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_15__ui_components_editors_flowchart_viewer_flowchart_viewer_component__["a" /* FlowchartViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_16__ui_components_viewers_code_viewer_code_viewer_component__["a" /* CodeViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_17__ui_components_viewers_geometry_viewer_geometry_viewer_component__["a" /* GeometryViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_11__ui_components_controls_flowchart_controls_flowchart_controls_component__["a" /* FlowchartControlsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__ui_components_viewers_module_viewer_module_viewer_component__["a" /* ModuleViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_13__ui_components_editors_procedure_editor_procedure_editor_component__["a" /* ProcedureEditorComponent */],
            __WEBPACK_IMPORTED_MODULE_19__ui_components_viewers_parameter_viewer_parameter_viewer_component__["a" /* ParameterViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_14__ui_components_editors_parameter_editor_parameter_editor_component__["a" /* ParameterEditorComponent */],
            __WEBPACK_IMPORTED_MODULE_20__ui_components_controls_modulebox_modulebox_component__["a" /* ModuleboxComponent */],
            __WEBPACK_IMPORTED_MODULE_21__ui_components_editors_editor_editor_component__["a" /* EditorComponent */],
            __WEBPACK_IMPORTED_MODULE_22__ui_components_viewers_viewer_container_viewer_container_component__["a" /* ViewerContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_23__ui_components_viewers_text_viewer_text_viewer_component__["a" /* TextViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_24__ui_components_viewers_help_viewer_help_viewer_component__["a" /* HelpViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_25__ui_components_viewers_node_library_node_library_component__["a" /* NodeLibraryComponent */],
            __WEBPACK_IMPORTED_MODULE_26__ui_components_layout_panel_panel_component__["a" /* PanelComponent */],
            __WEBPACK_IMPORTED_MODULE_28__ui_components_console_console_component__["a" /* ConsoleComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_20__ui_components_controls_modulebox_modulebox_component__["a" /* ModuleboxComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_ace_editor__["a" /* AceEditorModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular_split__["a" /* AngularSplitModule */],
            __WEBPACK_IMPORTED_MODULE_8_angular_tree_component__["a" /* TreeModule */],
            __WEBPACK_IMPORTED_MODULE_5__custom_angular_modules_CustomMaterialModule__["a" /* CustomMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_27__gs_viewer_gs_viewer_module__["a" /* GSViewer */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__global_services_flowchart_service__["a" /* FlowchartService */], __WEBPACK_IMPORTED_MODULE_10__global_services_layout_service__["a" /* LayoutService */], __WEBPACK_IMPORTED_MODULE_29__global_services_console_service__["a" /* ConsoleService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);



/***/ }),

/***/ "../../../../../src/app/base-classes/code/CodeFactory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generators_javascript_generator__ = __webpack_require__("../../../../../src/app/base-classes/code/generators/javascript_generator.ts");

class CodeFactory {
    static getCodeGenerator(language) {
        if (language == "js") {
            return new __WEBPACK_IMPORTED_MODULE_0__generators_javascript_generator__["a" /* CodeGeneratorJS */]();
        }
        else
            throw Error("Unknown language");
    }
    ;
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CodeFactory;



/***/ }),

/***/ "../../../../../src/app/base-classes/code/CodeGenerator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class CodeGenerator {
    constructor(language) {
        this._language = language;
    }
    ;
    setModules(modules) {
        this._modules = modules;
    }
    getLanguage() {
        return this._language;
    }
    // takes a flowchart and generates some code string 
    getDisplayCode(flowchart) {
        throw Error("Not implemented");
    }
    ;
    executeNode(node, params, Modules, print) {
        throw Error("Not implemented");
    }
    ;
    getFunctionCall(node, params) {
        throw Error("Not implemented");
    }
    ;
    getDefinition(node) {
        throw Error("Not implemented");
    }
    ;
    getNodeCode(node) {
        throw Error("Not implemented");
    }
    ;
    getNodeOutputCode(node, output_idx) {
        throw Error("Not implemented");
    }
    ;
    generateConnectionLine(destination_node, destination_port, source_node, source_port) {
        throw Error("Not implemented");
    }
    ;
    generateProcedureCode(procedure) {
        throw Error("Not implemented");
    }
    ;
    generateInputPortCode(port) {
        throw Error("Not implemented");
    }
    ;
    generateOutputPortCode(port) {
        throw Error("Not implemented");
    }
    ;
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CodeGenerator;



/***/ }),

/***/ "../../../../../src/app/base-classes/code/CodeModule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generators_javascript_generator__ = __webpack_require__("../../../../../src/app/base-classes/code/generators/javascript_generator.ts");
/* unused harmony reexport CodeGeneratorJS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CodeFactory__ = __webpack_require__("../../../../../src/app/base-classes/code/CodeFactory.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__CodeFactory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__computation_modules_ModuleUtils__ = __webpack_require__("../../../../../src/app/base-classes/code/computation-modules/ModuleUtils.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__computation_modules_ModuleUtils__["a"]; });
/*export {CodeGeneratorPY} from './generators/python_generator';*/





/***/ }),

/***/ "../../../../../src/app/base-classes/code/computation-modules/ModuleUtils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ModuleUtils {
    static createModule(name, fn_list) {
        let obj = {
            _name: name,
            _version: 0.1,
            _author: "Patrick"
        };
        for (let prop in fn_list) {
            obj[prop] = fn_list[prop];
        }
        return obj;
    }
    static getModuleFromSet(ModuleSet, name) {
        let imod;
        for (let key in ModuleSet) {
            let mod = ModuleSet[key];
            if (key !== name) {
                for (let prop in mod) {
                    let submod = mod[prop];
                    ;
                    if (typeof (submod) == "function") {
                        break;
                    }
                    if (prop == name && typeof (submod) == "object") {
                        console.log(submod);
                        imod = this.createModule(prop, submod);
                    }
                }
            }
            else {
                imod = this.createModule(key, mod);
            }
        }
        return imod;
    }
    static getName(mod) {
        return mod["_name"];
    }
    static getAuthor(mod) {
        return mod["_author"];
    }
    static getVersion(mod) {
        return mod["_version"];
    }
    static isValid(mod) {
        if (mod == undefined)
            return undefined;
        return !!(this.getName(mod) && this.getVersion(mod) && this.getAuthor(mod));
    }
    static isCompatible(mod1, mod2) {
        if (mod1 == undefined || mod2 == undefined)
            return false;
        let _nameCheck = this.getName(mod1) == this.getName(mod2);
        let _versionCheck = this.getVersion(mod1) == this.getVersion(mod2);
        let _authorCheck = this.getAuthor(mod1) == this.getAuthor(mod2);
        return _nameCheck && _versionCheck && _authorCheck;
    }
    static getParams(func) {
        let fnStr = func.toString().replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, '');
        let result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).split(","); //.match( /([^\s,]+)/g);
        if (result === null || result[0] == "") {
            result = [];
        }
        let final_result = result.map(function (r) {
            r = r.trim();
            let r_value = r.split("=");
            if (r_value.length == 1) {
                return { type: r_value[0].trim(), value: r_value[0].trim() };
            }
            else {
                return { type: r_value[0].trim(), value: r_value[1].trim() };
            }
        });
        return final_result;
    }
    static getFunctions(mod) {
        // default names to exclude
        let fn = [];
        let module_name = this.getName(mod);
        let fns = Object.getOwnPropertyNames(mod).filter(function (prop) {
            return ["length", "prototype", "name", "_name", "_author", "_version"].indexOf(prop) == -1;
        });
        for (let f = 0; f < fns.length; f++) {
            let function_name = fns[f];
            // todo: why!?
            let func = mod[function_name];
            if (mod.hasOwnProperty(function_name)) {
                let obj = { name: function_name,
                    module: module_name,
                    params: this.getParams(func),
                    def: func
                };
                fn.push(obj);
            }
            else {
                continue;
            }
        }
        return fn;
    }
    ;
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ModuleUtils;



/***/ }),

/***/ "../../../../../src/app/base-classes/code/generators/javascript_generator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CodeGenerator__ = __webpack_require__("../../../../../src/app/base-classes/code/CodeGenerator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureModule.ts");


class CodeGeneratorJS extends __WEBPACK_IMPORTED_MODULE_0__CodeGenerator__["a" /* CodeGenerator */] {
    constructor() { super("js"); }
    //
    //	gets the display code for the flowchart
    //
    getDisplayCode(flow) {
        let fn_calls = [];
        let code_defs = [];
        let connector_lines = [];
        let code_block = "";
        let nodeOrder = flow.getNodeOrder();
        let all_nodes = flow.getNodes();
        let all_edges = flow.getEdges();
        // connector lines
        for (let c = 0; c < all_edges.length; c++) {
            let edge = all_edges[c];
            let input_node = flow.getNodeByIndex(edge.input_address[0]);
            let output_node = flow.getNodeByIndex(edge.output_address[0]);
            // create line assigning values
            let code = this.generateConnectionLine(input_node, edge.input_address[1], output_node, edge.output_address[1]);
            if (connector_lines[edge.input_address[0]] == undefined) {
                connector_lines[edge.input_address[0]] = [];
            }
            connector_lines[edge.input_address[0]].push(code);
        }
        // get all the codes of the different functions and the function calls 
        for (let c = 0; c < nodeOrder.length; c++) {
            // check inputs connected to outputs
            var nodeIndex = nodeOrder[c];
            var node = all_nodes[nodeIndex];
            code_defs.push(this.getNodeCode(node));
            if (connector_lines[nodeIndex] !== undefined) {
                fn_calls.push(connector_lines[nodeIndex].join(";\n"));
            }
            fn_calls.push(this.getFunctionCall(node));
        }
        code_block = code_defs.join(";\n\n") + "\n" + fn_calls.join(";\n") + ";";
        // check if code works by uncommenting this line
        // eval(code_block);
        return code_block;
    }
    //
    //
    //
    getFunctionCall(node, params, executionCode) {
        let fn_call = "";
        let param_values = [];
        let inputs = node.getInputs();
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].isConnected() == true) {
                let input_name = inputs[i].getName();
                if (params) {
                    if (executionCode == true) {
                        param_values.push("params." + input_name);
                    }
                    else {
                        let p = params[input_name];
                        param_values.push(p);
                    }
                }
                else {
                    param_values.push(input_name);
                }
            }
        }
        // make function call and assign to variable of same name
        fn_call = "let " + node.getName() + "=" + node.getName() + node.getVersion() + "( " + param_values.join(", ") + " )";
        return fn_call;
    }
    getDefinition(node) {
        let fn_def = "";
        let params = [];
        let inputs = node.getInputs();
        for (let i = 0; i < inputs.length; i++) {
            params.push(inputs[i].getName());
        }
        // make function
        fn_def += "function " + node.getName() + node.getVersion() + "( " + params.join(", ") + " )() \n";
        return fn_def;
    }
    getNodeCode(node) {
        let nodeVars = [];
        let fn_code = "";
        // add initializations
        // get params
        let params = [];
        let initializations = [];
        let inputs = node.getInputs();
        for (let i = 0; i < inputs.length; i++) {
            let inp = inputs[i];
            nodeVars.push(inp.getName());
            if (inp.isConnected() == true) {
                params.push(inp.getName());
            }
            let input_port_code = this.generateInputPortCode(inp);
            if (input_port_code !== "") {
                initializations.push(input_port_code);
            }
        }
        // make function
        fn_code += "function " + node.getName() + node.getVersion() + "( " + params.join(", ") + " ) { \n";
        fn_code += (initializations.length > 0 ? initializations.join(";\n") + ";\n" : "");
        // add outputs 
        let results = [], opInits = [];
        let outputs = node.getOutputs();
        for (let o = 0; o < outputs.length; o++) {
            let oname = outputs[o].getName();
            nodeVars.push(oname);
            results.push(oname + " : " + oname);
            opInits.push(this.generateOutputPortCode(outputs[o]));
        }
        // add initialization for outputs
        fn_code += (opInits.length > 0 ? "\n" + opInits.join(";\n") + ";\n" : "");
        // add procedure
        for (let line = 0; line < node.getProcedure().length; line++) {
            let procedure = node.getProcedure()[line];
            // if procedure is disabled - skip
            if (procedure.isDisabled()) {
                continue;
            }
            fn_code += "\n" + this.generateProcedureCode(procedure, nodeVars, undefined);
        }
        // add return object
        fn_code += "\n" + "return " + " { " + results.join(", ") + " } " + ";";
        // ending
        fn_code += "\n }\n";
        return fn_code;
    }
    getNodeOutputCode(node, output_idx) {
        return node.getName() + "." + node.getOutputByIndex(output_idx).getName();
    }
    generateConnectionLine(destination_node, destination_port, source_node, source_port) {
        let code = "let " + destination_node.getInputByIndex(destination_port).getName() + "=" + this.getNodeOutputCode(source_node, source_port) + "\n";
        return code;
    }
    static existsInNodeVars(nodeVars, name) {
        let var_name = name;
        // check if name might be an array index
        let reg = new RegExp(/(\w*)(\[\w*\])/g);
        let result = reg.exec(name);
        if (result) {
            var_name = result[1];
            console.log(var_name, nodeVars);
        }
        else {
            // do nothing
        }
        return (nodeVars.indexOf(var_name) > -1);
    }
    generateProcedureCode(procedure, nodeVars = [], prodFn) {
        // change based on type
        let code;
        let prod_type = procedure.getType();
        if (prodFn == undefined) {
            prodFn = this.generateProcedureCode;
        }
        if (prod_type == __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].Data) {
            let init;
            if (CodeGeneratorJS.existsInNodeVars(nodeVars, procedure.getLeftComponent().expression) == false) {
                init = "let ";
                nodeVars.push(procedure.getLeftComponent().expression);
            }
            else {
                init = "";
            }
            code = init + procedure.getLeftComponent().expression + " = " + procedure.getRightComponent().expression + ";";
            if (procedure.printToConsole()) {
                code = code + "\n" + "print(" + "\'" + procedure.getLeftComponent().expression + ":\' +" + procedure.getLeftComponent().expression + ");\n";
            }
        }
        else if (prod_type == __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].Action) {
            let paramList = [];
            let params = procedure.getRightComponent().params;
            for (let p = 0; p < params.length; p++) {
                let param = params[p];
                if (param.value !== undefined) {
                    paramList.push(param.value);
                }
                else {
                    paramList.push(param.type);
                }
            }
            let right = procedure.getRightComponent();
            let init;
            if (CodeGeneratorJS.existsInNodeVars(nodeVars, procedure.getLeftComponent().expression) == false) {
                init = "let ";
                nodeVars.push(procedure.getLeftComponent().expression);
            }
            else {
                init = "";
            }
            code = init + procedure.getLeftComponent().expression
                + " = "
                + "Modules."
                + right.module.trim()
                + "." + right.fn_name + "( " + paramList.join(",") + " );\n";
            if (procedure.printToConsole()) {
                code = code + "\n" + "print(" + "\'" + procedure.getLeftComponent().expression + ":\' +" + procedure.getLeftComponent().expression + ");\n";
            }
        }
        else if (procedure.hasChildren) {
            let codeArr = [];
            // add statement
            let statement = "";
            if (prod_type == __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].IfElseControl) {
                statement = "// if-else";
            }
            else if (prod_type == __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].IfControl) {
                statement = "if (" + procedure.getLeftComponent().expression + "){";
            }
            else if (prod_type == __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].ElseControl) {
                statement = "else{";
            }
            else if (prod_type == __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].ForLoopControl) {
                statement = "for ( let " + procedure.getLeftComponent().expression + " of " + procedure.getRightComponent().expression + "){";
                if (CodeGeneratorJS.existsInNodeVars(nodeVars, procedure.getLeftComponent().expression) == false) {
                    nodeVars.push(procedure.getLeftComponent().expression);
                }
            }
            codeArr.push(statement);
            // add children
            procedure.getChildren().map(function (child) {
                codeArr.push(prodFn(child, nodeVars, prodFn));
            });
            // add ending
            if (prod_type !== __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].IfElseControl)
                codeArr.push("}\n");
            code = codeArr.join("\n");
        }
        return code;
    }
    //
    //	required for code generation
    //
    generateInputPortCode(port) {
        if (port.isConnected() == true)
            return "";
        return "let " + port.getName() + " = " + port.getValue();
    }
    generateOutputPortCode(port) {
        return "let " + port.getName() + " = " + port.getDefaultValue();
    }
    executeNode(node, params, Modules, print) {
        //let gis = this._modules["gis"];
        let str = "(function(){ \
						" + this.getNodeCode(node) + "\n" + this.getFunctionCall(node, [], true) + "\n" + "return " + node.getName() + ";" + "})(); \
						";
        let result;
        try {
            console.log(str);
            result = eval(str);
        }
        catch (ex) {
            node.hasError();
            throw Error(ex);
        }
        return result; //result;// return result of the node
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CodeGeneratorJS;

;


/***/ }),

/***/ "../../../../../src/app/base-classes/flowchart/Flowchart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//	Flowchart class 
//  Implement IFlowchart
//	
//
//
class Flowchart {
    //
    //	constructor needs 2 arguments  - username and icodegenerator
    //
    constructor(username) {
        this._nodes = [];
        this._edges = [];
        this._author = username;
    }
    ;
    //	gets author of the flowchart
    getAuthor() {
        return this._author;
    }
    //	Summary of flowchart
    getSummary() {
        return "This is a flowchart, with " + this._nodes.length + " nodes, written by " + this._author;
    }
    //
    //	Maintains the node order for execution
    //
    addNode(node) {
        if (node == undefined) {
            //todo: create new node
        }
        // a new node will have no dependencies - hence push index to end of _nodeTree
        this._nodes.push(node);
        return this._nodes.length;
    }
    ;
    addEdge(outputAddress, inputAddress) {
        if (outputAddress.length !== 2 || inputAddress.length !== 2) {
            console.log("inputAddress", inputAddress);
            console.log("outputAddress", outputAddress);
            throw Error("Invalid arguments for edge");
        }
        let edge = { output_address: outputAddress, input_address: inputAddress };
        // todo: check for valid input/output addresses and port address
        this._edges.push(edge);
        return this._edges.length;
    }
    ;
    disconnectEdgesWithNode(node_index) {
        let splicedEdges = [];
        let edges = this.getEdges();
        for (let e = 0; e < edges.length; e++) {
            let edge = edges[e];
            if (edge.output_address[0] == node_index) {
                let port = this.getNodeByIndex(edge.input_address[0]).getInputByIndex(edge.input_address[1]);
                port.disconnect();
                port.setComputedValue(undefined);
                splicedEdges.push(e);
            }
            else if (edge.input_address[0] == node_index) {
                let port = this.getNodeByIndex(edge.output_address[0]).getOutputByIndex(edge.output_address[1]);
                port.disconnect();
                port.setComputedValue(undefined);
                splicedEdges.push(e);
            }
        }
        return splicedEdges;
    }
    deleteNode(nodeIndex) {
        this.deleteEdges(this.disconnectEdgesWithNode(nodeIndex));
        // todo: check for valid node index
        this._nodes.splice(nodeIndex, 1);
        return this._nodes.length;
    }
    deleteEdge(edgeIndex) {
        // todo: check for valid edge index
        this._edges.splice(edgeIndex, 1);
        return this._edges.length;
    }
    deleteEdges(edgeArr) {
        this._edges = this._edges.filter(function (edge, index) {
            return (edgeArr.indexOf(index) == -1);
        });
    }
    disconnectEdgesWithPortIndex(nodeIndex, portIndex, type) {
        let splicedEdges = [];
        let edges = this.getEdges();
        for (let e = 0; e < edges.length; e++) {
            let edge = edges[e];
            // if type == "input"
            if (type == "input" && edge.input_address[0] == nodeIndex && edge.input_address[1] == portIndex) {
                let port = this.getNodeByIndex(edge.output_address[0]).getOutputByIndex(edge.output_address[1]);
                port.disconnect();
                port.setComputedValue(undefined);
                splicedEdges.push(e);
            }
            else if (type == "output" && edge.output_address[0] == nodeIndex && edge.output_address[1] == portIndex) {
                let port = this.getNodeByIndex(edge.input_address[0]).getInputByIndex(edge.input_address[1]);
                port.disconnect();
                port.setComputedValue(undefined);
                splicedEdges.push(e);
            }
        }
        return splicedEdges;
    }
    disconnectNode(nodeIndex) {
        let _node = this.getNodeByIndex(nodeIndex);
        this.deleteEdges(this.disconnectEdgesWithNode(nodeIndex));
        _node.getInputs().map(function (input) {
            input.disconnect();
            input.setComputedValue(undefined);
        });
        _node.getOutputs().map(function (output) {
            output.disconnect();
            output.setComputedValue(undefined);
        });
        // for(let i=0; i < _node.getInputs().length; i++){
        // 	this.disconnectPort("input", i, nodeIndex)
        // }	
        // for(let i=0; i < _node.getOutputs().length; i++){
        // 	this.disconnectPort("output", i, nodeIndex)
        // }
    }
    disconnectPort(type, portIndex, nodeIndex) {
        let edges = this._edges;
        /// disconnect the edges related to this port
        let edgesArr = this.disconnectEdgesWithPortIndex(nodeIndex, portIndex, type);
        this.deleteEdges(edgesArr);
        /// update indices of edges
        /// delete port
        for (let e = 0; e < edges.length; e++) {
            let input_node = edges[e].input_address[0];
            let input_port = edges[e].input_address[1];
            if (type == "input") {
                let input_node = edges[e].input_address[0];
                let input_port = edges[e].input_address[1];
                if (input_node == nodeIndex && input_port >= portIndex) {
                    edges[e].input_address[1] = edges[e].input_address[1] - 1;
                }
            }
            else if (type == "output") {
                let output_node = edges[e].output_address[0];
                let output_port = edges[e].output_address[1];
                if (output_node == nodeIndex && output_port >= portIndex) {
                    edges[e].output_address[1] = edges[e].output_address[1] - 1;
                }
            }
            else {
                console.warn("reached 358");
            }
        }
    }
    deletePort(type, portIndex, nodeIndex) {
        this.disconnectPort(type, portIndex, nodeIndex);
        let _node = this.getNodeByIndex(nodeIndex);
        if (type == "input") {
            _node.deleteInput(portIndex);
        }
        else if (type == "output") {
            _node.deleteOutput(portIndex);
        }
        else {
            throw Error("Unknown port type");
        }
    }
    getNodes() {
        return this._nodes;
    }
    getEdges() {
        return this._edges;
    }
    //
    //	Get node by index in flowchart
    //	todo: fix
    //
    getNodeByIndex(index) {
        return this._nodes[index];
    }
    getEdgeByIndex(index) {
        return this._edges[index];
    }
    //todo: provide a more efficient sort
    getNodeOrder() {
        let rankedNodeOrder = [];
        let incoming = [];
        this._nodes.map(function (node, index) {
            incoming[index] = { count: 0, id: index };
        });
        for (let c = 0; c < this._edges.length; c++) {
            let edge = this._edges[c];
            let in_nodeIndex = edge.input_address[0];
            let out_nodeIndex = edge.output_address[0];
            incoming[in_nodeIndex].count++;
            incoming[out_nodeIndex].count--;
        }
        let an = this._nodes;
        rankedNodeOrder = incoming.sort(function (a, b) {
            return a.count - b.count;
        }).map(function (obj) {
            return obj.id;
        });
        return rankedNodeOrder;
    }
    //
    //	clears all the cached results
    //
    reset() {
        for (let n = 0; n < this._nodes.length; n++) {
            this._nodes[n].reset();
        }
    }
    //
    // todo: should this happen realtime?
    //
    /*private sortNodesByRank(nodes: IGraphNode[]): IGraphNode[]{

        let ranked: any[] = [];
        let sorted: IGraphNode[] = [];

        for(let i=0; i < nodes.length; i++){

            let node :IGraphNode = nodes[i];
            let rank :number = node.rank();
            console.log(node.getName(), rank)

            if( ranked[rank] == undefined){
                ranked[rank] = [];
            }
            ranked[rank].push(node);
        }

        let all_ranks = Object.keys(ranked).map(function(num){ return parseInt(num); }).sort();
        for( let r=0; r < all_ranks.length; r++){
            let rank = all_ranks[r];
            let nodes_with_rank = ranked[rank];
            sorted = sorted.concat(nodes_with_rank);
        }

        return sorted;
    }*/
    updateDependentInputs(node, originalRank) {
        let selectedEdges = this.getEdges().filter(function (edge) {
            return edge.output_address[0] == originalRank;
        });
        for (let e = 0; e < selectedEdges.length; e++) {
            let edge = selectedEdges[e];
            let inputNode = this.getNodeByIndex(edge.input_address[0]);
            // set computed value of port
            // should this be from within the node?
            let outputPort = node.getOutputByIndex(edge.output_address[1]);
            let inputPort = inputNode.getInputByIndex(edge.input_address[1]);
            inputPort.setComputedValue(outputPort.getValue());
            console.log(outputPort.getValue());
            // let value = outputPort.getValue();
            // if( value["_kernel"] && value["_id"] ){
            // 	console.log(value);
            // 	let obj: gs.Model = outputPort.getValue().getModel();
            // 	let objStr: string = obj.toJSON();
            // 	let entity = value.constructor;
            // 	let new_obj = new entity();
            // 	new_obj["_id"] = value["_id"];
            // 	let new_model = new gs.Model(JSON.parse(objStr));
            // 	inputPort.setComputedValue(new_obj);
            // }
            // else{
            // 	inputPort.setComputedValue(value);
            // }
            // create a new object
            //let entity = obj.constructor;
            // let kernelCons = obj["_kernel"].constructor;
            // let new_obj = new entity();
            // new_obj["_id"] = obj["_id"];
            // new_obj["_kernel"] = new kernelCons();
            // new_obj["_kernel"]["_model"]  = new kernelCons();
            // ["_attribs", "_groups", "_metadata", "_objs", "_points", "_topos_trees"].map(function(prop: string){
            // 	new_obj["_kernel"]["_model"][prop] = obj["_kernel"][prop];
            // })
            // console.log(new_obj);
        }
    }
    //
    //	executes the flowchart
    //
    execute(code_generator, modules, print) {
        // set all nodes to status not executed
        // future: cache results and set status based on changes
        this.reset();
        // sort nodes 
        let all_nodes = this.getNodes();
        let sortOrder = this.getNodeOrder();
        // execute each node
        // provide input to next 
        let timeStarted = (new Date()).getTime();
        for (let nc = 0; nc < sortOrder.length; nc++) {
            let originalRank = sortOrder[nc];
            let node = all_nodes[originalRank];
            // check status of the node; don't rerun
            if (node.hasExecuted() == true || node.isDisabled()) {
                continue;
            }
            node.execute(code_generator, modules, print);
            //console.log(node.getName(), node.getResult());
            this.updateDependentInputs(node, originalRank);
            //todo: print time taken
        }
        return true;
    }
    /*executeNode(node: IGraphNode){

        console.log("Executing ", node.getName());
        
        let params :any = null;

        if( node.isIndependent() == false ){
            params = {};
            let dependencies :any = node.getDependencies();

            for(let d=0; d < dependencies.length; d++){
                // dependencies are stored as an array of arrays - [ [], [], [] ]
                // the 0th index stores the node, the 1st index stores the port number
                let parent_node = this.getNode(dependencies[d][0]);
                if(parent_node.getStatus() == 1){
                    let source_port = parent_node.getOutputByIndex(dependencies[d][1]);
                    let my_port = node.getInputByIndex(dependencies[d][2]);
                    params[my_port.getName()]  = source_port.getValue();
                    my_port.setValue(source_port.getValue());
                }
            }
        }
        
        node.executeNode(this.code_generator, params);

    }*/
    save() {
        throw Error("Not implemented");
        /*this.reset();
        //todo:
        console.log(CircularJSON.stringify(this));
        return CircularJSON.stringify(this);*/
    }
    readFromJSON(filename) {
        // todo:
        // read the nodes and edges and add to the flowchart
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Flowchart;



/***/ }),

/***/ "../../../../../src/app/base-classes/flowchart/FlowchartModule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Flowchart__ = __webpack_require__("../../../../../src/app/base-classes/flowchart/Flowchart.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Flowchart__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FlowchartReader__ = __webpack_require__("../../../../../src/app/base-classes/flowchart/FlowchartReader.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__FlowchartReader__["a"]; });




/***/ }),

/***/ "../../../../../src/app/base-classes/flowchart/FlowchartReader.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Flowchart__ = __webpack_require__("../../../../../src/app/base-classes/flowchart/Flowchart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_NodeModule__ = __webpack_require__("../../../../../src/app/base-classes/node/NodeModule.ts");


class FlowchartReader {
    static readFlowchartFromData(data) {
        // recreate the flowchart from data
        let fc = new __WEBPACK_IMPORTED_MODULE_0__Flowchart__["a" /* Flowchart */](data["author"]);
        let nodes = data["_nodes"];
        let edges = data["_edges"];
        // add nodes
        for (let index in nodes) {
            let n_data = nodes[index];
            let node = new __WEBPACK_IMPORTED_MODULE_1__node_NodeModule__["a" /* GraphNode */](n_data["name"], n_data["type"]);
            node.update(n_data);
            fc.addNode(node);
        }
        // add edges
        for (let index in edges) {
            let e_data = edges[index];
            fc.addEdge(e_data.output_address, e_data.input_address);
        }
        return fc;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FlowchartReader;



/***/ }),

/***/ "../../../../../src/app/base-classes/misc/GUID.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class IdGenerator {
    static s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    static getId() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
            this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IdGenerator;



/***/ }),

/***/ "../../../../../src/app/base-classes/node/GraphNode.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_GUID__ = __webpack_require__("../../../../../src/app/base-classes/misc/GUID.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__port_PortModule__ = __webpack_require__("../../../../../src/app/base-classes/port/PortModule.ts");



class GraphNode {
    constructor(name, type) {
        this.portCounter = 0;
        this._version = 1;
        this._type = undefined;
        this._inputs = [];
        this._outputs = [];
        this._procedure = [];
        this._hasExecuted = false;
        this._isDisabled = false;
        this._hasError = false;
        this._dependencies = [];
        this._dependencyNodes = [];
        this.position = [0, 0];
        this._id = __WEBPACK_IMPORTED_MODULE_0__misc_GUID__["a" /* IdGenerator */].getId();
        this._name = name;
        this._type = type;
    }
    //	
    //
    //
    getName() {
        return this._name;
    }
    ;
    setName(name) {
        this._name = name;
    }
    getId() {
        return this._id;
    }
    ;
    getVersion() {
        return this._version;
    }
    getType() {
        return this._type;
    }
    overwrite(node) {
        this._inputs = node.getInputs();
        this._outputs = node.getOutputs();
        this._procedure = node.getProcedure();
        return this._version++;
    }
    update(nodeData) {
        if (nodeData["lib"] == undefined) {
            // loading from file
            this._id = nodeData["_id"];
            this.position = nodeData["position"];
            this._name = nodeData["_name"];
        }
        else {
            // creating from library
            this.position = [0, 0];
        }
        // map direct properties
        this.portCounter = nodeData["portCounter"];
        this._isDisabled = nodeData["_isDisabled"];
        // add inputs
        let inputs = nodeData["_inputs"];
        for (let input_index in inputs) {
            let inp_data = inputs[input_index];
            let input = new __WEBPACK_IMPORTED_MODULE_2__port_PortModule__["a" /* InputPort */](inp_data["_name"]);
            input.update(inp_data);
            this._inputs.push(input);
        }
        // add outputs
        let outputs = nodeData["_outputs"];
        for (let output_index in outputs) {
            let output_data = outputs[output_index];
            let output = new __WEBPACK_IMPORTED_MODULE_2__port_PortModule__["c" /* OutputPort */](output_data["_name"]);
            output.update(output_data);
            this._outputs.push(output);
        }
        // add procedure
        let procedureArr = nodeData["_procedure"];
        for (let prodIndex in procedureArr) {
            let procedure = __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["a" /* ProcedureFactory */].getProcedureFromData(procedureArr[prodIndex], undefined);
            this._procedure.push(procedure);
        }
    }
    removeType() {
        this._type = undefined;
    }
    //
    //
    //
    addInput(name) {
        let default_name = "in" + this.portCounter;
        if (name !== undefined) {
            default_name = name;
        }
        let inp = new __WEBPACK_IMPORTED_MODULE_2__port_PortModule__["a" /* InputPort */](default_name);
        this._inputs.push(inp);
        this.portCounter++;
        this.removeType();
        return this._inputs.length;
    }
    addOutput(name) {
        let default_name = "out" + this.portCounter;
        if (name !== undefined) {
            default_name = name;
        }
        let oup = new __WEBPACK_IMPORTED_MODULE_2__port_PortModule__["c" /* OutputPort */](default_name);
        this._outputs.push(oup);
        this.portCounter++;
        this.removeType();
        return this._outputs.length;
    }
    deleteInput(input_port_index) {
        this._inputs.splice(input_port_index, 1);
        this.removeType();
        //delete this._inputs[input_port_index];
        return this._inputs.length;
    }
    deleteOutput(output_port_index) {
        this._outputs.splice(output_port_index, 1);
        this.removeType();
        //delete this._outputs[output_port_index];
        return this._outputs.length;
    }
    getInputs() {
        return this._inputs;
    }
    getOutputs() {
        return this._outputs;
    }
    getInputByIndex(input_port_index) {
        return this._inputs[input_port_index];
    }
    getOutputByIndex(output_port_index) {
        return this._outputs[output_port_index];
    }
    getProcedure() {
        return this._procedure;
    }
    addProcedure(prod) {
        this.removeType();
        this._procedure.push(prod);
    }
    addProcedureAtPosition(prod, index) {
        this.removeType();
        this._procedure.splice(index, 0, prod);
    }
    deleteProcedure(prod) {
        this.removeType();
        this._procedure = this._procedure.filter(function (child) {
            if (child === prod) {
                return false;
            }
            else {
                return true;
            }
        });
    }
    deleteProcedureAtPosition(index) {
        this.removeType();
        this._procedure.splice(index, 1);
    }
    //
    //
    //
    isDisabled() {
        return this._isDisabled;
    }
    enable() {
        this._isDisabled = false;
    }
    disable() {
        this._isDisabled = true;
    }
    hasExecuted() {
        return this._hasExecuted;
    }
    reset() {
        this._hasExecuted = false;
        this._hasError = false;
        this._outputs.map(function (output) {
            output.reset();
        });
        return (this._hasExecuted == false);
    }
    hasError() {
        this._hasError = true;
    }
    //
    //
    //
    /*isIndependent(): boolean{
        if(this._dependencies.length > 0)
            return false;
        return true;
    }

    addDependency(node_port_input_idx : number[]){

        if( this._dependencyNodes.indexOf( node_port_input_idx[0] ) == -1){
            this._dependencyNodes.push(node_port_input_idx[0]);
        }

        this._dependencies.push(node_port_input_idx);
    }
    
    removeDependency(node_port_idx: number[]){
        
    }

    getDependencies(): number[][]{
        return this._dependencies;
    }

    
    getDependencyNodes(): number[]{
        return this._dependencyNodes
    };
    
    rank(): number{
        return this._dependencyNodes.length
    };*/
    //
    //
    //
    execute(code_generator, modules, print) {
        let params = [];
        this.getInputs().map(function (i) { params[i.getName()] = i.getValue(); });
        // use code generator to execute code
        let result = code_generator.executeNode(this, params, modules, print);
        // add results to this node
        for (let n = 0; n < this._outputs.length; n++) {
            let output_port = this._outputs[n];
            output_port.setComputedValue(result[output_port.getName()]);
        }
        this._hasExecuted = true;
    }
    getResult() {
        let final_values = {};
        for (let o = 0; o < this._outputs.length; o++) {
            let output = this._outputs[o];
            final_values[output.getName()] = output.getValue();
        }
        return final_values;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GraphNode;



/***/ }),

/***/ "../../../../../src/app/base-classes/node/NodeModule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GraphNode__ = __webpack_require__("../../../../../src/app/base-classes/node/GraphNode.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__GraphNode__["a"]; });



/***/ }),

/***/ "../../../../../src/app/base-classes/port/InputPort.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Port__ = __webpack_require__("../../../../../src/app/base-classes/port/Port.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__InputPortTypes__ = __webpack_require__("../../../../../src/app/base-classes/port/InputPortTypes.ts");


class InputPort extends __WEBPACK_IMPORTED_MODULE_0__Port__["a" /* Port */] {
    // input type 
    // slider
    // input
    // color
    // file
    constructor(name, type) {
        super(name);
        if (type !== undefined) {
            this._type = type.name;
            this.setDefaultValue(type.value);
        }
        else {
            this._type = __WEBPACK_IMPORTED_MODULE_1__InputPortTypes__["a" /* InputPortTypes */].Default;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = InputPort;



/***/ }),

/***/ "../../../../../src/app/base-classes/port/InputPortTypes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputPortTypes; });
var InputPortTypes;
(function (InputPortTypes) {
    InputPortTypes[InputPortTypes["Default"] = 0] = "Default";
    InputPortTypes[InputPortTypes["Input"] = 1] = "Input";
    InputPortTypes[InputPortTypes["ColorPicker"] = 2] = "ColorPicker";
    InputPortTypes[InputPortTypes["Dropdown"] = 3] = "Dropdown";
    InputPortTypes[InputPortTypes["FilePicker"] = 4] = "FilePicker";
    InputPortTypes[InputPortTypes["Output"] = 5] = "Output";
})(InputPortTypes || (InputPortTypes = {}));


/***/ }),

/***/ "../../../../../src/app/base-classes/port/OutputPort.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Port__ = __webpack_require__("../../../../../src/app/base-classes/port/Port.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__OutputPortTypes__ = __webpack_require__("../../../../../src/app/base-classes/port/OutputPortTypes.ts");


class OutputPort extends __WEBPACK_IMPORTED_MODULE_0__Port__["a" /* Port */] {
    constructor(name, type) {
        super(name);
        if (type !== undefined) {
            this._type = type;
        }
        else {
            this._type = __WEBPACK_IMPORTED_MODULE_1__OutputPortTypes__["a" /* OutputPortTypes */].Text;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = OutputPort;



/***/ }),

/***/ "../../../../../src/app/base-classes/port/OutputPortTypes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutputPortTypes; });
var OutputPortTypes;
(function (OutputPortTypes) {
    OutputPortTypes[OutputPortTypes["Three"] = 0] = "Three";
    OutputPortTypes[OutputPortTypes["Code"] = 1] = "Code";
    OutputPortTypes[OutputPortTypes["Text"] = 2] = "Text";
    OutputPortTypes[OutputPortTypes["Console"] = 3] = "Console";
})(OutputPortTypes || (OutputPortTypes = {}));


/***/ }),

/***/ "../../../../../src/app/base-classes/port/Port.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_GUID__ = __webpack_require__("../../../../../src/app/base-classes/misc/GUID.ts");

class Port {
    constructor(name) {
        this._selected = false;
        this._disabled = false;
        this._connected = false;
        // values
        this._default = undefined;
        this._computed = undefined;
        this._id = __WEBPACK_IMPORTED_MODULE_0__misc_GUID__["a" /* IdGenerator */].getId();
        this._name = name;
    }
    getId() {
        return this._id;
    }
    getType() {
        return this._type;
    }
    setType(type) {
        this._type = type;
    }
    isSelected() {
        return this._selected;
    }
    isDisabled() {
        return this._disabled;
    }
    disable() {
        this._disabled = true;
    }
    enable() {
        this._disabled = false;
    }
    //
    //
    //
    update(portData) {
        this._id = portData["_id"];
        this._type = portData["_type"];
        this._selected = portData["_selected"];
        this._disabled = portData["_disabled"];
        this._connected = portData["_connected"];
        this._default = portData["_default"];
        // todo: assign computed also??
    }
    //
    //
    //
    getName() {
        return this._name;
    }
    setName(name) {
        this._name = name;
    }
    //
    //
    //
    isConnected() {
        return this._connected;
    }
    connect() {
        this._connected = true;
    }
    disconnect() {
        this._connected = false;
    }
    setDefaultValue(value) {
        this._default = value;
    }
    setComputedValue(value) {
        this._computed = value;
    }
    getDefaultValue() {
        return this._default;
    }
    getValue() {
        if (this._computed !== undefined)
            return this._computed;
        else
            return this._default;
    }
    //
    //
    //
    reset() {
        this._computed = undefined;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Port;



/***/ }),

/***/ "../../../../../src/app/base-classes/port/PortModule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__InputPort__ = __webpack_require__("../../../../../src/app/base-classes/port/InputPort.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__InputPort__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__OutputPort__ = __webpack_require__("../../../../../src/app/base-classes/port/OutputPort.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__OutputPort__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__InputPortTypes__ = __webpack_require__("../../../../../src/app/base-classes/port/InputPortTypes.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__InputPortTypes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__OutputPortTypes__ = __webpack_require__("../../../../../src/app/base-classes/port/OutputPortTypes.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__OutputPortTypes__["a"]; });






/***/ }),

/***/ "../../../../../src/app/base-classes/procedure/ActionProcedure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Procedure__ = __webpack_require__("../../../../../src/app/base-classes/procedure/Procedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureTypes.ts");


class ActionProcedure extends __WEBPACK_IMPORTED_MODULE_0__Procedure__["a" /* Procedure */] {
    constructor(data) {
        super(__WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a" /* ProcedureTypes */].Action, false);
        if (data == undefined) {
            data = { result: undefined, module: undefined, function: undefined, params: [] };
        }
        let left = { expression: data.result,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        let right = { expression: data.module + /*"." + data.category +*/ "." + data.function,
            isAction: true,
            module: data.module,
            category: undefined,
            fn_name: data.function,
            params: data.params.map(function (p) { return { type: p.type, value: p.value }; })
        };
        if (data.result !== undefined) {
            super.setLeftComponent(left);
        }
        super.setRightComponent(right);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ActionProcedure;



/***/ }),

/***/ "../../../../../src/app/base-classes/procedure/DataProcedure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Procedure__ = __webpack_require__("../../../../../src/app/base-classes/procedure/Procedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureTypes.ts");


class DataProcedure extends __WEBPACK_IMPORTED_MODULE_0__Procedure__["a" /* Procedure */] {
    constructor(data) {
        super(__WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a" /* ProcedureTypes */].Data, false);
        if (data == undefined) {
            data = { result: undefined, value: undefined };
        }
        let left = { expression: data.result,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        let right = { expression: data.value,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        super.setLeftComponent(left);
        super.setRightComponent(right);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DataProcedure;



/***/ }),

/***/ "../../../../../src/app/base-classes/procedure/ForLoopControlProcedure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureTypes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Procedure__ = __webpack_require__("../../../../../src/app/base-classes/procedure/Procedure.ts");


class ForLoopControlProcedure extends __WEBPACK_IMPORTED_MODULE_1__Procedure__["a" /* Procedure */] {
    constructor(data) {
        super(__WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].ForLoopControl, true);
        if (data == undefined) {
            data = { variable: undefined, array_name: undefined };
        }
        let left = { expression: data.variable,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        let right = { expression: data.array_name,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        super.setLeftComponent(left);
        super.setRightComponent(right);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ForLoopControlProcedure;



/***/ }),

/***/ "../../../../../src/app/base-classes/procedure/IfElseControlProcedure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Procedure__ = __webpack_require__("../../../../../src/app/base-classes/procedure/Procedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureTypes.ts");


class IfElseControlProcedure extends __WEBPACK_IMPORTED_MODULE_0__Procedure__["a" /* Procedure */] {
    constructor(title, data) {
        super(title, true);
        if (title == __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a" /* ProcedureTypes */].IfElseControl) {
            let if_control = new IfElseControlProcedure(__WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a" /* ProcedureTypes */].IfControl, data);
            let else_control = new IfElseControlProcedure(__WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a" /* ProcedureTypes */].ElseControl, data);
            this["virtual"] = true;
            super.addChild(if_control);
            super.addChild(else_control);
        }
        else {
            if (title == __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a" /* ProcedureTypes */].IfControl) {
                if (data == undefined) {
                    data = { if_condition: undefined, el_condition: undefined };
                }
                let left = {
                    expression: data.if_condition,
                    isAction: false,
                    module: undefined,
                    category: undefined,
                    fn_name: undefined,
                    params: undefined
                };
                this.setLeftComponent(left);
            }
            else if (title == __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a" /* ProcedureTypes */].ElseControl) {
            }
        }
    }
    addChild(prod) {
        if (this.getType() == __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a" /* ProcedureTypes */].IfElseControl) {
            alert("Cannot add child to this");
        }
        else {
            super.addChild(prod);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IfElseControlProcedure;



/***/ }),

/***/ "../../../../../src/app/base-classes/procedure/Procedure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Procedure {
    constructor(type, hasChildren) {
        this._disabled = false;
        this._printToConsole = false;
        this.children = [];
        this._type = type;
        this.hasChildren = hasChildren;
        this.hasChildren = this.hasChildren;
        this.children = this.children;
    }
    update(prodData, parent) {
        this._disabled = prodData._disabled;
        this._leftComponent = prodData._leftComponent;
        this._rightComponent = prodData._rightComponent;
        this._parent = parent;
        this.hasChildren = prodData.hasChildren;
        this.children = [];
    }
    getType() {
        return this._type;
    }
    isSelected() {
        return this._selected;
    }
    select() {
        this._selected = true;
    }
    unselect() {
        this._selected = false;
    }
    isDisabled() {
        return this._disabled;
    }
    enable() {
        this._disabled = false;
    }
    disable() {
        this._disabled = true;
    }
    printToConsole() {
        return this._printToConsole;
    }
    enablePrint() {
        this._printToConsole = true;
    }
    disablePrint() {
        this._printToConsole = false;
    }
    hasParent() {
        if (this._parent == undefined) {
            return false;
        }
        else {
            return true;
        }
    }
    getParent() {
        return this._parent;
    }
    setParent(parent) {
        this._parent = parent;
    }
    getChildren() {
        if (this.hasChildren == false) {
            throw Error("This Procedure Type is not a container");
        }
        else {
            return this.children;
        }
    }
    addChild(child) {
        if (this.hasChildren) {
            this.children.push(child);
        }
        else {
            throw Error("Cannot add child to this procedure");
        }
    }
    addChildFromData(child) {
        if (this.hasChildren) {
            this.children.push(child);
        }
        else {
            throw Error("Cannot add child to this procedure");
        }
    }
    addChildAtPosition(child, index) {
        this.children.splice(index, 0, child);
    }
    deleteChild(procedure) {
        this.children = this.children.filter(function (child) {
            if (child === procedure) {
                return false;
            }
            else {
                return true;
            }
        });
    }
    getLeftComponent() {
        return this._leftComponent;
    }
    setLeftComponent(component) {
        this._leftComponent = component;
    }
    getRightComponent() {
        return this._rightComponent;
    }
    setRightComponent(component) {
        this._rightComponent = component;
    }
    getCodeString(code_generator) {
        return code_generator.generateProcedureCode(this);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Procedure;



/***/ }),

/***/ "../../../../../src/app/base-classes/procedure/ProcedureFactory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureTypes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DataProcedure__ = __webpack_require__("../../../../../src/app/base-classes/procedure/DataProcedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ActionProcedure__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ActionProcedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IfElseControlProcedure__ = __webpack_require__("../../../../../src/app/base-classes/procedure/IfElseControlProcedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ForLoopControlProcedure__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ForLoopControlProcedure.ts");





class ProcedureFactory {
    static getProcedure(type, data) {
        if (type == __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].Data) {
            return new __WEBPACK_IMPORTED_MODULE_1__DataProcedure__["a" /* DataProcedure */](data);
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].Action) {
            return new __WEBPACK_IMPORTED_MODULE_2__ActionProcedure__["a" /* ActionProcedure */](data);
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].IfElseControl) {
            return new __WEBPACK_IMPORTED_MODULE_3__IfElseControlProcedure__["a" /* IfElseControlProcedure */](__WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].IfElseControl, data);
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].ForLoopControl) {
            return new __WEBPACK_IMPORTED_MODULE_4__ForLoopControlProcedure__["a" /* ForLoopControlProcedure */](data);
        }
        else {
            throw Error("Invalid control");
        }
    }
    static getProcedureFromData(procedureData, parent) {
        let procedure;
        if (procedureData["_type"] == __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].IfControl) {
            procedure = new __WEBPACK_IMPORTED_MODULE_3__IfElseControlProcedure__["a" /* IfElseControlProcedure */](__WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].IfControl);
        }
        else if (procedureData["_type"] == __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].ElseControl) {
            procedure = new __WEBPACK_IMPORTED_MODULE_3__IfElseControlProcedure__["a" /* IfElseControlProcedure */](__WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].ElseControl);
        }
        else {
            procedure = ProcedureFactory.getProcedure(procedureData["_type"]);
        }
        procedure.update(procedureData, undefined);
        if (procedureData._children !== undefined) {
            for (let child = 0; child < procedureData._children.length; child++) {
                let childProd = procedureData._children[child];
                procedure.addChildFromData(ProcedureFactory.getProcedureFromData(childProd, procedure));
            }
        }
        return procedure;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProcedureFactory;



/***/ }),

/***/ "../../../../../src/app/base-classes/procedure/ProcedureModule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProcedureFactory__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureFactory.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ProcedureFactory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureTypes.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a"]; });




/***/ }),

/***/ "../../../../../src/app/base-classes/procedure/ProcedureTypes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcedureTypes; });
var ProcedureTypes;
(function (ProcedureTypes) {
    ProcedureTypes["Data"] = "Data";
    ProcedureTypes["Action"] = "Action";
    ProcedureTypes["IfElseControl"] = "IfElse";
    ProcedureTypes["IfControl"] = "If";
    ProcedureTypes["ElseControl"] = "Else";
    ProcedureTypes["ForLoopControl"] = "For Loop";
})(ProcedureTypes || (ProcedureTypes = {}));


/***/ }),

/***/ "../../../../../src/app/base-classes/viz/Viewer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_services_flowchart_service__ = __webpack_require__("../../../../../src/app/global-services/flowchart.service.ts");

class Viewer {
    constructor(injector, name, description, author) {
        this.panelOpenState = true;
        this._name = name;
        this._description = description;
        this._author = author;
        this.flowchartService = injector.get(__WEBPACK_IMPORTED_MODULE_0__global_services_flowchart_service__["a" /* FlowchartService */]);
        this._subscription = this.flowchartService.getMessage().subscribe(message => {
            this._message = message;
            this.notify(message.text);
        });
    }
    ngDoCheck() {
    }
    //
    //	checks if the flowchart service has a flowchart and calls update function for the viewer
    //
    notify(message) {
        if (this.flowchartService.hasFlowchart() && this.flowchartService.getNodes().length > 0) {
            this.update(message);
        }
        else {
            this.reset();
        }
    }
    //
    //	gets flowchart service
    //
    getService() {
        return this.flowchartService;
    }
    ngOnInit() { this.notify(); }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this._subscription.unsubscribe();
    }
    reset() {
        console.log(this._name + " has not implemented the reset function!");
    }
    // 
    //	update function to be overriden by each viewer
    //
    update(message) {
        console.log(this._name + " has not implemented the update function!");
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Viewer;



/***/ }),

/***/ "../../../../../src/app/custom-angular-modules/CustomMaterialModule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm2015/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm2015/material.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/*
 * This module imports all thre required components from Angular Material
 */
let CustomMaterialModule = class CustomMaterialModule {
};
CustomMaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonToggleModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatListModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonToggleModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatListModule */]]
    })
], CustomMaterialModule);



/***/ }),

/***/ "../../../../../src/app/global-services/console.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm2015/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ConsoleService = class ConsoleService {
    constructor() {
        // 
        // message handling between components
        // 
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this._messages = [];
    }
    sendMessage(message) {
        this.subject.next({ text: message });
    }
    clearMessage() {
        this.subject.next();
    }
    getMessage() {
        return this.subject.asObservable();
    }
    addMessage(message) {
        let obj = {};
        obj["time"] = new Date();
        obj["message"] = message;
        this._messages.push(obj);
        this.sendMessage();
    }
    ;
    getContent() {
        return this._messages;
    }
    clearConsole() {
        this._messages = [];
        this.sendMessage();
    }
};
ConsoleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ConsoleService);



/***/ }),

/***/ "../../../../../src/app/global-services/flowchart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowchartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm2015/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_classes_flowchart_FlowchartModule__ = __webpack_require__("../../../../../src/app/base-classes/flowchart/FlowchartModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_classes_node_NodeModule__ = __webpack_require__("../../../../../src/app/base-classes/node/NodeModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_classes_code_CodeModule__ = __webpack_require__("../../../../../src/app/base-classes/code/CodeModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_circular_json__ = __webpack_require__("../../../../circular-json/build/circular-json.node.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_circular_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_circular_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_modules_AllModules__ = __webpack_require__("../../../../../src/assets/modules/AllModules.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__console_service__ = __webpack_require__("../../../../../src/app/global-services/console.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layout_service__ = __webpack_require__("../../../../../src/app/global-services/layout.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let FlowchartService = class FlowchartService {
    constructor(consoleService, layoutService) {
        this.consoleService = consoleService;
        this.layoutService = layoutService;
        /*private _ffactory = new FlowchartFactory();
        private _fc = new FlowchartConverter();*/
        this._user = "AKM";
        this.code_generator = __WEBPACK_IMPORTED_MODULE_4__base_classes_code_CodeModule__["a" /* CodeFactory */].getCodeGenerator("js");
        this._savedNodes = [];
        // 
        // message handling between components
        // 
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.newFile();
        this.checkSavedNodes();
    }
    check() {
        return this._flowchart != undefined;
    }
    ;
    checkSavedNodes() {
        this._savedNodes = [];
        let myStorage = window.localStorage;
        let property = "MOBIUS_NODES";
        let storageString = myStorage.getItem(property);
        let nodesStorage = JSON.parse(storageString == null ? JSON.stringify({ n: [] }) : storageString);
        let nodeData = nodesStorage.n;
        for (let n = 0; n < nodeData.length; n++) {
            let n_data = nodeData[n];
            this._savedNodes.push(n_data);
        }
    }
    sendMessage(message) {
        this.subject.next({ text: message });
    }
    clearMessage() {
        this.subject.next();
    }
    getMessage() {
        return this.subject.asObservable();
    }
    //
    //  message to all viewers that flowchart updated
    //
    update(message) {
        this.sendMessage(message || "Updated");
    }
    readTextFile(file) {
    }
    loadFile(fileString) {
        let _this = this;
        let jsonData;
        try {
            let data = __WEBPACK_IMPORTED_MODULE_5_circular_json__["parse"](fileString);
            // load the required modules
            /* _this.modules.loadModules(data["module"]); */
            // load the required code generator
            if (_this.code_generator.getLanguage() != data["language"] && data["language"] !== undefined) {
                _this.code_generator = __WEBPACK_IMPORTED_MODULE_4__base_classes_code_CodeModule__["a" /* CodeFactory */].getCodeGenerator(data["language"]);
            }
            // read the flowchart
            _this._flowchart = __WEBPACK_IMPORTED_MODULE_2__base_classes_flowchart_FlowchartModule__["b" /* FlowchartReader */].readFlowchartFromData(data["flowchart"]);
            _this.update();
            this.consoleService.addMessage("File loaded successfully");
        }
        catch (err) {
            this.consoleService.addMessage("Error loading file: " + err);
            this.newFile();
        }
    }
    loadModules(modules) {
        this._moduleSet = [];
        this._moduleMap = [];
        let moduleSet = this._moduleSet;
        let moduleMap = this._moduleMap;
        /*let mod: IModule = { name: "gs-modeling", version: "0.1", author: "AKM"};
        for(let prop in ModuleSet){
          mod[prop] = ModuleSet[prop];
        }
    
        moduleSet.push(mod);
        moduleMap["gs-modeling"] = mod;
    
        */
        modules.map(function (mod) {
            let name = __WEBPACK_IMPORTED_MODULE_4__base_classes_code_CodeModule__["b" /* ModuleUtils */].getName(mod);
            let version = __WEBPACK_IMPORTED_MODULE_4__base_classes_code_CodeModule__["b" /* ModuleUtils */].getVersion(mod);
            let author = __WEBPACK_IMPORTED_MODULE_4__base_classes_code_CodeModule__["b" /* ModuleUtils */].getAuthor(mod);
            // select the required module from the global module set - that has all the functions
            let modClass = __WEBPACK_IMPORTED_MODULE_6__assets_modules_AllModules__[name]; //ModuleUtils.getModuleFromSet(ModuleSet, name);
            if (__WEBPACK_IMPORTED_MODULE_4__base_classes_code_CodeModule__["b" /* ModuleUtils */].isCompatible(mod, modClass)) {
                moduleSet.push(modClass);
                moduleMap[name] = modClass;
            }
            else {
                console.warn(moduleMap[name] + " module not compatible. Please check version / author");
            }
        });
    }
    getModules() {
        return this._moduleSet;
    }
    //
    // gets the textual representation of the actual flowchart
    //
    getChartData() {
        return JSON.stringify(this._flowchart); //this._fc.flowchartToData(this._flowchart);
    }
    //
    //  check if flowchart is there
    //
    hasFlowchart() {
        return this._flowchart != undefined;
    }
    //
    //
    //
    newFile() {
        this._flowchart = new __WEBPACK_IMPORTED_MODULE_2__base_classes_flowchart_FlowchartModule__["a" /* Flowchart */](this._user);
        this._selectedNode = 0;
        this._selectedPort = 0;
        this.update();
        this.loadModules([
            { _name: "String", _version: 0.1, _author: "Patrick" },
            { _name: "List", _version: 0.1, _author: "Patrick" },
            { _name: "Math", _version: 0.1, _author: "Patrick" }
        ]);
        // print message to console
        this.consoleService.addMessage("New file created.");
        return this._flowchart;
    }
    //
    //  returns the flowchart
    //
    getFlowchart() {
        //console.warn("Flowchart shouldnot be modified outside of this service");
        return this._flowchart;
    }
    getNodes() {
        return this._flowchart.getNodes();
    }
    getEdges() {
        return this._flowchart.getEdges();
    }
    getSavedNodes() {
        return this._savedNodes;
    }
    saveNode(node) {
        if (typeof node == "number") {
            node = this._flowchart.getNodeByIndex(node);
        }
        // todo: check if overwrite
        if (node.getType() !== undefined) {
            console.log(this._savedNodes[node.getType()]);
        }
        else {
            let nav = navigator;
            let myStorage = window.localStorage;
            let property = "MOBIUS_NODES";
            let storageString = myStorage.getItem(property);
            let nodesStorage = JSON.parse(storageString == null ? JSON.stringify({ n: [] }) : storageString);
            // add the node
            nodesStorage.n.push(node);
            myStorage.setItem(property, JSON.stringify(nodesStorage));
            console.log(JSON.parse(myStorage.getItem(property)).n.length + " nodes in the library");
            /*if (nav.storage && nav.storage.persist)
              nav.storage.persist().then(granted => {
                if (granted){
      
                  alert("Storage will not be cleared except by explicit user action");
                }
                else{
                  alert("Storage may be cleared by the UA under storage pressure.");
                }
              });*/
            // print message to console
            this.consoleService.addMessage("Node Saved.");
            this.checkSavedNodes();
            this.update();
        }
    }
    clearLibrary() {
        let nav = navigator;
        let myStorage = window.localStorage;
        let property = "MOBIUS_NODES";
        let storageString = myStorage.removeItem(property);
        // print message to console
        this.consoleService.addMessage("Node Library was cleared");
        this.checkSavedNodes();
        this.update();
    }
    //
    //    add node
    //
    addNode(type) {
        let new_node = undefined;
        let n_data = undefined;
        if (type !== undefined) {
            n_data = this._savedNodes[type];
            let default_node_name = n_data["_name"] + (this._flowchart.getNodes().length + 1);
            new_node = new __WEBPACK_IMPORTED_MODULE_3__base_classes_node_NodeModule__["a" /* GraphNode */](default_node_name, n_data["_id"]);
            n_data["lib"] = true;
            new_node.update(n_data);
        }
        else {
            let default_node_name = "node" + (this._flowchart.getNodes().length + 1);
            new_node = new __WEBPACK_IMPORTED_MODULE_3__base_classes_node_NodeModule__["a" /* GraphNode */](default_node_name, undefined);
            new_node.addInput();
            new_node.addOutput();
        }
        this._flowchart.addNode(new_node);
        this.selectNode(this._flowchart.getNodes().length - 1);
        // print message to console
        this.consoleService.addMessage("New Node was added");
        this.update();
    }
    addEdge(outputAddress, inputAddress) {
        if (outputAddress[0] == inputAddress[0]) {
            return;
        }
        // dont remove previous edges for outputs
        let output = this._flowchart.getNodeByIndex(outputAddress[0]).getOutputByIndex(outputAddress[1]);
        // if (output.isConnected()){
        //   this._flowchart.deleteEdges(this._flowchart.disconnectEdgesWithPortIndex(outputAddress[0], outputAddress[1], "output"));
        // }
        // remove previous edges for inputs
        let input = this._flowchart.getNodeByIndex(inputAddress[0]).getInputByIndex(inputAddress[1]);
        if (input.isConnected()) {
            this._flowchart.deleteEdges(this._flowchart.disconnectEdgesWithPortIndex(inputAddress[0], inputAddress[1], "input"));
        }
        //
        this._flowchart.addEdge(outputAddress, inputAddress);
        input.setComputedValue({ port: outputAddress });
        output.connect();
        input.connect();
        // print message to console
        this.consoleService.addMessage("New Edge was added");
        this.update();
    }
    addProcedure(prod) {
        let node = this.getSelectedNode();
        let selectedProcedure = this._selectedProcedure;
        this.checkProcedure(prod);
        if (selectedProcedure) {
            if (selectedProcedure.hasChildren) {
                selectedProcedure.addChild(prod);
            }
            else {
                if (selectedProcedure.getParent()) {
                    let parent = selectedProcedure.getParent();
                    let index = 0;
                    let allChildren = parent.getChildren();
                    for (let i = 0; i < allChildren.length; i++) {
                        if (allChildren[i] === selectedProcedure) {
                            index = i;
                            break;
                        }
                    }
                    parent.addChildAtPosition(prod, index + 1);
                }
                else {
                    let parent = node;
                    let index = 0;
                    let allChildren = node.getProcedure();
                    for (let i = 0; i < allChildren.length; i++) {
                        if (allChildren[i] === selectedProcedure) {
                            index = i;
                            break;
                        }
                    }
                    node.addProcedureAtPosition(prod, index + 1);
                }
            }
        }
        else {
            node.addProcedure(prod);
        }
        this.update("procedure");
    }
    checkProcedure(prod) {
        // validate procedure
        let codeString = prod.getCodeString(this.code_generator);
    }
    disconnectPort(type, portIndex, nodeIndex) {
        this._flowchart.disconnectPort(type, portIndex, nodeIndex);
    }
    disconnectNode(nodeIndex) {
        this._flowchart.disconnectNode(nodeIndex);
        this.update();
    }
    //
    //  update indices in edges on port deleted
    //
    deletePort(type, portIndex) {
        this._flowchart.deletePort(type, portIndex, this._selectedNode);
        this.update();
    }
    deleteNode(node_index) {
        this._flowchart.deleteNode(node_index);
        if (this._selectedNode == node_index) {
            this._selectedNode = undefined;
            this._selectedPort = undefined;
        }
        // print message to console
        this.consoleService.addMessage("Node was deleted");
        this.update();
    }
    deleteEdge(edgeIndex) {
        this._flowchart.deleteEdge(edgeIndex);
        // print message to console
        this.consoleService.addMessage("Edge was deleted");
    }
    //
    //  select node
    //
    selectNode(nodeIndex, portIndex) {
        this._selectedNode = nodeIndex;
        this._selectedPort = portIndex || 0;
        this.update();
    }
    selectProcedure(prod) {
        this._selectedProcedure = prod;
    }
    getSelectedNode() {
        if (this._selectedNode == undefined)
            return undefined;
        return this._flowchart.getNodeByIndex(this._selectedNode);
    }
    getSelectedNodeIndex() {
        return this._selectedNode;
    }
    getSelectedPort() {
        if (this._selectedNode == undefined) {
            return undefined;
        }
        // todo: where is this used?
        return this.getSelectedNode().getOutputByIndex(this._selectedPort);
    }
    getSelectedPortIndex() {
        return this._selectedPort;
    }
    //
    //  
    //
    isSelected(node) {
        if (this._selectedNode == undefined) {
            return false;
        }
        return this._flowchart.getNodeByIndex(this._selectedNode).getId() == node.getId();
    }
    // 
    //  run this flowchart
    //
    execute() {
        let consoleStrings = [];
        function printFunction(message) {
            consoleStrings.push(message);
        }
        try {
            this._flowchart.execute(this.code_generator, this._moduleMap, printFunction);
            this.consoleService.addMessage("Flowchart was executed.");
            if (consoleStrings.length > 0) {
                this.consoleService.addMessage("Console Messages:\n" + consoleStrings.join("\n"));
            }
            ;
        }
        catch (ex) {
            this.consoleService.addMessage("There was an error executing");
            this.consoleService.addMessage(ex);
            this.layoutService.showConsole();
        }
        this.update();
    }
    //
    // get execution code    
    //
    getCode() {
        return this.code_generator.getDisplayCode(this._flowchart);
    }
    saveFile() {
        let file = {};
        let fileString;
        file["language"] = "js";
        file["modules"] = [];
        file["flowchart"] = this._flowchart;
        fileString = __WEBPACK_IMPORTED_MODULE_5_circular_json__["stringify"](file);
        this.downloadContent({
            type: 'text/plain;charset=utf-8',
            filename: 'Scene' + (new Date()).getTime() + ".mob",
            content: fileString
        });
        // print message to console
        this.consoleService.addMessage("File saved successfully");
    }
    downloadContent(options) {
        if (!options || !options.content) {
            throw 'You have at least to provide content to download';
        }
        options.filename = options.filename || 'scene.mob';
        options.type = options.type || 'text/plain;charset=utf-8';
        options.bom = options.bom || decodeURIComponent('%ef%bb%bf');
        if (window.navigator.msSaveBlob) {
            var blob = new Blob([options.bom + options.content], { type: options.type });
            window.navigator.msSaveBlob(blob, options.filename);
        }
        else {
            var link = document.createElement('a');
            var content = options.bom + options.content;
            var uriScheme = ['data:', options.type, ','].join('');
            link.href = uriScheme + content;
            link.download = options.filename;
            //FF requires the link in actual DOM
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
};
FlowchartService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__console_service__["a" /* ConsoleService */], __WEBPACK_IMPORTED_MODULE_8__layout_service__["a" /* LayoutService */]])
], FlowchartService);



/***/ }),

/***/ "../../../../../src/app/global-services/layout.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm2015/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_components_viewers_EViewer__ = __webpack_require__("../../../../../src/app/ui-components/viewers/EViewer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let LayoutService = class LayoutService {
    constructor() {
        this.layout = {
            useTransition: true,
            gutter: 7,
            size: {
                main: 70,
                side: 30,
                top: 33,
                middle: 33,
                bottom: 33
            },
            content: {
                main: __WEBPACK_IMPORTED_MODULE_2__ui_components_viewers_EViewer__["a" /* EViewer */].Viewer,
                side: {
                    top: __WEBPACK_IMPORTED_MODULE_2__ui_components_viewers_EViewer__["a" /* EViewer */].Flowchart,
                    middle: __WEBPACK_IMPORTED_MODULE_2__ui_components_viewers_EViewer__["a" /* EViewer */].Editor,
                    bottom: __WEBPACK_IMPORTED_MODULE_2__ui_components_viewers_EViewer__["a" /* EViewer */].Parameter
                }
            }
        };
        this.viewContainerIndex = 4;
        this._url = "index";
        // handing subscriptions
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    sendMessage(message) {
        this.subject.next({ text: message });
    }
    clearMessage() {
        this.subject.next();
    }
    getMessage() {
        return this.subject.asObservable();
    }
    showHelp(fn) {
        this._url = "modules/" + "_" + fn.module.toLowerCase() + "_";
        this.sendMessage("Module: " + fn.module);
    }
    showConsole() {
        this.sendMessage("console");
    }
    getViewContainer() {
        return this.viewContainerIndex;
    }
    setViewContainer(index) {
        this.viewContainerIndex = index;
    }
    getUrl() {
        return this._url;
    }
    // other functionality
    getAssets() {
        return this.layout;
    }
    maximize(panel_id) {
        if (panel_id == "main") {
            return;
        }
        // get the panel_id passed and the corresponding component
        // interchange values
        let max_item = this.layout.content.side[panel_id];
        if (max_item) {
            let current_main = this.layout.content.main;
            this.layout.content.main = max_item;
            this.layout.content.side[panel_id] = current_main;
        }
        this.sendMessage("Layout Changed");
    }
    minimize(panel_id) {
        alert("To be implemented");
    }
    restore(panel_id) {
        alert("To be implemented");
    }
};
LayoutService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LayoutService);



/***/ }),

/***/ "../../../../../src/app/global-services/module.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ModuleService = class ModuleService {
    constructor() {
        this._modules = [];
    }
};
ModuleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ModuleService);



/***/ }),

/***/ "../../../../../src/app/gs-viewer/data/DataSubscriber.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("../../../../../src/app/gs-viewer/data/data.service.ts");

class DataSubscriber {
    constructor(injector) {
        this.dataService = injector.get(__WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]);
        this._subscription = this.dataService.getMessage().subscribe(message => {
            this._message = message;
            this.notify(message.text);
        });
    }
    notify(message) {
        console.warn("Notify function not Implemented");
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DataSubscriber;



/***/ }),

/***/ "../../../../../src/app/gs-viewer/data/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm2015/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_orbit_controls__ = __webpack_require__("../../../../three-orbit-controls/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_orbit_controls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_three_orbit_controls__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let DataService = class DataService {
    constructor() {
        // intializations
        // this only runs once
        this.selecting = [];
        // ---- 
        // Subscription Handling
        // 
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        let default_width = 600, default_height = 600;
        // scene
        let scene = new __WEBPACK_IMPORTED_MODULE_2_three__["Scene"]();
        scene.background = new __WEBPACK_IMPORTED_MODULE_2_three__["Color"](0xcccccc);
        // renderer
        let renderer = new __WEBPACK_IMPORTED_MODULE_2_three__["WebGLRenderer"]({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        // camera settings
        let aspect_ratio = this._width / this._height;
        let camera = new __WEBPACK_IMPORTED_MODULE_2_three__["PerspectiveCamera"](50, aspect_ratio, 0.01, 1000);
        camera.position.z = 10;
        camera.lookAt(scene.position);
        camera.updateProjectionMatrix();
        // orbit controls
        let _OC = __WEBPACK_IMPORTED_MODULE_3_three_orbit_controls__(__WEBPACK_IMPORTED_MODULE_2_three__);
        let controls = new _OC(camera, renderer.domElement);
        controls.mouseButtons = { ORBIT: 0, ZOOM: null, PAN: null };
        controls.enableKeys = false;
        controls.enabled = true;
        // default directional lighting
        let directional_light = new __WEBPACK_IMPORTED_MODULE_2_three__["DirectionalLight"](0xffffff, 0.5);
        directional_light.castShadow = false;
        directional_light.position.copy(camera.position);
        directional_light.target.position.set(0, 0, 0);
        scene.add(directional_light);
        // default ambient lighting
        let default_hue = 160;
        let default_saturation = 0;
        let default_lightness = 0.47;
        var hemi_light = new __WEBPACK_IMPORTED_MODULE_2_three__["HemisphereLight"](0xffffff, 0.5);
        hemi_light.color.setHSL(default_hue, default_saturation, default_saturation);
        scene.add(hemi_light);
        // var self=this;
        // self.;
        // self._controls.addEventListener( 'change',  function() {
        //   self.light.position.copy( self._camera.position );
        // } );
        // self.light.target.position.set( 0, 0, 0 );
        // this.scene.add( self.light );
        this._scene = scene;
        this._renderer = renderer;
        this._camera = camera;
        this._orbitControls = controls;
        this._hueValue = default_hue;
        this._saturationValue = default_saturation;
        this._lightnessValue = default_lightness;
        // add it to alight - what does alight do?
        this._alight = [];
        this._alight.push(hemi_light);
    }
    sendMessage(message) {
        this.subject.next({ text: message });
    }
    clearMessage() {
        this.subject.next();
    }
    getMessage() {
        return this.subject.asObservable();
    }
    //
    //  Getter and Setting for gs-model
    //
    getGsModel() {
        return this._gsModel;
    }
    setGsModel(model) {
        this._gsModel = model;
        this.sendMessage("model_update");
    }
    //
    // Getter and Setter for Scene
    //
    addScene(scene) {
        console.warn("Three Scene is being reset");
        this._scene = scene;
    }
    getScene(width, height) {
        if (width && height) {
            this._width = width;
            this._height = height;
        }
        return this._scene;
    }
    getRenderer() {
        this._camera.aspect = this._width / this._height;
        this._camera.updateProjectionMatrix();
        this._renderer.setSize(this._width, this._height);
        return this._renderer;
    }
    getCamera() {
        return this._camera;
    }
    getControls() {
        return this._orbitControls;
    }
    //
    //
    //
    getalight() {
        return this._alight;
    }
    addlightvalue(hue, saturation, lightness) {
        this._hueValue = hue;
        this._saturationValue = saturation;
        this._lightnessValue = lightness;
    }
    gethue(_hue) {
        this.hue = _hue;
    }
    getsaturation(_saturation) {
        this.saturation = _saturation;
    }
    getlightness(_lightness) {
        this.lightness = _lightness;
    }
    addGeom(Geom) {
        this._Geom = Geom;
    }
    getGeom() {
        return this._Geom;
    }
    addscenechange(scenechange) {
        this.scenechange = scenechange;
    }
    getscenechange() {
        return this.scenechange;
    }
    addINTERSECTEDColor(INTERSECTEDColor) {
        if (this.INTERSECTEDColor == null) {
            this.INTERSECTEDColor = INTERSECTEDColor;
        }
    }
    getINTERSECTEDColor() {
        return this.INTERSECTEDColor;
    }
    addselecting(selecting) {
        if (selecting[selecting.length - 1] == undefined) {
            this.selecting = [];
        }
        this.sendMessage();
    }
    pushselecting(selecting) {
        this.selecting.push(selecting);
        this.sendMessage();
    }
    getselecting() {
        return this.selecting;
    }
    addgrid(grid) {
        this.grid = grid;
    }
    addaxis(axis) {
        this.axis = axis;
    }
    addshadow(shadow) {
        this.shadow = shadow;
    }
    addframe(frame) {
        this.frame = frame;
    }
    addselect(select) {
        this.selectcheck = select;
    }
    getSelectingIndex(uuid) {
        for (var i = 0; i < this.selecting.length; i++) {
            if (this.selecting[i].uuid == uuid) {
                return i;
            }
        }
        return -1;
    }
};
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DataService);



/***/ }),

/***/ "../../../../../src/app/gs-viewer/gs-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"appdiv\">\r\n\t<split direction=\"vertical\">\r\n\t\t<split-area [size]=\"90\" id=\"splitcontainer\">\r\n\t\t  <div style=\"height: 100%\">\r\n\t\t    <split direction=\"horizontal\">\r\n\t\t      <split-area [size]=\"0.5\" id=\"splitgroups\">\r\n\t\t        <app-groups></app-groups>\r\n\t\t      </split-area>\r\n\t\t      <split-area [size]=\"99.5\" id=\"splitviewer\">\r\n\t\t        <app-viewer></app-viewer>\r\n\t\t      </split-area>\r\n\t\t    </split>\r\n\t\t  </div>\r\n\t\t</split-area>\r\n\t\t<split-area [size]=\"10\" id=\"splittoolwindow\">\r\n\t\t\t<app-toolwindow></app-toolwindow>\r\n\t\t</split-area>\r\n\t</split>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/gs-viewer/gs-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);", ""]);

// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      width: 250px;\n      border-right: 4px solid #A9BCEC;\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n@font-face {\n  font-family: \"FontAwesome\"; }\n\n.font-awesome-hand {\n  font-family: FontAwesome; }\n\n.font-awesome-hand::after {\n  font-family: FontAwesome; }\n\nhtml, body {\n  font-family: 'Open Sans', sans-serif;\n  text-align: justify;\n  margin: 0px;\n  padding: 0px; }\n\n#appdiv {\n  position: absolute;\n  width: 99%;\n  height: 98%;\n  background-color: white;\n  overflow: hidden; }\n\na {\n  text-decoration: none;\n  color: #fff;\n  text-transform: uppercase; }\n\n.toolbar {\n  background-color: #333; }\n\n.toolbar ul {\n  list-style: none;\n  overflow: hidden;\n  margin-bottom: 0px;\n  z-index: 1; }\n\n.toolbar div > ul > li {\n  display: inline-block;\n  float: left; }\n\n.toolbar div > ul > li:hover {\n  background-color: #fff; }\n\n.toolbar div > ul > li:hover a {\n  color: #333; }\n\n.toolbar div > ul > li > a {\n  font-size: 12px;\n  line-height: 20px;\n  display: block;\n  float: left;\n  padding: 0 16px; }\n\n/**\r\n * Carets\r\n */\n.toolbar div ul li i.icon-sort {\n  display: none; }\n\n.toolbar div ul li:hover i.icon-sort {\n  display: inline; }\n\n.toolbar div ul li:hover i.icon-caret-down {\n  display: none; }\n\n.toolbar .dropdown i {\n  margin: 0px; }\n\n.toolbar div > ul > li > a:hover {\n  background-color: #fff;\n  color: #333; }\n\n.dropdown {\n  float: left; }\n\n/**\r\n * Sub navigaton\r\n **/\n.sub {\n  min-width: 180px;\n  margin: 20px;\n  display: none;\n  position: absolute;\n  border-left: 1px solid #ebebeb;\n  border-right: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb; }\n\n.sub li a {\n  display: block;\n  background-color: #fff;\n  color: #333 !important;\n  border-left: 4px solid #fff;\n  padding: 4px 12px;\n  font-size: 12px;\n  line-height: 26px; }\n\n.sub li a:hover {\n  border-left: 4px solid #ff0000;\n  float: top; }\n\n.toolbar div > ul > li:hover .sub {\n  display: block; }\n\n.sub li a {\n  transition: all .5s linear;\n  overflow: hidden; }\n\n#toolwindow {\n  position: relative;\n  background-color: slategrey; }\n\n.sidebar {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  height: 100%; }\n\n.tool-form {\n  padding-top: 10px;\n  padding-left: 10px;\n  color: white; }\n\n.tool-form-heading {\n  border-bottom: 2px solid #ddd;\n  margin: 0px;\n  padding-bottom: 3px; }\n\n.tool-form label {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 13px;\n  color: black;\n  display: block;\n  margin: 0px 0px 15px 0px; }\n\n.tool-form label > span {\n  width: 150px;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 13px;\n  float: left;\n  padding-top: 4px;\n  padding-right: 5px; }\n\n.tool-form span.required {\n  color: red; }\n\n.tool-form .tel-number-field {\n  width: 30px;\n  text-align: center; }\n\n.tool-form input.input-field {\n  width: 30px; }\n\n.tool-form input.file-input-field {\n  border: 1px solid #ccc;\n  height: 20px;\n  display: inline-block;\n  padding: 6px 6px;\n  cursor: pointer;\n  background-color: #888888; }\n\n.tool-form input.input-field,\n.tool-form .tel-number-field,\n.tool-form .textarea-field,\n.tool-form .select-field {\n  height: 20px;\n  overflow: hidden;\n  width: 240px;\n  background-color: #888888;\n  border-radius: 5px;\n  color: #ffffff; }\n\n.tool-form .input-field:focus,\n.tool-form .tel-number-field:focus,\n.tool-form .textarea-field:focus,\n.tool-form .select-field:focus {\n  border: 1px solid #0C0; }\n\n.tool-form .textarea-field {\n  height: 100px;\n  width: 55%; }\n\n.tool-form input[type=submit],\n.tool-form input[type=button] {\n  height: 25px;\n  border: none;\n  padding: 2px 8px 2px 8px;\n  background: #444466;\n  color: #fff;\n  box-shadow: 1px 1px 4px #DADADA;\n  -moz-box-shadow: 1px 1px 4px #DADADA;\n  -webkit-box-shadow: 1px 1px 4px #DADADA;\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  color: #ffffff; }\n\n.tool-form input[type=submit]:hover,\n.tool-form input[type=button]:hover {\n  background: #333377;\n  color: #fff; }\n\n.rightstyle {\n  width: 30px;\n  height: 100%;\n  float: right;\n  background: #FFFFFF;\n  background-repeat: repeat;\n  background-attachment: scroll;\n  overflow: auto; }\n\n.leftstyle {\n  background: #e6e6e6;\n  height: 100%; }\n\n.slider {\n  width: 0;\n  height: 0;\n  border-top: 30px solid transparent;\n  border-right: 10px solid black;\n  border-bottom: 30px solid transparent; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gs-viewer/gs-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GSViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_service__ = __webpack_require__("../../../../../src/app/gs-viewer/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gs_json__ = __webpack_require__("../../../../gs-json/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let GSViewerComponent = class GSViewerComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ;
    ngOnInit() {
        this.dataService.setGsModel(this.data);
    }
    ngDoCheck() {
        if (this.dataService.getGsModel() !== this.data) {
            this.dataService.setGsModel(this.data);
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
    __metadata("design:type", Object)
], GSViewerComponent.prototype, "data", void 0);
GSViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'gs-viewer',
        template: __webpack_require__("../../../../../src/app/gs-viewer/gs-viewer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gs-viewer/gs-viewer.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_data_service__["a" /* DataService */]])
], GSViewerComponent);



/***/ }),

/***/ "../../../../../src/app/gs-viewer/gs-viewer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GSViewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm2015/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_split__ = __webpack_require__("../../../../angular-split/esm2015/angular-split.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_slider__ = __webpack_require__("../../../material/esm2015/slider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gs_viewer_component__ = __webpack_require__("../../../../../src/app/gs-viewer/gs-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewer_viewer_component__ = __webpack_require__("../../../../../src/app/gs-viewer/viewer/viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__setting_setting_component__ = __webpack_require__("../../../../../src/app/gs-viewer/setting/setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__toolwindow_toolwindow_component__ = __webpack_require__("../../../../../src/app/gs-viewer/toolwindow/toolwindow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_data_service__ = __webpack_require__("../../../../../src/app/gs-viewer/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toolwindow_groups_component__ = __webpack_require__("../../../../../src/app/gs-viewer/toolwindow/groups.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let GSViewer = GSViewer_1 = class GSViewer {
    static forRoot() {
        return {
            ngModule: GSViewer_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__data_data_service__["a" /* DataService */]
            ]
        };
    }
};
GSViewer = GSViewer_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2_angular_split__["a" /* AngularSplitModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material_slider__["a" /* MatSliderModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_4__gs_viewer_component__["a" /* GSViewerComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__gs_viewer_component__["a" /* GSViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_5__viewer_viewer_component__["a" /* ViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_6__setting_setting_component__["a" /* SettingComponent */],
            __WEBPACK_IMPORTED_MODULE_7__toolwindow_toolwindow_component__["a" /* ToolwindowComponent */],
            __WEBPACK_IMPORTED_MODULE_9__toolwindow_groups_component__["a" /* GroupsComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_8__data_data_service__["a" /* DataService */]],
    })
], GSViewer);

var GSViewer_1;


/***/ }),

/***/ "../../../../../src/app/gs-viewer/setting/setting.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#settingview{\r\n  position:absolute;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  top:0px;\r\n  right:30px;\r\n  color:white;\r\n  width:380px;\r\n  height:200px;\r\n}\r\n#grid{\r\n  margin-left: 20px;\r\n}\r\n#axis{\r\n  margin-left: 30px;\r\n}\r\n#shadow{\r\n  margin-left: 30px;\r\n}\r\n#frame{\r\n  margin-left: 30px;\r\n}\r\n#huerange{\r\n  margin-left: 41px;\r\n  width: 60%;\r\n}\r\n#satrange{\r\n  margin-left: 18px;\r\n  width: 60%;\r\n}\r\n#lirange{\r\n  margin-left: 20px;\r\n  width: 60%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gs-viewer/setting/setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"settingview\" (click)=\"setting($event)\">\r\n  <input id=\"grid\" type=\"checkbox\" (click)=\"changegrid()\"> <label id=\"gridname\" value=\"gridVisible\">grid</label>\r\n  <input id=\"axis\"  type=\"checkbox\" (click)=\"changeaxis()\"> <label id=\"axisname\" value=\"axisVisible\">axis</label>\r\n  <input id=\"shadow\"  type=\"checkbox\" (click)=\"changeshadow()\"> <label id=\"fogname\" value=\"shadowVisible\">shadow</label>\r\n  <input id=\"frame\"  type=\"checkbox\" (click)=\"changeframe()\"> <label id=\"framename\" value=\"frameVisible\">frame</label><br/><hr/>&nbsp;&nbsp;&nbsp;&nbsp;Hemisphere Light&nbsp;&nbsp;<br/>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hue\r\n  <mat-slider name=\"range\" id=\"huerange\" min=0 max=360 step=1  value={{hue}} #slider (change)=\"changelight(slider.value,slider1.value,slider2.value)\" ></mat-slider>{{slider.value.toPrecision(2)}}<br/>\r\n  &nbsp;&nbsp;&nbsp;saturation\r\n  <mat-slider name=\"range\" id=\"satrange\" min=0 max=1 step=0.01 value={{saturation}} #slider1 (change)=\"changelight(slider.value,slider1.value,slider2.value)\" ></mat-slider>{{slider1.value.toPrecision(2)}}<br/>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;lightness\r\n  <mat-slider name=\"range\" id=\"lirange\" min=0 max=1 step=0.01 value={{lightness}} #slider2 (change)=\"changelight(slider.value,slider1.value,slider2.value)\" ></mat-slider>{{slider2.value.toPrecision(2)}}<br/>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/gs-viewer/setting/setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_service__ = __webpack_require__("../../../../../src/app/gs-viewer/data/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let SettingComponent = class SettingComponent {
    constructor(dataService) {
        this.dataService = dataService;
        // avoid manipulating the scene here
        // shift to dataservice
        this.scene = this.dataService.getScene();
        this.alight = [];
        this.alight = this.dataService.getalight();
        this.hue = this.dataService.hue;
        this.saturation = this.dataService.saturation;
        this.lightness = this.dataService.lightness;
    }
    ngOnInit() {
        if (this.hue == undefined) {
            this.hue = 160;
        }
        else {
            this.hue = this.dataService.hue;
        }
        if (this.saturation == undefined) {
            this.saturation = 0;
        }
        else {
            this.saturation = this.dataService.saturation;
        }
        if (this.lightness == undefined) {
            this.lightness = 0.47;
        }
        else {
            this.lightness = this.dataService.lightness;
        }
        this.gridVisible = this.dataService.grid;
        if (this.gridVisible == true) {
            document.getElementById("grid").setAttribute('checked', 'checked');
        }
        this.axisVisible = this.dataService.axis;
        if (this.axisVisible == true) {
            document.getElementById("axis").setAttribute('checked', 'checked');
        }
        this.shadowVisible = this.dataService.shadow;
        if (this.shadowVisible == true) {
            document.getElementById("shadow").setAttribute('checked', 'checked');
        }
        this.frameVisible = this.dataService.frame;
        if (this.frameVisible == true) {
            document.getElementById("frame").setAttribute('checked', 'checked');
        }
    }
    changegrid() {
        this.gridVisible = !this.gridVisible;
        var maxX = 2;
        var maxY = 2;
        for (var i = 0; i < this.scene.children[1].children.length; i++) {
            maxX = Math.max(maxX, Math.abs(this.scene.children[1].children[i].children[0]["geometry"].boundingBox.max.x));
            maxY = Math.max(maxY, Math.abs(this.scene.children[1].children[i].children[0]["geometry"].boundingBox.max.y));
        }
        var max = Math.ceil(Math.max(maxX, maxY) * 1.3) * 2;
        if (this.gridVisible) {
            var gridhelper = new __WEBPACK_IMPORTED_MODULE_0_three__["GridHelper"](max, max);
            gridhelper.name = "GridHelper";
            this.scene.add(gridhelper);
        }
        else {
            this.scene.remove(this.scene.getObjectByName("GridHelper"));
        }
        this.dataService.addgrid(this.gridVisible);
    }
    changeaxis() {
        this.axisVisible = !this.axisVisible;
        var maxX = 2;
        var maxY = 2;
        var maxZ = 2;
        for (var i = 0; i < this.scene.children[1].children.length; i++) {
            maxX = Math.max(maxX, Math.abs(this.scene.children[1].children[i].children[0]["geometry"].boundingBox.max.x));
            maxY = Math.max(maxY, Math.abs(this.scene.children[1].children[i].children[0]["geometry"].boundingBox.max.y));
            maxZ = Math.max(maxZ, Math.abs(this.scene.children[1].children[i].children[0]["geometry"].boundingBox.max.z));
        }
        var max = Math.ceil(Math.max(maxX, maxY, maxZ) * 1.2);
        if (this.axisVisible) {
            var axishelper = new __WEBPACK_IMPORTED_MODULE_0_three__["AxisHelper"](max);
            axishelper.name = "AxisHelper";
            this.scene.add(axishelper);
        }
        else {
            this.scene.remove(this.scene.getObjectByName("AxisHelper"));
        }
        this.dataService.addaxis(this.axisVisible);
    }
    changeshadow() {
        this.shadowVisible = !this.shadowVisible;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].type === "DirectionalLight") {
                if (this.shadowVisible) {
                    this.scene.children[i].castShadow = true;
                }
                else {
                    this.scene.children[i].castShadow = false;
                }
            }
        }
        this.dataService.addshadow(this.shadowVisible);
    }
    changelight(_hue, _saturation, _lightness) {
        this.hue = _hue;
        this.saturation = _saturation;
        this.lightness = _lightness;
        var alight = this.alight;
        this.dataService.gethue(_hue);
        this.dataService.getsaturation(_saturation);
        this.dataService.getlightness(_lightness);
        for (var i = 0; i < alight.length; i++) {
            var ambientLight = alight[i];
            ambientLight.color.setHSL(_hue, _saturation, _lightness);
        }
    }
    changeframe() {
        this.frameVisible = !this.frameVisible;
        if (this.frameVisible) {
            for (var i = 0; i < this.scene.children[1].children.length; i++) {
                this.scene.children[1].children[i].children[0]["material"].wireframe = true;
            }
        }
        else {
            for (var i = 0; i < this.scene.children[1].children.length; i++) {
                this.scene.children[1].children[i].children[0]["material"].wireframe = false;
            }
        }
        this.dataService.addframe(this.frameVisible);
    }
    setting(event) {
        event.stopPropagation();
    }
};
SettingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
        selector: 'app-setting',
        template: __webpack_require__("../../../../../src/app/gs-viewer/setting/setting.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gs-viewer/setting/setting.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_data_service__["a" /* DataService */]])
], SettingComponent);



/***/ }),

/***/ "../../../../../src/app/gs-viewer/toolwindow/groups.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#groupsview{\r\n  color:black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gs-viewer/toolwindow/groups.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"groupsview\">\r\n\tGroupview\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/gs-viewer/toolwindow/groups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let GroupsComponent = class GroupsComponent {
    ngOnInit() {
    }
};
GroupsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-groups',
        template: __webpack_require__("../../../../../src/app/gs-viewer/toolwindow/groups.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gs-viewer/toolwindow/groups.component.css")]
    })
], GroupsComponent);



/***/ }),

/***/ "../../../../../src/app/gs-viewer/toolwindow/toolwindow.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#toolwindow{\r\n  background-color:white;\r\n}\r\n#toolbar{\r\n  background-color: #E6E6E6;\r\n  height: 28px;\r\n}\r\n#point{\r\n  margin-left:25px;\r\n  font-size:20px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n#vertice{\r\n  font-size:22px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n#edge{\r\n  font-size:22px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n#wire{\r\n  font-size:22px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n#face{\r\n  font-size:22px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n#object{\r\n  font-size:20px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n#selected{\r\n  margin-left:30px;\r\n}\r\n.visible{\r\n  color: grey;\r\n}\r\n#table{\r\n  width:100% ;\r\n  height: 15px;\r\n}\r\n#tablename{\r\n  width:100% ;\r\n  height: 15px;\r\n  color:grey;\r\n}\r\n#numberbutton{\r\n  width:100%;\r\n  border:0;\r\n}\r\n.selectid{\r\n  background-color:#66CCFF;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gs-viewer/toolwindow/toolwindow.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"toolwindow\">\r\n  <div id=\"toolbar\">\r\n    <button id=\"point\" [class.visible]=\"Visible === 'point'\" (click)=\"point(Visible)\"><i class=\"fa fa-dot-circle-o\"></i></button>\r\n    <button id=\"vertice\" [class.visible]=\"Visible === 'vertice'\" (click)=\"vertice(Visible)\">V</button>\r\n    <button id=\"edge\" [class.visible]=\"Visible === 'edge'\" (click)=\"edge(Visible)\">E</button>\r\n    <button id=\"wire\" [class.visible]=\"Visible === 'wire'\" (click)=\"wire(Visible)\">W</button>\r\n    <button id=\"face\" [class.visible]=\"Visible === 'face'\" (click)=\"face(Visible)\">F</button>\r\n    <button id=\"object\" [class.visible]=\"Visible === 'object'\" (click)=\"object(Visible)\"><i class=\"fa fa-map\"></i></button>\r\n    <input id=\"selected\" type=\"checkbox\" (click)=\"changeselected()\">\r\n    <label id=\"selectedname\" value=\"selected\">Show selected only</label>\r\n  </div>\r\n  <div id=\"toolview\">\r\n    <div *ngIf=\"Visible === 'point'\">\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" id=\"table\" name=\"table\" bordercolor=\"#d0d0d0\">\r\n        <tr>\r\n          <td name=\"Number\" align=center width=\"40%\" align=center>ID</td>\r\n          <td width=\"20%\" align=center>X</td>\r\n          <td width=\"20%\" align=center>Y</td>\r\n          <td width=\"20%\" align=center>Z</td>\r\n        </tr>\r\n      </table>\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" id=\"tablename\" name=\"table\" bordercolor=\"#d0d0d0\" *ngFor=\"let datascale of attribute; \">\r\n        <tr>\r\n          <button id=\"numberbutton\">{{datascale.id}}</button>\r\n          <td width=\"20%\" align=center>{{datascale.x}}</td>\r\n          <td width=\"20%\" align=center>{{datascale.y}}</td>\r\n          <td width=\"20%\" align=center>{{datascale.z}}</td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"Visible === 'vertice'\">\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" width=\"40%\">\r\n        <tr>\r\n          <td  align=center >Vertices Lable</td>\r\n        </tr>\r\n      </table>\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" *ngFor=\"let datascale of attribute\" width=\"40%\">\r\n        <tr>\r\n          <button id=\"numberbutton\">{{datascale.id}}</button>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"Visible === 'edge'\">\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" width=\"40%\">\r\n        <tr>\r\n          <td  align=center>Edge ID</td>\r\n        </tr>\r\n      </table>\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" *ngFor=\"let datascale of attribute\" width=\"40%\">\r\n        <tr>\r\n          <button id=\"numberbutton\" >{{datascale.id}}</button>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"Visible === 'wire'\">\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" width=\"40%\">\r\n        <tr>\r\n          <td  align=center>Wire ID</td>\r\n        </tr>\r\n      </table>\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" *ngFor=\"let datascale of attribute\" width=\"40%\">\r\n        <tr>\r\n          <button id=\"numberbutton\" >{{datascale.id}}</button>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"Visible === 'face'\">\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" width=\"40%\">\r\n        <tr>\r\n          <td  align=center>Face ID</td>\r\n        </tr>\r\n      </table>\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" *ngFor=\"let datascale of attribute\" width=\"40%\">\r\n        <tr>\r\n          <button id=\"numberbutton\" >{{datascale.id}}</button>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"Visible === 'object'\">\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" width=\"40%\">\r\n        <tr>\r\n          <td name=\"Number\" align=center  align=center>Object ID</td>\r\n        </tr>\r\n      </table>\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" *ngFor=\"let datascale of attribute \" width=\"40%\">\r\n        <tr>\r\n          <button  id=\"numberbutton\" >{{ datascale.id}}</button>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/gs-viewer/toolwindow/toolwindow.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolwindowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__ = __webpack_require__("../../../../../src/app/gs-viewer/data/DataSubscriber.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ToolwindowComponent = class ToolwindowComponent extends __WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__["a" /* DataSubscriber */] {
    constructor(injector, myElement) {
        super(injector);
        this.Visible = "object";
        this.selectedVisible = false;
        this.scene = this.dataService.getScene();
        this.attribute = [];
        this.num = [];
        this.collection = [];
        this.selectObj = [];
        this.myElement = myElement;
    }
    ngOnInit() {
        this.model = this.dataService.getGsModel();
        this.object(this.Visible);
    }
    notify() {
        if (this.selectedVisible == true) {
            this.objectcheck();
        }
        /*for(var i=0;i<this.dataService.selecting.length;i++){
          for(var j=0;j<this.scene.children[1].children.length;j++){
            if(this.dataService.selecting[i].uuid===this.scene.children[1].children[j].children[0].uuid){
               console.log(this.scene.children[1].children[j].children[0].parent);
               this.selectObj.push(this.scene.children[1].children[j].children[0].parent);
            }
          }
        }*/
        this.dataService.visible = this.Visible;
    }
    point(Visible) {
        this.Visible = "point";
        this.attribute = [];
        for (var i = 0; i < this.model.getGeom().getAllPoints().length; i++) {
            var attributepoints = [];
            attributepoints.id = this.model.getGeom().getAllPoints()[i].getID();
            attributepoints.x = this.model.getGeom().getAllPoints()[i].getPosition()[0];
            attributepoints.y = this.model.getGeom().getAllPoints()[i].getPosition()[1];
            attributepoints.z = this.model.getGeom().getAllPoints()[i].getPosition()[2];
            this.attribute.push(attributepoints);
        }
    }
    pointcheck() {
        this.attribute = [];
        for (var i = 0; i < this.model.getGeom().getAllPoints().length; i++) {
            var attributepoints = [];
            attributepoints.id = this.model.getGeom().getAllPoints()[i].getID();
            attributepoints.x = this.model.getGeom().getAllPoints()[i].getPosition()[0];
            attributepoints.y = this.model.getGeom().getAllPoints()[i].getPosition()[1];
            attributepoints.z = this.model.getGeom().getAllPoints()[i].getPosition()[2];
            this.attribute.push(attributepoints);
        }
    }
    vertice(Visible) {
        this.Visible = "vertice";
        this.attribute = [];
        for (var n = 0; n < this.scene.children.length; n++) {
            if (this.scene.children[n].type === "Scene") {
                for (var i = 0; i < this.scene.children[n].children.length; i++) {
                    for (var j = 0; j < this.scene.children[n].children[i].children.length; j++) {
                        if (this.scene.children[n].children[i].children[j].name === "Vertices") {
                            for (var m = 0; m < this.scene.children[n].children[i].children[j].children.length; m++) {
                                var attributeface = [];
                                attributeface.id = this.scene.children[n].children[i].children[j].children[m].name;
                                this.attribute.push(attributeface);
                            }
                        }
                    }
                }
                break;
            }
        }
    }
    verticecheck() {
        this.attribute = [];
        for (var i = 0; i < this.selectObj.length; i++) {
            for (var j = 0; j < this.selectObj[i].children.length; j++) {
                if (this.selectObj[i].children[j].name === "Vertices") {
                    for (var n = 0; n < this.selectObj[i].children[j].children.length; n++) {
                        var attributevertice = [];
                        attributevertice.id = this.selectObj[i].children[j].children[n].name;
                        this.attribute.push(attributevertice);
                    }
                }
            }
        }
    }
    edge(Visible) {
        this.Visible = "edge";
        this.attribute = [];
        for (var n = 0; n < this.scene.children.length; n++) {
            if (this.scene.children[n].type === "Scene") {
                for (var i = 0; i < this.scene.children[n].children.length; i++) {
                    for (var j = 0; j < this.scene.children[n].children[i].children.length; j++) {
                        if (this.scene.children[n].children[i].children[j].name === "Edges") {
                            for (var m = 0; m < this.scene.children[n].children[i].children[j].children.length; m++) {
                                var attributeedge = [];
                                attributeedge.id = this.scene.children[n].children[i].children[j].children[m].name;
                                this.attribute.push(attributeedge);
                            }
                            break;
                        }
                    }
                }
                break;
            }
        }
    }
    edgecheck() {
        this.attribute = [];
        for (var i = 0; i < this.selectObj.length; i++) {
            for (var j = 0; j < this.selectObj[i].children.length; j++) {
                if (this.selectObj[i].children[j].name === "Edges") {
                    for (var n = 0; n < this.selectObj[i].children[j].children.length; n++) {
                        var attributeedge = [];
                        attributeedge.id = this.selectObj[i].children[j].children[n].name;
                        this.attribute.push(attributeedge);
                    }
                    break;
                }
            }
        }
    }
    wire(Visible) {
        this.Visible = "wire";
        this.attribute = [];
        for (var n = 0; n < this.scene.children.length; n++) {
            if (this.scene.children[n].type === "Scene") {
                for (var i = 0; i < this.scene.children[n].children.length; i++) {
                    for (var j = 0; j < this.scene.children[n].children[i].children.length; j++) {
                        if (this.scene.children[n].children[i].children[j].name === "Wires") {
                            for (var m = 0; m < this.scene.children[n].children[i].children[j].children.length; m++) {
                                var attributeface = [];
                                attributeface.id = this.scene.children[n].children[i].children[j].children[m].name;
                                this.attribute.push(attributeface);
                            }
                        }
                    }
                }
                break;
            }
        }
    }
    wirecheck() {
        this.attribute = [];
        for (var i = 0; i < this.selectObj.length; i++) {
            for (var j = 0; j < this.selectObj[i].children.length; j++) {
                if (this.selectObj[i].children[j].name === "Wires") {
                    for (var n = 0; n < this.selectObj[i].children[j].children.length; n++) {
                        var attributewire = [];
                        attributewire.id = this.selectObj[i].children[j].children[n].name;
                        this.attribute.push(attributewire);
                    }
                }
            }
        }
    }
    face(Visible) {
        this.Visible = "face";
        this.attribute = [];
        for (var n = 0; n < this.scene.children.length; n++) {
            if (this.scene.children[n].type === "Scene") {
                for (var i = 0; i < this.scene.children[n].children.length; i++) {
                    for (var j = 0; j < this.scene.children[n].children[i].children.length; j++) {
                        if (this.scene.children[n].children[i].children[j].name === "Faces") {
                            for (var m = 0; m < this.scene.children[n].children[i].children[j].children.length; m++) {
                                var attributeface = [];
                                attributeface.id = this.scene.children[n].children[i].children[j].children[m].name;
                                this.attribute.push(attributeface);
                            }
                        }
                    }
                }
                break;
            }
        }
    }
    facecheck() {
        this.attribute = [];
        for (var i = 0; i < this.selectObj.length; i++) {
            for (var j = 0; j < this.selectObj[i].children.length; j++) {
                if (this.selectObj[i].children[j].name === "Faces") {
                    for (var n = 0; n < this.selectObj[i].children[j].children.length; n++) {
                        var attributeface = [];
                        attributeface.id = this.selectObj[i].children[j].children[n].name;
                        this.attribute.push(attributeface);
                    }
                }
            }
        }
    }
    object(Visible) {
        this.Visible = "object";
        this.attribute = [];
        for (var n = 0; n < this.scene.children.length; n++) {
            if (this.scene.children[n].type === "Scene") {
                for (var i = 0; i < this.scene.children[n].children.length; i++) {
                    for (var j = 0; j < this.scene.children[n].children[i].children[this.scene.children[n].children[i].children.length - 1].children.length; j++) {
                        var attributeobj = [];
                        attributeobj.id = this.scene.children[n].children[i].children[this.scene.children[n].children[i].children.length - 1].children[j].name;
                        this.attribute.push(attributeobj);
                    }
                }
                break;
            }
        }
    }
    objectcheck() {
        this.attribute = [];
        for (var i = 0; i < this.selectObj.length; i++) {
            for (var j = 0; j < this.selectObj[i].children[this.selectObj[i].children.length - 1].children.length; j++) {
                var attributeobj = [];
                attributeobj.id = this.selectObj[i].children[this.selectObj[i].children.length - 1].children[j].name;
                this.attribute.push(attributeobj);
            }
        }
    }
    changeselected() {
        this.selectedVisible = !this.selectedVisible;
        this.selectObj = [];
        for (var i = 0; i < this.dataService.selecting.length; i++) {
            for (var n = 0; n < this.scene.children.length; n++) {
                if (this.scene.children[n].type === "Scene") {
                    for (var j = 0; j < this.scene.children[n].children.length; j++) {
                        if (this.dataService.selecting[i].uuid === this.scene.children[n].children[j].children[0].uuid) {
                            this.selectObj.push(this.scene.children[n].children[j].children[0].parent);
                        }
                    }
                }
            }
        }
        if (this.selectedVisible) {
            if (this.Visible === "point") {
                this.pointcheck();
            }
            if (this.Visible === "vertice") {
                this.verticecheck();
            }
            if (this.Visible === "edge") {
                this.edgecheck();
            }
            if (this.Visible === "wire") {
                this.wirecheck();
            }
            if (this.Visible === "face") {
                this.facecheck();
            }
            if (this.Visible === "object") {
                this.objectcheck();
            }
        }
        else {
            if (this.Visible === "point") {
                this.point(this.Visible);
            }
            if (this.Visible === "vertice") {
                this.vertice(this.Visible);
            }
            if (this.Visible === "edge") {
                this.edge(this.Visible);
            }
            if (this.Visible === "wire") {
                this.wire(this.Visible);
            }
            if (this.Visible === "face") {
                this.face(this.Visible);
            }
            if (this.Visible === "object") {
                this.object(this.Visible);
            }
        }
    }
    Onselect(i) {
        var select;
        for (var j = 0; j < this.attribute.length; j++) {
            if (this.attribute[j].original == i) {
                select = this.attribute[j].mesh;
                this.dataService.pushselecting(select);
                select.material.color.setHex(0x2E9AFE);
            }
        }
    }
};
ToolwindowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-toolwindow',
        template: __webpack_require__("../../../../../src/app/gs-viewer/toolwindow/toolwindow.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gs-viewer/toolwindow/toolwindow.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
], ToolwindowComponent);



/***/ }),

/***/ "../../../../../src/app/gs-viewer/viewer/viewer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#container {\r\n  position: relative;\r\n  height:100%;\r\n  width: 100%;\r\n  margin:0px;\r\n  overflow: hidden;\r\n  color: white;\r\n}\r\n\r\n#rotating{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:15px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  top: 0px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n\r\n#paning{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:15px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  top: 25px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n\r\n#zooming{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:15px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 50px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n\r\n#zoomingfit{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:15px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 75px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n\r\n#selecting{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:15px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 100px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n\r\n#setting{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:15px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 125px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n\r\n\r\n.selected{\r\n  color: grey;\r\n\r\n}\r\n.visible{\r\n  color: grey;\r\n}\r\n\r\n.cursor {\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gs-viewer/viewer/viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\"  \r\n\t\t(mousemove)=\"onDocumentMouseMove($event)\" \r\n\t\t(click)=\"Mousedown($event)\">\r\n\t\r\n  \t\t<!-- <button id=\"rotating\" \r\n  \t\t\t[class.visible]=\"Visible === 'rotate'\" \r\n  \t\t\t(click)=\"rotate()\">\r\n  \t\t\t<i class=\"fa fa-refresh\"></i>\r\n  \t\t</button>\r\n\r\n  \t\t<button id=\"paning\"  \r\n  \t\t\t[class.visible]=\"Visible === 'pan'\" \r\n  \t\t\t(click)=\"pan()\">\r\n  \t\t\t<i class=\"fa fa-hand-paper-o\"></i>\r\n  \t\t</button>\r\n\r\n  \t\t<button id=\"zooming\"  \r\n  \t\t\t[class.visible]=\"Visible === 'zoom'\" \r\n  \t\t\t(click)=\"Visible='zoom'\">\r\n  \t\t\t<i class=\"fa fa-search\"></i>\r\n  \t\t</button>\r\n  \t\t\r\n  \t\t<button id=\"zoomingfit\"  \r\n  \t\t\t[class.visible]=\"Visible === 'zoomfit'\" \r\n  \t\t\t(click)=\"zoomfit()\">\r\n  \t\t\t<i class=\"fa fa-arrows-alt\"></i>\r\n  \t\t</button> -->\r\n  \t\t\r\n  \t\t<button id=\"selecting\" [class.visible]=\"Visible === 'select'\" (click)= \"select($event)\" ><i class=\"fa fa-mouse-pointer\"></i></button>\r\n  \t\t\r\n  \t\t<button id=\"setting\" [class.selected]=\"settingVisible\" (click)= \"settingVisible = !settingVisible\">\r\n      \t\r\n      \t<!--setting-->\r\n      \t<i class=\"fa fa-cog\"></i></button>\r\n \t\t<app-setting *ngIf=\"settingVisible == true\"></app-setting>\r\n</div>\r\n\r\n\r\n\t\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/gs-viewer/viewer/viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gs_json__ = __webpack_require__("../../../../gs-json/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_DataSubscriber__ = __webpack_require__("../../../../../src/app/gs-viewer/data/DataSubscriber.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ViewerComponent = class ViewerComponent extends __WEBPACK_IMPORTED_MODULE_3__data_DataSubscriber__["a" /* DataSubscriber */] {
    constructor(injector, myElement) {
        super(injector);
        this.settingVisible = false;
        this.Visible = "rotate";
        // ???
        this.selMaterial = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0xaaaaFF, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
        this.basicColHex = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0xFFFFFF, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
        this.mouseHovHex = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0xFFaaaa, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
        this.myElement = myElement;
    }
    ngOnInit() {
        let container = this.myElement.nativeElement.children.namedItem("container");
        /// check for container
        if (!container) {
            console.error("No container in Three Viewer");
            return;
        }
        ///
        let width = container.clientWidth;
        let height = container.clientHeight;
        let scene = this.dataService.getScene(width, height);
        let renderer = this.dataService.getRenderer();
        let camera = this.dataService.getCamera();
        let controls = this.dataService.getControls();
        container.appendChild(renderer.domElement);
        this.scene = scene;
        this.renderer = renderer;
        this.camera = camera;
        this.controls = controls;
        this.width = width;
        this.height = height;
        this.updateModel();
        // render loop
        let self = this;
        function animate() {
            requestAnimationFrame(animate);
            self.renderer.render(self.scene, self.camera);
        }
        ;
        animate();
        // todo: check and refactor what is required?
        this.selecting = [];
        this.mouse = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"]();
        this.raycaster = new __WEBPACK_IMPORTED_MODULE_1_three__["Raycaster"]();
        this.spritey = [];
        document.body.style.cursor = " pointer";
        // this.geometry = new THREE.Geometry();
        // this.dataService.addGeom(this.geometry);
    }
    //
    //  checks if the flowchart service has a flowchart and calls update function for the viewer
    //
    notify(message) {
        if (message == "model_update") {
            this.updateModel();
        }
    }
    /// clears all children from the scene
    clearScene() {
        /// remove children from scene
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].type === "Scene") {
                this.scene.remove(this.scene.children[i]);
            }
        }
    }
    //
    // update mode
    // todo: optimize
    // 
    updateModel() {
        this._model = this.dataService.getGsModel();
        if (!this._model || !this.scene) {
            console.warn("Model or Scene not defined");
            return;
        }
        try {
            const scene_data = __WEBPACK_IMPORTED_MODULE_2_gs_json__["a" /* genThreeModel */](this._model);
            this.clearScene();
            let loader = new __WEBPACK_IMPORTED_MODULE_1_three__["ObjectLoader"]();
            let objectData = loader.parse(scene_data);
            for (var i = 0; i < objectData.children.length; i++) {
                if (objectData.children[i].children !== undefined) {
                    for (var j = 0; j < objectData.children[i].children.length; j++) {
                        if (objectData.children[i].children[j].type === "Mesh") {
                            objectData.children[i].children[j]["geometry"].computeVertexNormals();
                            objectData.children[i].children[j]["geometry"].computeBoundingBox();
                            objectData.children[i].children[j]["geometry"].computeBoundingSphere();
                        }
                    }
                }
            }
            this.scene.add(objectData);
        }
        catch (ex) {
            console.error("Error displaying model:", ex);
        }
    }
    //
    //  events
    //
    onDocumentMouseMove(event) {
        event.preventDefault();
        this.mouse = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"]();
        this.mouse.x = (event.offsetX / this.width) * 2 - 1;
        this.mouse.y = -(event.clientY / this.height) * 2 + 1;
    }
    Mousedown(event) {
        if (this.Visible == "select") {
            var e = event;
            this.onDocumentMouseDown(e);
        }
    }
    onDocumentMouseDown(event) {
        var selectedObj, intersects;
        var scenechildren = [];
        var children;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].name == "Scene") {
                children = this.scene.children[i].children;
                break;
            }
            if (i == this.scene.children.length - 1) {
                return;
            }
        }
        for (var i = 0; i < children.length; i++) {
            for (var j = 0; j < children[i].children.length; j++) {
                if (children[i].children[j].type === "Mesh") {
                    scenechildren.push(children[i].children[j]);
                }
            }
        }
        this.raycaster.setFromCamera(this.mouse, this.camera);
        intersects = this.raycaster.intersectObjects(scenechildren);
        if (intersects.length > 0) {
            selectedObj = intersects[0].object;
            var index = this.dataService.getSelectingIndex(selectedObj.uuid);
            if (index < 0) {
                selectedObj.material = this.selMaterial;
                this.dataService.selecting.push(selectedObj);
            }
            else {
                selectedObj.material = this.basicColHex;
                this.dataService.selecting.splice(index, 1);
            }
        }
        else {
            for (var i = 0; i < this.dataService.selecting.length; i++) {
                this.dataService.selecting[i].material = this.basicColHex;
            }
            this.dataService.selecting = [];
        }
        this.updateViewer();
    }
    //
    //  related to sprites??
    //
    updateViewer() {
        this.updateSprite();
    }
    updateSprite() {
        for (var i = this.spritey.length - 1; i >= 0; i--) {
            this.scene.remove(this.spritey[i]);
        }
        this.spritey = [];
        for (var i = 0; i < this.dataService.selecting.length; i++) {
            var obj = this.dataService.selecting[i];
            var childArray = obj.parent.children;
            var sprit;
            var position;
            console.log(childArray);
            if (childArray[childArray.length - 1].type == this.dataService.visible) {
                sprit = this.sprite(childArray[childArray.length - 1].children[0].name, { fontsize: 70 });
                position = obj.geometry.boundingBox.max;
                sprit.position.set(position.x, position.y, position.z);
                this.scene.add(sprit);
                this.spritey.push(sprit);
            }
            else {
                for (var j = 0; j < childArray.length - 1; j++) {
                    if (childArray[j].type == "Group" && this.dataService.visible == childArray[j].name) {
                        this.addSprites(childArray[j]);
                        break;
                    }
                }
                if (j == childArray.length - 1) {
                    sprit = this.sprite(childArray[j].children[0].name, { fontsize: 30 });
                    position = obj.geometry.boundingBox.max;
                    sprit.position.set(position.x, position.y, position.z);
                    this.scene.add(sprit);
                    this.spritey.push(sprit);
                }
            }
        }
    }
    addSprites(childArray) {
        var sprit;
        var position;
        console.log(childArray);
        for (var i = 0; i < childArray.children.length; i++) {
            sprit = this.sprite(childArray.children[i].name, { fontsize: 30 });
            position = childArray.children[i].position;
            sprit.position.set(position.x, position.y, position.z);
            this.scene.add(sprit);
            this.spritey.push(sprit);
        }
    }
    sprite(message, parameters) {
        if (parameters === undefined)
            parameters = {};
        var fontface = parameters.hasOwnProperty("fontface") ? parameters["fontface"] : "Arial";
        var fontsize = parameters.hasOwnProperty("fontsize") ? parameters["fontsize"] : 30;
        var borderThickness = parameters.hasOwnProperty("borderThickness") ? parameters["borderThickness"] : 0.1;
        var borderColor = parameters.hasOwnProperty("borderColor") ? parameters["borderColor"] : { r: 0, g: 0, b: 0, a: 1.0 };
        var backgroundColor = parameters.hasOwnProperty("backgroundColor") ? parameters["backgroundColor"] : { r: 0, g: 0, b: 0, a: 1.0 };
        var textColor = parameters.hasOwnProperty("textColor") ? parameters["textColor"] : { r: 0, g: 0, b: 255, a: 1.0 };
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        context.font = "Bold " + fontsize + "px " + fontface;
        var metrics = context.measureText(message);
        var textWidth = metrics.width;
        context.fillStyle = "rgba(" + backgroundColor.r + "," + backgroundColor.g + "," + backgroundColor.b + "," + backgroundColor.a + ")";
        context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + "," + borderColor.b + "," + borderColor.a + ")";
        context.lineWidth = borderThickness;
        context.fillStyle = "rgba(" + textColor.r + ", " + textColor.g + ", " + textColor.b + ", 1.0)";
        context.fillText(message, borderThickness, fontsize + borderThickness);
        var texture = new __WEBPACK_IMPORTED_MODULE_1_three__["Texture"](canvas);
        texture.needsUpdate = true;
        var spriteMaterial = new __WEBPACK_IMPORTED_MODULE_1_three__["SpriteMaterial"]({ map: texture, color: 0xffffff });
        var sprite = new __WEBPACK_IMPORTED_MODULE_1_three__["Sprite"](spriteMaterial);
        return sprite;
    }
    //
    //  used for anything?
    //
    render() {
        let self = this;
        (function render() {
            if (self.Visible == "select") {
                var scenechildren = new __WEBPACK_IMPORTED_MODULE_1_three__["Scene"]();
                for (var i = 0; i < self.scene.children[1].children.length; i++) {
                    for (var j = 0; j < self.scene.children[1].children[i].children.length; j++) {
                        if (self.scene.children[1].children[i].children[j].type === "Mesh") {
                            var children = self.scene.children[1].children[i].children[j];
                            scenechildren.children.push(children);
                        }
                    }
                }
            }
            requestAnimationFrame(render);
            self.renderer.render(self.scene, self.camera);
        }());
        this.renderer.render(this.scene, this.camera);
    }
    //
    //  viewer functionality
    //
    zoomfit() {
        // todo: fix
        document.body.style.cursor = "no-drop";
        // enable zoom; disable everything else
        this.controls.enabled = true;
        this.controls.enableZoom = true;
        this.controls.enableRotate = false;
        this.controls.enablePan = false;
        this.Visible = "zoomfit";
        // repeat??
        if (this.selecting.length === 0) {
            var obj = new __WEBPACK_IMPORTED_MODULE_1_three__["Object3D"]();
            obj = this.scene;
            var boxHelper = new __WEBPACK_IMPORTED_MODULE_1_three__["BoxHelper"](obj);
            var boundingSphere = boxHelper.geometry.boundingSphere;
            var center = boundingSphere.center;
            var radius = boundingSphere.radius;
            var fov = this.camera.fov * (Math.PI / 180);
            var vec_centre_to_pos = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"]();
            vec_centre_to_pos.subVectors(this.camera.position, center);
            var tmp_vec = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](Math.abs(radius / Math.sin(fov / 2)), Math.abs(radius / Math.sin(fov / 2)), Math.abs(radius / Math.sin(fov / 2)));
            vec_centre_to_pos.setLength(tmp_vec.length());
            var perspectiveNewPos = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"]();
            perspectiveNewPos.addVectors(center, vec_centre_to_pos);
            var newLookAt = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](center.x, center.y, center.z);
            this.camera.position.copy(perspectiveNewPos);
            this.camera.lookAt(newLookAt);
            this.camera.updateProjectionMatrix();
            this.controls.target.set(newLookAt.x, newLookAt.y, newLookAt.z);
        }
        else {
            var axisX, axisY, axisZ, centerX, centerY, centerZ = 0;
            var radius = 0;
            for (var i = 0; i < this.selecting.length; i++) {
                axisX += this.selecting[i].geometry.boundingSphere.center.x;
                axisY += this.selecting[i].geometry.boundingSphere.center.y;
                axisZ += this.selecting[i].geometry.boundingSphere.center.z;
                radius = Math.max(this.selecting[i].geometry.boundingSphere.radius, radius);
            }
            centerX = axisX / this.scene.children[1].children.length;
            centerY = axisY / this.scene.children[1].children.length;
            centerY = axisY / this.scene.children[1].children.length;
            var center = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](centerX, centerY, centerZ);
            var fov = this.camera.fov * (Math.PI / 180);
            var vec_centre_to_pos = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"]();
            vec_centre_to_pos.subVectors(this.camera.position, center);
            var tmp_vec = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](Math.abs(radius / Math.sin(fov / 2)), Math.abs(radius / Math.sin(fov / 2)), Math.abs(radius / Math.sin(fov / 2)));
            vec_centre_to_pos.setLength(tmp_vec.length());
            var perspectiveNewPos = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"]();
            perspectiveNewPos.addVectors(center, vec_centre_to_pos);
            var newLookAt = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](center.x, center.y, center.z);
            this.camera.position.copy(perspectiveNewPos);
            this.camera.lookAt(newLookAt);
            this.camera.updateProjectionMatrix();
            this.controls.target.set(newLookAt.x, newLookAt.y, newLookAt.z);
        }
    }
    pan() {
        this.camera.updateProjectionMatrix();
        this.controls.enabled = true;
        this.controls.enableZoom = false;
        this.controls.enableRotate = false;
        this.controls.enablePan = true;
        //todo: remove
        document.body.style.cursor = "-webkit-grab";
        this.Visible = "pan";
    }
    rotate() {
        document.body.style.cursor = " pointer";
        // reset controls
        this.controls.enabled = true;
        this.controls.enableZoom = false;
        this.controls.enableRotate = true;
        this.controls.enablePan = false;
        if (this.selecting.length === 0) {
            var centerX = 0;
            var centerY = 0;
            var centerZ = 0;
            for (var i = 0; i < this.scene.children[1].children.length; i++) {
                centerX += this.scene.children[1].children[i].children[0]["geometry"].boundingSphere.center.x;
                centerY += this.scene.children[1].children[i].children[0]["geometry"].boundingSphere.center.y;
                centerZ += this.scene.children[1].children[i].children[0]["geometry"].boundingSphere.center.z;
            }
            centerX = centerX / this.scene.children[1].children.length;
            centerY = centerY / this.scene.children[1].children.length;
            centerZ = centerZ / this.scene.children[1].children.length;
            //this.controls.target.set(centerX,centerY,centerZ);
        }
        else {
            var axisX = 0;
            var axisY = 0;
            var axisZ = 0;
            var centerX = 0;
            var centerY = 0;
            var centerZ = 0;
            for (var i = 0; i < this.selecting.length; i++) {
                axisX += this.selecting[i].geometry.boundingSphere.center.x;
                axisY += this.selecting[i].geometry.boundingSphere.center.y;
                axisZ += this.selecting[i].geometry.boundingSphere.center.z;
            }
            centerX = axisX / this.scene.children[1].children.length;
            centerY = axisY / this.scene.children[1].children.length;
            centerZ = axisY / this.scene.children[1].children.length;
            //this.controls.target.set(centerX,centerY,centerZ);
        }
        this.Visible = "rotate";
    }
    select(event) {
        event.stopPropagation();
        document.body.style.cursor = "default";
        // reset controls
        this.controls.enabled = false;
        this.controls.enableZoom = false;
        this.controls.enableRotate = false;
        this.controls.enablePan = false;
        this.Visible = "select";
    }
};
ViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-viewer',
        template: __webpack_require__("../../../../../src/app/gs-viewer/viewer/viewer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gs-viewer/viewer/viewer.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
], ViewerComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/console/console.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<button (click)=\"clearConsole()\">Clear Console</button>\r\n\t<div class=\"message-container\" *ngFor=\"let msg of _messages;\">\r\n\t\t<span class=\"time\">{{msg.time | date:'mediumTime'}}</span>\r\n\t\t<span class=\"message\">{{msg.message}}</span>\r\n\t</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/console/console.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      width: 250px;\n      border-right: 4px solid #A9BCEC;\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.container {\n  position: relative;\n  height: 100%;\n  overflow-y: auto !important;\n  box-sizing: border-box !important;\n  padding: 15px; }\n  .container .message-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column wrap;\n            flex-flow: column wrap;\n    margin: 7.5px;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-flex: 0;\n        -ms-flex-positive: 0;\n            flex-grow: 0;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    padding: 0 5 0 0 !important;\n    border-bottom: 1px solid #8AA8C0;\n    font-family: 'Ubuntu Mono', monospace; }\n    .container .message-container .time {\n      min-width: 50%;\n      font-size: 10px;\n      white-space: nowrap;\n      color: grey !important; }\n    .container .message-container .message {\n      min-width: auto;\n      font-size: 12px;\n      white-space: nowrap;\n      color: #395D73 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/console/console.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_console_service__ = __webpack_require__("../../../../../src/app/global-services/console.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ConsoleComponent = class ConsoleComponent {
    constructor(consoleService) {
        this.consoleService = consoleService;
        this._messages = [];
        this._subscription = this.consoleService.getMessage().subscribe(message => {
            this.notify();
        });
    }
    ngOnInit() {
        this._messages = this.consoleService.getContent();
    }
    notify() {
        this._messages = this.consoleService.getContent();
    }
    clearConsole() {
        this.consoleService.clearConsole();
    }
};
ConsoleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-console',
        template: __webpack_require__("../../../../../src/app/ui-components/console/console.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/console/console.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__global_services_console_service__["a" /* ConsoleService */]])
], ConsoleComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/controls/flowchart-controls/flowchart-controls.component.html":
/***/ (function(module, exports) {

module.exports = "<!--- Not in use -->\n<div class=\"viewer\">\n\t\n\t<div class=\"header\">\n\t\t\n\t\t<div class=\"title\">Flowchart Controls</div>\n\t\t<div class=\"buttons\">\n\t\t\t<button (click)=\"newfile()\">New File</button>\n\t\t\t<button type=\"submit\" (click)=\"loadFile()\">Load File</button>\n\t\t\t<button (click)=\"execute()\">Run Code</button>\n\t\t\t<button (click)=\"save()\">Save Flowchart</button>\n\t\t</div>\n\n\t</div>\n\n\t<div class=\"container\">\n\t\t\n\t</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/controls/flowchart-controls/flowchart-controls.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      width: 250px;\n      border-right: 4px solid #A9BCEC;\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/controls/flowchart-controls/flowchart-controls.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowchartControlsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_module_service__ = __webpack_require__("../../../../../src/app/global-services/module.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let FlowchartControlsComponent = class FlowchartControlsComponent extends __WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__["a" /* Viewer */] {
    // doesn't really need to extend viewer 
    constructor(injector, modules) {
        super(injector, "flowchart-controls");
        this.modules = modules;
    }
    ngOnInit() {
        this.newfile();
    }
    newfile() {
        this.flowchartService.newFile();
    }
    execute() {
        this.flowchartService.execute();
    }
    loadFile(url) {
        this.flowchartService.loadFile(url);
    }
    save() {
        this.flowchartService.saveFile();
    }
};
FlowchartControlsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-flowchart-controls',
        template: __webpack_require__("../../../../../src/app/ui-components/controls/flowchart-controls/flowchart-controls.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/controls/flowchart-controls/flowchart-controls.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */], __WEBPACK_IMPORTED_MODULE_1__global_services_module_service__["a" /* ModuleService */]])
], FlowchartControlsComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/controls/main-menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar style=\"min-height: 45px;\">\n  <mat-toolbar-row class=\"menu-bar\">\n    <div class='section'>\n\t\t<ul class='menu'>\n\t\t\t<li class='menu-item' [matMenuTriggerFor]=\"file_menu\">\n\t\t\t\tFile\n\t\t\t</li>\n\t\t\t\n\t\t\t<li class='menu-item'>Node</li>\n\t\t\t<li class='menu-item'>Code</li>\n\t\t\t<li class='menu-item'>Help</li>\n\t\t</ul>\n\t</div>\n\t<div class='section'>\n\t\t<span id='branding'>Mobius v2.0</span>\n\t</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<mat-menu class=\"menu\" #file_menu=\"matMenu\" yPosition=\"above\" [overlapTrigger]=\"false\">\n  <span mat-menu-item (click)=\"newfile()\">New File</span>\n  <span mat-menu-item (click)=\"save()\">Save File</span>\n  <span mat-menu-item (click)=\"openPicker()\">\n  \t\t<input #fileInput style=\"display: none;\"\n  \t\ttype=\"file\" (change)=\"loadFile()\"/>\n  \t\tLoad File\n  </span>\n  <span mat-menu-item (click)=\"execute()\">Run File</span>\n</mat-menu>\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/controls/main-menu/menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset, .menu-bar ul.menu {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      width: 250px;\n      border-right: 4px solid #A9BCEC;\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.menu-bar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  background-color: #F7F7F7;\n  height: 45px;\n  line-height: 45px;\n  padding: 5px 15px; }\n  .menu-bar .section {\n    width: auto;\n    display: inline-block; }\n  .menu-bar #branding {\n    font-weight: bolder;\n    cursor: pointer;\n    font-size: 14px; }\n  .menu-bar ul.menu {\n    list-style: none; }\n    .menu-bar ul.menu .menu {\n      margin-left: 10px;\n      width: 200px; }\n    .menu-bar ul.menu li {\n      display: inline;\n      font-size: 16px;\n      margin-right: 10px; }\n      .menu-bar ul.menu li:hover {\n        color: #5D5959;\n        cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/controls/main-menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_flowchart_service__ = __webpack_require__("../../../../../src/app/global-services/flowchart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let MenuComponent = class MenuComponent {
    constructor(flowchartService) {
        this.flowchartService = flowchartService;
    }
    ngOnInit() {
        this.newfile();
    }
    newfile() {
        this.flowchartService.newFile();
    }
    execute() {
        this.flowchartService.execute();
    }
    openPicker() {
        let el = this.fileInput.nativeElement;
        el.click();
    }
    loadFile() {
        let file = this.fileInput.nativeElement.files[0];
        if (file) {
            var reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            let fs = this.flowchartService;
            reader.onload = function (evt) {
                let fileString = evt.target["result"];
                fs.loadFile(fileString);
            };
            reader.onerror = function (evt) {
                console.log("Error reading file");
            };
        }
    }
    save() {
        this.flowchartService.saveFile();
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('fileInput'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
], MenuComponent.prototype, "fileInput", void 0);
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/ui-components/controls/main-menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/controls/main-menu/menu.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__global_services_flowchart_service__["a" /* FlowchartService */]])
], MenuComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/controls/modulebox/modulebox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbox\">\r\n\t<div class = \"toolbox-content\">\r\n\t\t<div class=\"inOutBtns\">\r\n\t\t\t<span class=\"fn_name\" (click)=\"addPort('in')\">Add Input</span>\r\n\t\t\t<span class =\"fn_name\" (click)=\"addPort('out')\">Add Output</span>\r\n\t\t</div>\r\n\t\t<hr>\r\n\r\n\t\t<mat-list condensed>\r\n\t\t\t<mat-list-item class=\"fn_name\" *ngFor=\"let type of procedureTypes\"\r\n\t\t\t\t\t\t\t\t \t\t(click)=\"addProcedure($event, type)\">{{getStringForProcedureType(type)}}</mat-list-item>\r\n\t\t</mat-list>\r\n\r\n\t\t<hr/>\r\n\r\n\t\t<mat-accordion multi=\"true\">\r\n\r\n\t\t\t\t<!-- inputs -->\r\n\t\t\t\t<mat-expansion-panel [expanded]=\"true\" *ngFor=\"let cat of _category\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t\t  {{ cat }} \r\n\t\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t\t<mat-panel-description>\r\n\t\t\t\t\t\t  <!-- This is a summary of the content -->\r\n\t\t\t\t\t\t</mat-panel-description>\r\n\t\t\t\t\t</mat-expansion-panel-header>\r\n\r\n\t\t\t\t\t<mat-list condensed>\r\n\t\t\t\t\t \t<mat-list-item class=\"fn_name\" *ngFor=\"let fn of _moduleList[cat]\" (click)=\"addActionProcedure(fn);\"> \r\n\t\t\t\t\t \t\t<span class=\"module\">{{ fn.module }}</span>.<span class=\"function\">{{ fn.name }}</span>\r\n\t\t\t\t\t \t</mat-list-item>\r\n\t\t\t\t\t</mat-list>\r\n\r\n\t\t\t\t</mat-expansion-panel>\r\n\t\t\t\t\r\n\t\t</mat-accordion>\r\n\t\t\r\n\t</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/controls/modulebox/modulebox.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      width: 250px;\n      border-right: 4px solid #A9BCEC;\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.disabled {\n  color: #8AA8C0 !important; }\n  .disabled:hover {\n    color: #8AA8C0 !important; }\n\n.toolbox {\n  height: 100%;\n  background-color: #F1F1F1;\n  position: relative;\n  box-sizing: border-box;\n  font-size: 12px;\n  line-height: 14px;\n  color: #395D73;\n  cursor: pointer; }\n  .toolbox .inOutBtns {\n    padding-left: 15px;\n    padding-top: 15px; }\n    .toolbox .inOutBtns span {\n      display: block; }\n  .toolbox .toolbox-content {\n    height: 100%;\n    overflow-y: auto;\n    overflow-x: hidden; }\n    .toolbox .toolbox-content .fn_name {\n      height: auto;\n      font-size: 12px;\n      line-height: 14px;\n      color: #395D73;\n      cursor: pointer; }\n      .toolbox .toolbox-content .fn_name:hover {\n        color: #F0BFA0; }\n  .toolbox span.module {\n    color: #F3A32A !important;\n    font-weight: bold; }\n  .toolbox span.function {\n    color: #7B52AB !important;\n    font-weight: bold; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/controls/modulebox/modulebox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_code_CodeModule__ = __webpack_require__("../../../../../src/app/base-classes/code/CodeModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_classes_procedure_ProcedureModule__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureModule.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ModuleboxComponent = class ModuleboxComponent extends __WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__["a" /* Viewer */] {
    constructor(injector) {
        super(injector, "module-viewer");
        this._moduleList = [];
        this._category = [];
        this._procedureArr = [];
        this.procedureTypes = [
            __WEBPACK_IMPORTED_MODULE_3__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Data,
            __WEBPACK_IMPORTED_MODULE_3__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].ForLoopControl,
            __WEBPACK_IMPORTED_MODULE_3__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].IfElseControl
        ];
    }
    ngOnInit() {
        this._moduleList = [];
        this._node = this.flowchartService.getSelectedNode();
        this._procedureArr = this._node.getProcedure();
        let modules = this.flowchartService.getModules();
        for (let mod = 0; mod < modules.length; mod++) {
            let user_module = modules[mod];
            this._category.push(user_module["_name"]);
            this._moduleList[user_module["_name"]] = this._moduleList.concat(__WEBPACK_IMPORTED_MODULE_1__base_classes_code_CodeModule__["b" /* ModuleUtils */].getFunctions(user_module));
        }
    }
    reset() {
        this._node = undefined;
        this._procedureArr = [];
    }
    update() {
        this._node = this.flowchartService.getSelectedNode();
        if (this._node !== undefined) {
            this._procedureArr = this._node.getProcedure();
        }
        else {
            // do nothing
        }
    }
    //
    //
    //
    addActionProcedure(fn) {
        if (this._node == undefined) {
            alert("Oops.. No Node Selected");
            return;
        }
        let prod_data = { result: "", module: fn.module, function: fn.name, params: fn.params };
        let prod = __WEBPACK_IMPORTED_MODULE_3__base_classes_procedure_ProcedureModule__["a" /* ProcedureFactory */].getProcedure(__WEBPACK_IMPORTED_MODULE_3__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Action, prod_data);
        this.flowchartService.addProcedure(prod);
    }
    getStringForProcedureType(type) {
        let value = "";
        if (type == __WEBPACK_IMPORTED_MODULE_3__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Data) {
            value = "variable";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_3__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Action) {
            value = "function";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_3__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].IfElseControl) {
            value = "if-else";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_3__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].ForLoopControl) {
            value = "for-each loop";
        }
        return value;
    }
    addProcedure($event, type) {
        $event.stopPropagation();
        let prod;
        if (type == __WEBPACK_IMPORTED_MODULE_3__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Data) {
            let default_variable_name = "var" + this._procedureArr.length;
            let prod_data = { result: default_variable_name, value: "undefined" };
            prod = __WEBPACK_IMPORTED_MODULE_3__base_classes_procedure_ProcedureModule__["a" /* ProcedureFactory */].getProcedure(__WEBPACK_IMPORTED_MODULE_3__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Data, prod_data);
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_3__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].IfElseControl) {
            let prod_data = { if_condition: "undefined", el_condition: "undefined" };
            prod = __WEBPACK_IMPORTED_MODULE_3__base_classes_procedure_ProcedureModule__["a" /* ProcedureFactory */].getProcedure(__WEBPACK_IMPORTED_MODULE_3__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].IfElseControl, prod_data);
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_3__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].ForLoopControl) {
            let prod_data = { variable: "i", array_name: "[]" };
            prod = __WEBPACK_IMPORTED_MODULE_3__base_classes_procedure_ProcedureModule__["a" /* ProcedureFactory */].getProcedure(__WEBPACK_IMPORTED_MODULE_3__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].ForLoopControl, prod_data);
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_3__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Action) {
        }
        else {
            throw Error("Procedure Type invalid");
        }
        this.flowchartService.addProcedure(prod);
    }
    addPort(type) {
        // add port 
        if (type == "in") {
            this._node.addInput();
        }
        else if (type == "out") {
            this._node.addOutput();
        }
        else {
            throw Error("Unknown Port Type");
        }
        this.flowchartService.update();
    }
};
ModuleboxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-modulebox',
        template: __webpack_require__("../../../../../src/app/ui-components/controls/modulebox/modulebox.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/controls/modulebox/modulebox.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
], ModuleboxComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/editors/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"editor\">\r\n\t\r\n\t<div class=\"default\" *ngIf=\"_selectedNode == undefined\">\r\n\t\tNo Node Selected\r\n\t</div>\r\n\r\n\t<div class=\"container\" *ngIf=\"_selectedNode != undefined\">\r\n\t\t\r\n\t\t<div class=\"sidebar\">\r\n\t\t\t<app-modulebox></app-modulebox>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"view-container\">\r\n\t \t\t<app-parameter-editor></app-parameter-editor>\r\n\t\t\t<app-procedure-editor></app-procedure-editor>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n\r\n\t<!-- <split  *ngIf=\"_selectedNode != undefined\"\r\n\t\t\t  direction=\"horizontal\" \r\n              [gutterSize]=\"7\" \r\n              [useTransition]=\"true\">\r\n\r\n\t\t<split-area [visible]=\"true\" [size]=\"30\" order=\"1\">\r\n\t\t\t<app-modulebox></app-modulebox>\r\n\t\t</split-area>\r\n\r\n\t\t<split-area [visible]=\"true\" [size]=\"70\" order=\"2\">\r\n\t\t\t<div class=\"editor-container\">\r\n\t\t \t\t<app-parameter-editor></app-parameter-editor>\r\n\t\t\t\t<app-procedure-editor></app-procedure-editor>\r\n\t\t\t</div>\r\n\t\t</split-area>\r\n\r\n    </split> -->\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/editor/editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer, .editor {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container, .editor .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar, .editor .container .sidebar {\n      width: 250px;\n      border-right: 4px solid #A9BCEC;\n      z-index: 100; }\n    .viewer .container .view-container, .editor .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.default {\n  text-align: center; }\n\n.editor {\n  background-color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  width: 100%;\n  padding-bottom: 30px;\n  box-sizing: border-box; }\n  .editor .view-container {\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_layout_service__ = __webpack_require__("../../../../../src/app/global-services/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let EditorComponent = class EditorComponent extends __WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__["a" /* Viewer */] {
    constructor(injector, layoutService) {
        super(injector, "Editor");
        this.layoutService = layoutService;
        this._moduleList = [];
        this.isVisible = false;
    }
    update() {
        this._selectedNode = this.flowchartService.getSelectedNode();
        if (this._selectedNode == undefined) {
            this.isVisible = false;
        }
        else {
            this.isVisible = true;
        }
    }
    reset() {
    }
    updateNodeName($event, node) {
        let name = $event.srcElement.value;
        if (name.trim().length > 0) {
            node.setName(name);
            this.flowchartService.update();
        }
    }
};
EditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-editor',
        template: __webpack_require__("../../../../../src/app/ui-components/editors/editor/editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/editors/editor/editor.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */], __WEBPACK_IMPORTED_MODULE_1__global_services_layout_service__["a" /* LayoutService */]])
], EditorComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/editors/flowchart-viewer/flowchart-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <mat-expansion-panel class='viewer' \r\n\t\t[expanded]=\"panelOpenState\">\r\n  \t<mat-expansion-panel-header>\r\n\t    <mat-panel-title class='header'> -->\r\n\r\n<div class=\"viewer\">\r\n\r\n\t<div class=\"container\">\r\n\t\t<div class='sidebar'>\r\n\t\t\t<section>\r\n\t\t\t\t<div (click)=\"save()\">Save Flowchart</div>\r\n\t\t\t\t<div (click)=\"openPicker()\">Load Flowchart\r\n\t\t\t\t\t<input #fileInput style=\"display: none;\"\r\n\t\t\t  \t\ttype=\"file\" (change)=\"loadFile()\"/>\r\n\t\t\t\t</div>\r\n\t\t\t</section>\r\n\t\t\t<hr>\r\n\t\t\t<section>\r\n\t\t\t\t<div (click)=\"addNode($event, undefined)\">New Empty Node</div>\r\n\t\t\t\t<div class=\"disabled\">New Subnet</div>\r\n\t\t\t</section>\r\n\t\t\t<hr>\r\n\t\t\t<!--<section>\r\n\t\t\t\t<div>Save Node</div>\r\n\t\t\t</section>-->\r\n\r\n\t\t\t<section>\r\n\t\t\t\t<app-node-library></app-node-library>\r\n\t\t\t</section>\r\n\t\t\t<hr>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"view-container\">\r\n\t    \t<div class=\"info-container\" style=\"position: absolute; top: 30px; right: 30px\">\r\n\t    \t\t<!-- Zoom: {{zoom}} -->\r\n\t    \t</div>\r\n\r\n\t        <!-- svg canvas to draw the edges -->\r\n\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" \r\n\t\t\t\tclass=\"graph-container\" \r\n\t\t\t\tid=\"graph-edges\" \r\n\t\t\t\t[style.zoom]=\"zoom\">\r\n\r\n\t\t\t\t<g class=\"edge\" *ngFor=\"let edge of _edges\" >\r\n\t\t\t\t\t<path \r\n\t\t\t\t\t  [attr.d]=\"edge.path\" \r\n\t\t\t\t\t  stroke=\"#7469FF\"\r\n\t\t\t\t\t  stroke-width=\"3\" fill=\"none\" />\r\n\t\t\t\t</g>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t<!-- dragging path -->\r\n\t\t\t\t<g id=\"temporary-edge\" [class.hidden]=\"!_linkMode\" >\r\n\t\t\t\t\t<path \r\n\t\t\t\t\t[attr.d]=\"edgeString(mouse_pos.start, mouse_pos.current)\" \r\n\t\t\t\t\t \tstroke=\"#7469FF\"\r\n\t\t\t\t\t \tstroke-width=\"5\" \r\n\t\t\t\t\t \tfill=\"none\" \r\n\t\t\t\t\t \tstroke-dasharray=\"5, 5\"/>\r\n\t\t\t\t\t\t<circle id=\"pointC\" [attr.cx]=\"mouse_pos.current.x\" [attr.cy]=\"mouse_pos.current.y\" r=\"5\" />\r\n\t\t\t\t\t</g>\r\n\r\n\t\t\t</svg>\r\n\r\n\t\t\t<!-- div container for the nodes -->\r\n\t\t\t<div class=\"graph-container\" \r\n\t\t\t\tid=\"graph-nodes\" ondragover=\"return false\" [style.zoom]=\"zoom\" >\r\n\t\t\t\t\r\n\t\t\t\t<!-- all nodes -->\r\n\t\t\t\t<div class=\"node-container\">\r\n\r\n\t\t\t\t\t<!-- one node -->\r\n\t\t\t\t\t<div  class=\"node\"\r\n\t\t\t\t\t\t\t*ngFor=\"let node of _nodes; let node_index = index\" \r\n\t\t\t\t\t\t\t[style.left.px]=\"node.position[0]\" \r\n\t\t\t\t\t\t\t[style.top.px]=\"node.position[1]\" >\r\n\r\n\t\t\t\t\t\t<div class=\"btn-container\" *ngIf=\"node_index == _selectedNodeIndex\" >\r\n\t\t\t\t\t\t\t<!-- <div class=\"btn-group node-btns\">\r\n\t\t\t\t\t\t\t\t<div class=\"action-button\" (click)=\"addPort(node_index, 'in')\">\r\n\t\t\t\t\t\t\t\t\t<mat-icon>input</mat-icon>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"action-button\" (click)=\"addPort(node_index, 'out')\">\r\n\t\t\t\t\t\t\t\t\t<mat-icon>add_to_queue</mat-icon>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t<div class=\"btn-group port-btns\">\r\n\t\t\t\t\t\t\t\t<div class=\"action-button\" (click)=\"deleteNode(node_index)\" \t\t\r\n\t\t\t\t\t\t\t\t\tmatTooltip=\"Delete Node\">\r\n\t\t\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"action-button\" (click)=\"toggleNode(node)\"\r\n\t\t\t\t\t\t\t\t\tmatTooltip=\"Disable Node\">\r\n\t\t\t\t\t\t\t\t\t<mat-icon *ngIf='!node.isDisabled()'>check_circle</mat-icon>\r\n\t\t\t\t\t\t\t\t\t<mat-icon *ngIf='node.isDisabled()'>highlight_off</mat-icon>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"action-button\" (click)=\"saveNode(node_index)\" \r\n\t\t\t\t\t\t\t\t\tmatTooltip=\"Save Node To Library\"\r\n\t\t\t\t\t\t\t\t\t*ngIf=\"!isSaved(node)\">\r\n\t\t\t\t\t\t\t\t\t<mat-icon>file_download</mat-icon>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<!-- node body -->\r\n\t\t\t\t\t\t<div class=\"node-body\" \r\n\t\t\t\t\t\t\t[class.library]=\"node.getType() !== undefined\"\r\n\t\t\t\t\t\t\t[class.error]=\"node._hasError\"\r\n\t\t\t\t\t\t\t[class.disabled] =\"node.isDisabled()\"\r\n\t\t\t\t\t\t\t(click)=\"clickNode($event, node_index)\"\r\n\t\t\t\t\t\t\tdraggable=true  \r\n\t\t\t\t\t\t\t(dragstart)=\"nodeDragStart($event, node)\" \r\n\t\t\t\t\t\t\t(drag)=\"nodeDragging($event, node, node_index)\" \r\n\t\t\t\t\t\t\t(dragend)=\"nodeDragEnd($event, node)\">\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"node-name\" \r\n\t\t\t\t\t\t\t\t\t[class.selected]=\"node_index == _selectedNodeIndex\"\r\n\t\t\t\t\t\t\t\t\tmatTooltip=\"{{node.getName()}}\">\r\n\t\t\t\t\t\t\t\t    <input matInput\r\n\t\t\t\t\t\t\t\t    style=\"margin: 2px; min-width: 50px; width: 50px;\"\r\n\t\t\t\t\t\t\t\t    placeholder=\"Value\" value=\"{{ node.getName() }}\"\r\n\t\t\t\t\t\t\t\t    (change)=\"updateNodeName($event)\"/>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--inputs -->\r\n\t\t\t\t\t\t\t<div class=\"port-container\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"port input\" \r\n\t\t\t\t\t\t\t\t\t*ngFor=\"let port of node.getInputs(); let pi=index\"  \r\n\t\t\t\t\t\t\t\t\tid=\"n{{node_index}}pi{{pi}}\">\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<div class=\"port-grip\" \r\n\t\t\t\t\t\t\t\t\t\tdraggable=true\r\n\t\t\t\t\t\t\t\t\t\t[class.connected]=\"port.isConnected()\" \r\n\t\t\t\t\t\t\t\t\t\t(dragstart)=\"portDragStart($event, port, [node_index, pi])\" \r\n\t\t\t\t\t\t\t\t\t\t(drag)=\"portDragging($event, port)\" \r\n\t\t\t\t\t\t\t\t\t\t(dragend)=\"portDragEnd($event, port)\"\r\n\t\t\t\t\t\t\t\t\t\t(drop)=\"portDrop($event, port, [node_index, pi])\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<span class=\"port-name\">{{ port.getName() }}</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<!-- outputs -->\r\n\t\t\t\t\t\t\t<div class=\"port-container\">\r\n\t\t\t\t\t\t\t\t<div class=\"port output\"\r\n\t\t\t\t\t\t\t\t\t*ngFor=\"let port of node.getOutputs(); let po=index;\"\r\n\t\t\t\t\t\t\t\t\tid=\"n{{node_index}}po{{po}}\">\r\n\r\n\t\t\t\t\t\t\t\t\t<span class=\"port-name\">{{port.getName()}}</span>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"port-grip\" \r\n\t\t\t\t\t\t\t\t\t\tdraggable=true\r\n\t\t\t\t\t\t\t\t\t\t[class.selected]=\"isPortSelected(node_index, po)\"\r\n\t\t\t\t\t\t\t\t\t\t[class.connected]=\"port.isConnected()\" \r\n\t\t\t\t\t\t\t\t\t\t(click)=\"clickPort($event, node_index, po)\"\r\n\t\t\t\t\t\t\t\t\t\t(dragstart)=\"portDragStart($event, port, [node_index, po])\" \r\n\t\t\t\t\t\t\t\t\t\t(drag)=\"portDragging($event, port)\" \r\n\t\t\t\t\t\t\t\t\t\t(dragend)=\"portDragEnd($event, port)\"\r\n\t\t\t\t\t\t\t\t\t\t(drop)=\"portDrop($event, port, [node_index, po])\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div> \r\n\r\n\r\n\t\t\t\t\t\t\t<!-- <div class=\"fromLibrary\"  style=\"font-size: 8px; text-align: center\">\r\n\t\t\t\t\t\t\t\tLibrary Node\r\n\t\t\t\t\t\t\t</div> -->\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n\r\n</div>\r\n<!-- </mat-expansion-panel> -->\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/flowchart-viewer/flowchart-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      width: 250px;\n      border-right: 4px solid #A9BCEC;\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\nsplit-area {\n  overflow: auto !important; }\n\n.viewer {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-image: repeating-linear-gradient(0deg, transparent, transparent 70px, #F1F1F1 70px, #F1F1F1 71px), repeating-linear-gradient(-90deg, transparent, transparent 70px, #F1F1F1 70px, #F1F1F1 71px);\n  background-size: 71px 71px;\n  background-color: white;\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  padding-bottom: 30px; }\n  .viewer .container {\n    position: relative;\n    height: 100%;\n    overflow: hidden; }\n    .viewer .container .disabled {\n      color: #8AA8C0; }\n      .viewer .container .disabled:hover {\n        color: #8AA8C0 !important; }\n    .viewer .container .sidebar {\n      font-size: 12px;\n      background-color: #F1F1F1;\n      color: #395D73;\n      white-space: nowrap;\n      overflow-x: hidden !important; }\n      .viewer .container .sidebar section {\n        padding: 10px;\n        border-bottom: 1px solid #F1F1F1; }\n        .viewer .container .sidebar section div {\n          cursor: pointer; }\n          .viewer .container .sidebar section div:hover {\n            color: #F0BFA0; }\n  .viewer .graph-container {\n    position: absolute;\n    height: 100%;\n    width: 100%; }\n    .viewer .graph-container #graph-edges {\n      background-color: transparent;\n      z-index: 1; }\n      .viewer .graph-container #graph-edges #temporary-edge .hidden {\n        display: none; }\n    .viewer .graph-container #graph-nodes {\n      background-color: transparent;\n      overflow: hidden;\n      z-index: 1; }\n  .viewer .node-container {\n    position: relative; }\n    .viewer .node-container .node {\n      position: absolute;\n      z-index: 3;\n      margin: 0px;\n      color: #395D73;\n      /* .port-container{\r\n\t\t\t\t\tdisplay: flex; \r\n\t\t\t\t\tflex-direction: row; \r\n\t\t\t\t\tjustify-content: space-around;\r\n\t\t\t\t\r\n\t\t\t\t\tposition: relative;\r\n\t\t\t\t\theight: 10px;\r\n\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\tz-index: 1;\r\n\t\t\t\t\r\n\t\t\t\t\tmargin-top: -2px;\r\n\t\t\t\t\t\r\n\t\t\t\t\t&.input{\r\n\t\t\t\t\r\n\t\t\t\t\t\t.port{\r\n\t\t\t\t\t\t\tborder-top-right-radius: 15px;\r\n\t\t\t\t\t\t\tborder-top-left-radius: 15px;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t\t&.output{\r\n\t\t\t\t\r\n\t\t\t\t\t\t.port{\r\n\t\t\t\t\t\t\tborder-bottom-right-radius: 15px;\r\n\t\t\t\t\t\t\tborder-bottom-left-radius: 15px;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t\t.port{\r\n\t\t\t\t\t\theight: 7.5px;\r\n\t\t\t\t\t\twidth: 15px;\r\n\t\t\t\t\t\tborder: 2px solid black;\r\n\t\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t\t\tdisplay: inline-block;\r\n\t\t\t\t\t\tbackground-color: black;\r\n\t\t\t\t\t\tmargin: 0px 2px;\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\tz-index: 3;\r\n\t\t\t\t\r\n\t\t\t\t\t\t&:hover{\r\n\t\t\t\t\t\t\tbackground-color: orange;\r\n\t\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t\t\t&.connected{\r\n\t\t\t\t\t\t\tbackground-color: green;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t\t.btn-sm{\r\n\t\t\t\t\t\tposition: absolute; \r\n\t\t\t\t\t\tright: -15px;\r\n\t\t\t\t\t\tborder: 2px solid gray;\r\n\t\t\t\t\t\tcolor: gray;\r\n\t\t\t\t\t\theight: 15px; \r\n\t\t\t\t\t\twidth: 15px;\r\n\t\t\t\t\t\tfont-size: 10px; \r\n\t\t\t\t\t\tline-height: 15px;\r\n\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\r\n\t\t\t\t\t\tbackground: url('../../../../assets/img/plus.png');\r\n\t\t\t\t\t\tbackground-size: cover;\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t\t\t&.input{\r\n\t\t\t\t\t\t\ttop: -5px; \r\n\t\t\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t\t\t&.output{\r\n\t\t\t\t\t\t\tbottom: 0px; \r\n\t\t\t\t\t\t\tleft: -15px;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t} */ }\n      .viewer .node-container .node .btn-container {\n        position: absolute;\n        right: -30px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        height: 100px; }\n        .viewer .node-container .node .btn-container .btn-group {\n          position: relative;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          background: none; }\n          .viewer .node-container .node .btn-container .btn-group .action-button {\n            position: relative;\n            width: 25px;\n            height: 24px;\n            cursor: pointer;\n            font-size: 9px;\n            text-align: center; }\n            .viewer .node-container .node .btn-container .btn-group .action-button .material-icons {\n              font-size: 18px;\n              line-height: 24px;\n              color: #8AA8C0; }\n            .viewer .node-container .node .btn-container .btn-group .action-button:hover {\n              color: white; }\n              .viewer .node-container .node .btn-container .btn-group .action-button:hover .mat-icon {\n                color: #F0BFA0; }\n      .viewer .node-container .node .node-body {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        position: relative;\n        min-height: 30px;\n        min-width: 70px;\n        width: auto;\n        border: 1px solid #395D73;\n        background-color: white;\n        cursor: move; }\n        .viewer .node-container .node .node-body.disabled {\n          background-color: #16434B; }\n        .viewer .node-container .node .node-body.selected {\n          border-width: 5px; }\n        .viewer .node-container .node .node-body.library {\n          border-color: #395D73;\n          border-style: solid; }\n        .viewer .node-container .node .node-body.error {\n          background-color: #E94858; }\n        .viewer .node-container .node .node-body .node-name {\n          font-family: sans-serif;\n          font-size: 15px;\n          border-bottom: 1px solid #395D73;\n          text-align: center;\n          background-color: #F1F1F1; }\n          .viewer .node-container .node .node-body .node-name input {\n            background-color: inherit;\n            border: 0px;\n            color: #395D73;\n            text-align: center; }\n          .viewer .node-container .node .node-body .node-name.selected {\n            background-color: #8AA8C0; }\n            .viewer .node-container .node .node-body .node-name.selected input {\n              color: white;\n              font-weight: bold; }\n              .viewer .node-container .node .node-body .node-name.selected input:focus {\n                color: #395D73;\n                background-color: #F0BFA0; }\n        .viewer .node-container .node .node-body .port-container {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          margin-top: 10px;\n          margin-bottom: 10px; }\n          .viewer .node-container .node .node-body .port-container .divider {\n            height: 2px;\n            width: 100%;\n            background-color: #8AA8C0; }\n          .viewer .node-container .node .node-body .port-container .port {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            margin: 5px 0px; }\n            .viewer .node-container .node .node-body .port-container .port .port-grip {\n              width: 15px;\n              height: 15px;\n              border-radius: 50%;\n              background-color: #F1F1F1;\n              border: 1px solid #395D73;\n              cursor: pointer; }\n              .viewer .node-container .node .node-body .port-container .port .port-grip.selected {\n                border: 2px solid #8AA8C0; }\n              .viewer .node-container .node .node-body .port-container .port .port-grip:hover {\n                background-color: #F0BFA0; }\n            .viewer .node-container .node .node-body .port-container .port .port-name {\n              font-size: 12px;\n              margin: 0px 5px; }\n            .viewer .node-container .node .node-body .port-container .port.input {\n              -webkit-box-pack: start;\n                  -ms-flex-pack: start;\n                      justify-content: flex-start;\n              margin-left: -7.5px; }\n            .viewer .node-container .node .node-body .port-container .port.output {\n              -webkit-box-pack: end;\n                  -ms-flex-pack: end;\n                      justify-content: flex-end;\n              margin-right: -7.5px; }\n      .viewer .node-container .node:active {\n        cursor: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/flowchart-viewer/flowchart-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowchartViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__ = __webpack_require__("../../../../../src/app/base-classes/port/PortModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_services_layout_service__ = __webpack_require__("../../../../../src/app/global-services/layout.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let FlowchartViewerComponent = class FlowchartViewerComponent extends __WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__["a" /* Viewer */] {
    constructor(injector, layoutService) {
        super(injector, "FlowchartViewer");
        this.layoutService = layoutService;
        this.pan_mode = false;
        this.left = 0;
        this.top = 0;
        this.zoom = 1;
        this._portWidth = 15;
        this._margin = 10;
        this._nodes = [];
        this._edges = [];
        this.showLibrary = false;
        this.showDialog = { status: false, position: [0, 0] };
        // clickEdge(): void{
        //   alert("hello wrold");
        // }
        // addPort(nodeIndex: number, type: string): void{
        //   // select the node
        //   this.clickNode(null, nodeIndex);
        //   // add port 
        //   if(type == "in"){
        //       this._nodes[nodeIndex].addInput();
        //   }
        //   else if(type == "out"){
        //       this._nodes[nodeIndex].addOutput();
        //   }  
        //   this.flowchartService.update();
        // }
        //
        //  node dragging
        //
        this.dragStart = { x: 0, y: 0 };
        this.trend = { x: 1, y: 1 };
        this.shakeCount = 0;
        this._linkMode = false;
        this.mouse_pos = {
            start: { x: 0, y: 0 },
            current: { x: 0, y: 0 }
        };
    }
    reset() {
        this._selectedNode = undefined;
        this._selectedNodeIndex = undefined;
        this._selectedPortIndex = undefined;
        this._nodes = [];
        this._edges = [];
    }
    editNode() {
        //this.layoutService.toggleEditor();
    }
    deleteNode(node_index) {
        this._selectedNode = undefined;
        //this.layoutService.hideEditor();
        this.flowchartService.deleteNode(node_index);
    }
    toggleNode(node) {
        if (node.isDisabled()) {
            node.enable();
        }
        else {
            node.disable();
        }
    }
    //
    //
    //  Viewer Related Functions
    //
    //
    resetViewer() {
        this.zoom = 1;
        this.left = 0;
        this.top = 0;
        this.pan_mode = false;
    }
    scale($event) {
        // let scaleFactor: number = 0.1;
        // let value: number = this.zoom  + (Math.sign($event.wheelDelta))*scaleFactor;
        // if(value > 0.5 && value < 1.5){
        //   this.zoom = Number( (value).toPrecision(2) );
        //   this.updateEdges();
        // }
    }
    startPan($event) {
        this.pan_mode = true;
        this.pan_init = [$event.clientX, $event.clientY];
    }
    panning($event) {
        if (this.pan_mode == true) {
            let relX = $event.clientX - this.pan_init[0];
            let relY = $event.clientY - this.pan_init[1];
            let factor = 1;
            this.left += relX;
            this.top += relY;
            this.pan_init = [$event.clientX, $event.clientY];
        }
    }
    stopPan($event) {
        this.pan_mode = false;
        this.pan_init = undefined;
    }
    //
    //
    //  Data Related Functions
    //
    //
    updateEdges() {
        for (let e = 0; e < this._edges.length; e++) {
            let edge = this._edges[e];
            edge["path"] = this.getEdgePath(edge);
        }
    }
    update() {
        this._nodes = this.flowchartService.getNodes();
        this._edges = this.flowchartService.getEdges();
        let m = this._margin;
        let pw = this._portWidth;
        this._nodes.map(function (node) {
            let inputs = node.getInputs().length;
            let outputs = node.getOutputs().length;
            let max = inputs > outputs ? inputs : outputs;
            let width = m * (max + 1) + (max) * pw;
            node["width"] = width;
        });
        this.updateEdges();
        this._selectedNode = this.flowchartService.getSelectedNode();
        this._selectedNodeIndex = this.flowchartService.getSelectedNodeIndex();
        this._selectedPortIndex = this.flowchartService.getSelectedPortIndex();
    }
    resetData() {
        this._selectedNode = undefined;
        this._nodes = [];
        this._edges = [];
    }
    //
    //
    //
    isSelected(node) {
        if (node == undefined) {
            return false;
        }
        return this.flowchartService.isSelected(node);
    }
    isPortSelected(nodeIndex, portIndex) {
        return (nodeIndex == this._selectedNodeIndex && portIndex == this._selectedPortIndex);
    }
    isSaved(node) {
        if (node.getType() === undefined) {
            return false;
        }
        else {
            return true;
        }
    }
    //
    // Add node and edges
    //
    addNode($event, type) {
        $event.stopPropagation();
        if (type == undefined) {
            this.flowchartService.addNode();
        }
        else {
            this.flowchartService.addNode(type);
        }
        this.update();
    }
    addEdge(outputPortAddress, inputPortAddress) {
        this.flowchartService.addEdge(outputPortAddress, inputPortAddress);
    }
    //
    //
    //  Events
    //
    //
    clickNode($event, nodeIndex) {
        // select the node
        this.flowchartService.selectNode(nodeIndex);
    }
    clickPort($event, nodeIndex, portIndex) {
        // select the node
        $event.stopPropagation();
        this.flowchartService.selectNode(nodeIndex, portIndex);
    }
    nodeDragStart($event, node) {
        $event.dataTransfer.setDragImage(new Image(), 0, 0);
        // todo : find more elegant solution
        this.dragStart = { x: $event.pageX, y: $event.pageY };
        this.trend = { x: 1, y: 1 };
        this.shakeCount = 0;
    }
    nodeDragging($event, node, nodeIndex) {
        this.pan_mode = false;
        let relX = $event.pageX - this.dragStart.x;
        let relY = $event.pageY - this.dragStart.y;
        node.position[0] += relX;
        node.position[1] += relY;
        this.dragStart = { x: $event.pageX, y: $event.pageY };
        if (relX && relY) {
            if (Math.sign(relX) !== this.trend.x || Math.sign(relY) !== this.trend.y) {
                this.trend = { x: Math.sign(relX), y: Math.sign(relY) };
                this.shakeCount++;
                if (this.shakeCount == 8) {
                    this.flowchartService.disconnectNode(nodeIndex);
                }
            }
        }
        this.updateEdges();
    }
    nodeDragEnd($event, node) {
        this.pan_mode = false;
        let relX = $event.pageX - this.dragStart.x;
        let relY = $event.pageY - this.dragStart.y;
        node.position[0] += relX;
        node.position[1] += relY;
        this.dragStart = { x: 0, y: 0 };
        this.trend = { x: 1, y: 1 };
        this.shakeCount = 0;
        this.updateEdges();
    }
    portDragStart($event, port, address) {
        $event.stopPropagation();
        $event.dataTransfer.setDragImage(new Image(), 0, 0);
        this._startPort = port;
        this._startPort['address'] = address;
        this._linkMode = true;
        let type;
        if (port instanceof __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["a" /* InputPort */]) {
            type = "pi";
        }
        else if (port instanceof __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["c" /* OutputPort */]) {
            type = "po";
        }
        let port_position = this.getPortPosition(address[0], address[1], type);
        this.mouse_pos.start = { x: port_position.x, y: port_position.y };
        this.mouse_pos.current = { x: port_position.x, y: port_position.y };
        this.dragStart = { x: $event.clientX, y: $event.clientY };
    }
    portDragging($event, port) {
        $event.stopPropagation();
        // todo: compute total offset of this div dynamically
        // urgent!
        let relX = $event.clientX - this.dragStart.x;
        let relY = $event.clientY - this.dragStart.y;
        this.mouse_pos.current.x += relX;
        this.mouse_pos.current.y += relY;
        this.dragStart = { x: $event.clientX, y: $event.clientY };
    }
    portDragEnd($event, port) {
        $event.stopPropagation();
        let relX = $event.clientX - this.dragStart.x;
        let relY = $event.clientY - this.dragStart.y;
        this.mouse_pos.current.x += relX;
        this.mouse_pos.current.y += relY;
        this.dragStart = { x: 0, y: 0 };
        this._startPort = undefined;
        this._endPort = undefined;
        this._linkMode = false;
    }
    portDrop($event, port, address) {
        this._endPort = port;
        this._endPort["address"] = address;
        if (this._startPort !== undefined && this._endPort !== undefined) {
            let inputPort;
            let outputPort;
            if (this._startPort instanceof __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["a" /* InputPort */]) {
                inputPort = this._startPort["address"];
            }
            if (this._startPort instanceof __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["c" /* OutputPort */]) {
                outputPort = this._startPort["address"];
            }
            if (this._endPort instanceof __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["a" /* InputPort */]) {
                inputPort = this._endPort["address"];
            }
            if (this._endPort instanceof __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["c" /* OutputPort */]) {
                outputPort = this._startPort["address"];
            }
            if (inputPort !== undefined && outputPort !== undefined) {
                this.addEdge(outputPort, inputPort);
            }
            else {
                alert("Invalid connection");
            }
            // clear the variables
            this._startPort = undefined;
            this._endPort = undefined;
        }
    }
    getPortPosition(nodeIndex, portIndex, type) {
        let x;
        let y;
        let port_size = 15;
        let name = "n" + nodeIndex + type + portIndex;
        let el = document.getElementById(name);
        if (el == null) {
            return { x: 0, y: 0 };
        }
        let node_pos = this._nodes[nodeIndex].position;
        let port_pos_x = el.offsetLeft;
        let port_pos_y = el.offsetTop;
        let node_width = el.offsetParent.offsetWidth;
        if (type == "pi") {
            x = node_pos[0];
            y = node_pos[1] + port_pos_y + port_size / 2;
        }
        else if (type == "po") {
            x = node_pos[0] + node_width;
            y = node_pos[1] + port_pos_y + port_size / 2;
        }
        else {
            throw Error("Unknown port type");
        }
        return { x: x, y: y };
    }
    //
    // Edge drawing functions
    //
    getEdgePath(edge) {
        return this.edgeString(this.getPortPosition(edge.output_address[0], edge.output_address[1], "po"), this.getPortPosition(edge.input_address[0], edge.input_address[1], "pi"));
    }
    //
    //  todo: Balu
    //
    //
    edgeString(output_port_position, input_port_position) {
        if (output_port_position == undefined || input_port_position == undefined)
            return "";
        // add margin to output port in downward direction
        //output_port_position.y += 30; 
        // add margin to input port in upward direction
        //input_port_position.y -= 30;
        //
        let path;
        let move = "M";
        let line = " L";
        let control = " Q";
        // add the start point from output
        let startPoint = output_port_position.x + " " + output_port_position.y;
        let endPoint = input_port_position.x + " " + input_port_position.y;
        // move downwards/upwards in straight line
        let translate = 10;
        let shifted_startPoint = output_port_position.x + translate + " " + (output_port_position.y);
        let shifted_endPoint = input_port_position.x - translate + " " + (input_port_position.y);
        // compute curvy line
        var x0 = output_port_position.x + translate;
        var y0 = output_port_position.y;
        var x3 = input_port_position.x - translate;
        var y3 = input_port_position.y;
        var mx1 = 0.75 * x0 + 0.25 * x3;
        var mx2 = 0.25 * x0 + 0.75 * x3;
        var my1 = 0.75 * y0 + 0.25 * y3;
        var my2 = 0.25 * y0 + 0.75 * y3;
        var distance = 0.25 * Math.round(Math.sqrt(Math.pow((x3 - x0), 2) + Math.pow((y3 - y0), 2)));
        var pSlope = (x0 - x3) / (y3 - y0);
        var multi = Math.round(Math.sqrt(distance * distance / (1 + (pSlope * pSlope))));
        var x1, y1, x2, y2 = 0;
        x1 = mx1 + multi;
        x2 = mx2 - multi;
        if (y0 == y3) {
            y1 = y0 + distance;
            y2 = y0 - distance;
        }
        else {
            y1 = my1 + (pSlope * multi);
            y2 = my2 - (pSlope * multi);
        }
        //path="M"+x0+" "+y0+" C"+x1+" "+y1+" "+x2+" "+y2+" "+x3+" "+y3;*/
        path = move + startPoint
            + line + shifted_startPoint
            + "C" + x1 + " " + y1 + " " + x2 + " " + y2 + " " + x3 + " " + y3
            //+ line + shifted_endPoint 
            + line + endPoint;
        return path;
    }
    edgeClicked() {
        alert("Edge clicked");
    }
    updateNodeName($event) {
        let name = $event.target.value;
        if (name.trim().length > 0) {
            this._selectedNode.setName(name);
            this.flowchartService.update();
        }
    }
    saveNode(node) {
        this.flowchartService.saveNode(node);
    }
    openPicker() {
        let el = this.fileInput.nativeElement;
        el.click();
    }
    loadFile(url) {
        let file = this.fileInput.nativeElement.files[0];
        if (file) {
            var reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            let fs = this.flowchartService;
            reader.onload = function (evt) {
                let fileString = evt.target["result"];
                fs.loadFile(fileString);
            };
            reader.onerror = function (evt) {
                console.log("Error reading file");
            };
        }
        this.flowchartService.loadFile(url);
    }
    save() {
        this.flowchartService.saveFile();
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('fileInput'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
], FlowchartViewerComponent.prototype, "fileInput", void 0);
FlowchartViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-flowchart-viewer',
        template: __webpack_require__("../../../../../src/app/ui-components/editors/flowchart-viewer/flowchart-viewer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/editors/flowchart-viewer/flowchart-viewer.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */], __WEBPACK_IMPORTED_MODULE_3__global_services_layout_service__["a" /* LayoutService */]])
], FlowchartViewerComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/editors/parameter-editor/parameter-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer\">\r\n\r\n\t<div class=\"container\">\r\n\t\t\r\n\t\t<!-- default -->\r\n\t\t<div class=\"default\" *ngIf=\"!isVisible\">No node selected</div>\r\n\r\n\t\t<!-- main -->\r\n\t\t<div class=\"view-container\" *ngIf=\"isVisible\">\r\n\t\t\t<mat-accordion multi=\"true\" [displayMode]=\"flat\">\r\n\r\n\t\t\t\t<!-- inputs -->\r\n\t\t\t\t<mat-expansion-panel [disabled]=\"_inputs.length == 0\" [expanded]=\"true\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t\t  Inputs \r\n\t\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t\t<mat-panel-description>\r\n\t\t\t\t\t\t  <!-- This is a summary of the content -->\r\n\t\t\t\t\t\t</mat-panel-description>\r\n\t\t\t\t\t</mat-expansion-panel-header>\r\n\r\n\t\t\t\t\t<!-- <span class=\"addBtn\" (click)=\"addPort(node_index, 'in')\">Add Input</span> -->\r\n\r\n\t\t\t\t\t<div class='port input' *ngFor=\"let inp of _inputs; let i=index\">\r\n\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t<div class='row'>\r\n\t\t\t\t\t\t\t\t<!--<span class='label'>Name</span>-->\r\n\t\t\t\t\t\t\t\t<span class='content' contenteditable=\"true\" (blur)=\"updatePortName($event, inp)\">\r\n\t\t\t\t\t\t\t\t\t{{ inp.getName() }}\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class='row'>\r\n\t\t\t\t\t\t\t\t<!--<span class='label'>Type</span>-->\r\n\t\t\t\t\t\t\t\t<span class='content'>\r\n\t\t\t\t\t\t\t\t\t<select (change)=\"updateType($event.target.value, inp)\">\r\n\t\t\t\t\t\t\t\t\t\t         \t    <option *ngFor=\"let x of inputPortOpts\" [value]=\"x\" [selected]=\"inp.getType() == x\">{{getInputTypeName(x)}}</option>\r\n\t\t\t\t\t\t\t\t\t\t            </select>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class='row'>\r\n\t\t\t\t\t\t\t\t<!--<span class='label'>Default</span>-->\r\n\t\t\t\t\t\t\t\t<span class='content' contenteditable=\"true\" (blur)=\"updateDefaultValue($event, inp)\">\r\n\t\t\t\t\t\t\t\t\t{{inp.getDefaultValue()}}\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t</div>\t\t\t\r\n\t\t\t\t\t\t<div class=\"controls\">\r\n\t\t\t\t\t        <button mat-button (click)='deletePort($event, \"input\", i)'>\r\n\t\t\t\t\t    \t\t<mat-icon>delete</mat-icon>\r\n    \t\t\t\t\t    </button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</mat-expansion-panel>\r\n\r\n\t\t\t\t<!-- outputs -->\r\n\t\t\t\t<mat-expansion-panel [disabled]=\"_outputs.length == 0\" [expanded]=\"true\">\r\n\t\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t\t  Outputs \r\n\t\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t\t<mat-panel-description>\r\n\t\t\t\t\t\t  <!-- This is a summary of the content -->\r\n\t\t\t\t\t\t</mat-panel-description>\r\n\t\t\t\t\t</mat-expansion-panel-header>\r\n\r\n\t\t\t\t\t<!-- <span class =\"addBtn\" (click)=\"addPort(node_index, 'out')\">Add Output</span> -->\r\n\r\n\t\t\t\t\t<div class='port output' *ngFor=\"let output of _outputs; let o=index\"><div class=\"content\">\r\n\t\t\t\t\t\t<div class='row'>\r\n\t\t\t\t\t\t\t<!--<span class='label'>Name</span>-->\r\n\t\t\t\t\t\t\t<span class='content' contenteditable=\"true\" (blur)=\"updatePortName($event, output)\">\r\n\t\t\t\t\t\t\t\t{{ output.getName() || \"undefined\" }}\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class='row'>\r\n\t\t\t\t\t\t\t<!--<span class='label'>Type</span>-->\r\n\t\t\t\t\t\t\t<span class='content'>\r\n\t\t\t\t\t\t\t\t<select (change)=\"updateType($event.target.value, output)\">\r\n\t\t\t\t\t         \t    <option *ngFor=\"let x of outputPortOpts\" [value]=\"x\" [selected]=\"output.getType() == x\">{{getOutputTypeName(x)}}</option>\r\n\t\t\t\t\t            </select>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class='row hidden'>\r\n\t\t\t\t\t\t\t<!--<span class='label'>Default</span>-->\r\n\t\t\t\t\t\t\t<span class='content' contenteditable=\"true\" (blur)=\"updateDefaultValue($event, output)\">\r\n\t\t\t\t\t\t\t\t{{ output.getDefaultValue() || \"undefined\"}}\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"controls\">\r\n\t\t\t\t\t        <button mat-button (click)='deletePort($event, \"output\", o)'>\r\n\t\t\t\t\t    \t\t<mat-icon>delete</mat-icon>\r\n    \t\t\t\t\t    </button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</mat-expansion-panel>\r\n\r\n\t\t\t</mat-accordion>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/parameter-editor/parameter-editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      width: 250px;\n      border-right: 4px solid #A9BCEC;\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.addBtn {\n  font-size: 12px; }\n\n.viewer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .viewer .port-heading {\n    font-size: 15px;\n    line-height: 36px;\n    padding: 0px 4px;\n    text-align: center; }\n  .viewer .port {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-pack: justify !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important;\n    padding: 0px;\n    padding-left: 15px;\n    margin: 2px;\n    border-bottom: 1px dashed #8AA8C0;\n    border-top: 1px dashed #8AA8C0;\n    background-color: white; }\n    .viewer .port:hover .controls {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n    .viewer .port span {\n      width: 100px; }\n      .viewer .port span:hover {\n        border-bottom: 1px solid #F0BFA0 !important; }\n    .viewer .port .content {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row nowrap;\n              flex-flow: row nowrap;\n      height: 20px;\n      font-size: 12px;\n      line-height: 20px;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      margin-right: 50px;\n      /*.row{\t\t\t\t\r\n\t\t\t\tdisplay: flex; \r\n\t\t\t\tflex-direction: row;\r\n\r\n\t\t\t\t.label{\r\n\t\t\t\t\tdisplay: inline-block;\r\n\t\t\t\t\ttext-transform: uppercase;\r\n\t\t\t\t\tfont-size: 10px; \r\n\t\t\t\t\tcolor: gray; \r\n\t\t\t\t\twidth: 100px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.content{\r\n\t\t\t\t\tmin-width: 50px;\r\n\r\n\t\t\t\t\t&.undefined{\r\n\t\t\t\t\t\tborder-bottom: 1px dashed blue;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}*/ }\n      .viewer .port .content select {\n        font-size: 12px;\n        width: 100px;\n        border: 0px;\n        color: #395D73; }\n    .viewer .port .controls {\n      margin: 0 !important;\n      display: none; }\n      .viewer .port .controls button {\n        max-width: 15px !important;\n        height: 15px;\n        min-width: 15px !important;\n        padding: 0px !important;\n        -webkit-box-flex: 0 !important;\n            -ms-flex-positive: 0 !important;\n                flex-grow: 0 !important;\n        -ms-flex-negative: 0 !important;\n            flex-shrink: 0 !important; }\n        .viewer .port .controls button mat-icon {\n          height: 12px;\n          vertical-align: top !important;\n          font-size: 15px !important;\n          text-align: left !important; }\n        .viewer .port .controls button:hover {\n          background-color: #F1F1F1 !important; }\n          .viewer .port .controls button:hover mat-icon {\n            color: #F07A79 !important; }\n\n.hidden {\n  display: inline-block !important;\n  visibility: hidden !important; }\n\n.container {\n  overflow: hidden !important; }\n  .container mat-expansion-panel-header {\n    background-color: #F1F1F1 !important;\n    border-top: 1px solid #8AA8C0 !important;\n    border-bottom: 1px solid #8AA8C0 !important;\n    padding-left: 15px !important; }\n    .container mat-expansion-panel-header mat-panel-title {\n      color: #395D73 !important;\n      font-weight: bold !important;\n      font-size: 12px !important; }\n    .container mat-expansion-panel-header:hover {\n      background-color: #F1F1F1 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/parameter-editor/parameter-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParameterEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__ = __webpack_require__("../../../../../src/app/base-classes/port/PortModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ParameterEditorComponent = class ParameterEditorComponent extends __WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__["a" /* Viewer */] {
    constructor(injector) {
        super(injector, "parameter-editor");
        this.isVisible = false;
        // shift to iport
        this.inputPortOpts = [
            __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].Input //, 
            // InputPortTypes.ColorPicker, 
            // InputPortTypes.FilePicker, 
            // InputPortTypes.Dropdown
        ];
        this.outputPortOpts = [
            __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["d" /* OutputPortTypes */].Three,
            __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["d" /* OutputPortTypes */].Text,
            __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["d" /* OutputPortTypes */].Code,
            __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["d" /* OutputPortTypes */].Console
        ];
    }
    reset() {
        this._node = undefined;
        this._inputs = undefined;
        this._outputs = undefined;
        this.isVisible = false;
    }
    // addPort(nodeIndex: number, type: string): void{
    //   // add port 
    //   if(type == "in"){
    //       this._node.addInput();
    //   }
    //   else if(type == "out"){
    //       this._node.addOutput();
    //   }
    //   else{
    //     throw Error("Unknown Port Type");
    //   }  
    //   this.flowchartService.update();
    // }
    deletePort(event, type, portIndex) {
        event.stopPropagation();
        this.flowchartService.deletePort(type, portIndex);
    }
    updatePortName($event, port) {
        let name = $event.srcElement.innerText;
        // check for validity
        name = name.replace(/[^\w]/gi, '');
        if (name.trim().length > 0) {
            // put a timeout on this update or something similar to solve jumpiness
            port.setName(name);
            this.flowchartService.update();
        }
    }
    updateType(type, port) {
        port.setType(type);
    }
    updateDefaultValue($event, port) {
        let value = $event.srcElement.innerText;
        if (value.trim().length > 0) {
            port.setDefaultValue(value);
            // put a timeout on this update or something similar to solve jumpiness
            this.flowchartService.update();
        }
    }
    getInputTypeName(type) {
        if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].ColorPicker) {
            return "Color";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].Input) {
            return "Simple Input";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].Dropdown) {
            return "Dropdown";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].FilePicker) {
            return "File";
        }
        else {
            return "Not Identifiable";
        }
    }
    getOutputTypeName(type) {
        if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["d" /* OutputPortTypes */].Three) {
            return "Geometry";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["d" /* OutputPortTypes */].Text) {
            return "Text Viewer";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["d" /* OutputPortTypes */].Code) {
            return "Code Viewer";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["d" /* OutputPortTypes */].Console) {
            return "Console";
        }
        else {
            return "Not Identifiable";
        }
    }
    //
    //	this update runs when there is a message from other viewers that something changed; 
    //  beware of updating flowchart here - it will go into an unending loop :/
    //
    update() {
        this._node = this.flowchartService.getSelectedNode();
        if (this._node !== undefined) {
            this.isVisible = true;
            this._inputs = this._node.getInputs();
            this._outputs = this._node.getOutputs();
            this.isVisible = true;
        }
        else {
            this.isVisible = false;
        }
    }
};
ParameterEditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-parameter-editor',
        template: __webpack_require__("../../../../../src/app/ui-components/editors/parameter-editor/parameter-editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/editors/parameter-editor/parameter-editor.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
], ParameterEditorComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/editors/procedure-editor/procedure-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer\">\r\n\t<mat-accordion>\r\n\t\t<mat-expansion-panel [expanded]=\"true\">\r\n\t\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t\t  Procedure ({{_procedureArr.length}})\r\n\t\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t\t<mat-panel-description>\r\n\t\t\t\t\t\t  <!-- This is a summary of the content -->\r\n\t\t\t\t\t\t</mat-panel-description>\r\n\t\t\t\t\t</mat-expansion-panel-header>\r\n\r\n\r\n\t\t\t\t\t<div class=\"tree\">    \r\n\r\n\t\t\t\t\t\t<button id=\"expand\" style=\"display: none;\" (click)=\"tree.treeModel.expandAll()\">Ex</button>   \r\n\r\n\t\t\t\t\t\t<tree-root #tree \t\r\n\t\t\t\t\t\t\t\t\t[nodes]='_procedureArr' \r\n\t\t\t\t\t\t\t\t\t[options]='_tree_options'  \r\n\t\t\t\t\t\t\t\t\t(moveNode)=\"onMoveNode($event)\">\r\n\t\t\t\t\t\t\t\t  <ng-template #treeNodeTemplate \r\n\t\t\t\t\t\t\t\t  \t\tlet-prod \r\n\t\t\t\t\t\t\t\t  \t\tlet-index=\"index\" \r\n\t\t\t\t\t\t\t\t  \t\tclass=\"tree-node-wrapper\">\r\n\t\t\t\t\t\t\t\t  \t\t<div class = \"full-container\" (click)=\"focus($event, prod)\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class = \"seg3\" *ngIf=\"prod.data.getType() != 'Else' && prod.data.getType() != 'If'\">\r\n\t\t\t\t\t    \t\t\t\t\t   \t<button mat-button \r\n\t\t\t\t\t\t\t\t\t\t\t\t    *ngIf=\"prod.data.getType() =='Action'\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"openHelp($event, prod)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon>help_outline</mat-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\r\n\t\t\t\t\t\t    \t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  \t\t\t<div class = \"seg1\" \r\n\t\t\t\t\t\t\t\t  \t\t\t\t[class.error]=\"prod.data.hasError\" \r\n\t\t\t\t\t\t\t\t  \t\t\t\t[class.print]=\"prod.data.printToConsole()\"\r\n\t\t\t\t\t\t\t\t  \t\t\t\t[class.disabled]=\"prod.data.isDisabled()\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- template for data -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"prod.data.getType() == 'Data'\"> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='procedure-item'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input matInput class=\"tree-input\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"prod.data.getLeftComponent().expression\" #ctrl=\"ngModel\" required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"updateProcedure($event, prod, 'left')\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <input width=50 class=\"tree-input\" [(ngModel)]=\"prod.data.getLeftComponent().expression\" #ctrl=\"ngModel\" required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"updateProcedure($event, prod, 'left')\"> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"equal\">=</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input matInput class=\"tree-input\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"prod.data.getRightComponent().expression\" #ctrl=\"ngModel\" required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"updateProcedure($event, prod, 'right')\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <input width=50 class=\"tree-input\" [(ngModel)]=\"prod.data.getRightComponent().expression\" #ctrl=\"ngModel\" required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"updateProcedure($event, prod, 'right')\"> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"prod.data.getType() == 'IfElse'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='procedure-item'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>if-else</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"prod.data.getType() == 'If'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='procedure-item'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t <span>if</span> ( <input matInput class=\"tree-input\"  [(ngModel)]=\"prod.data.getLeftComponent().expression\" #ctrl=\"ngModel\" required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"updateProcedure($event, prod, 'left')\"> )\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"prod.data.getType() == 'Else'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='procedure-item'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t <span>else</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"prod.data.getType() == 'For Loop'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='procedure-item'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t <span>for (</span> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <input matInput class=\"tree-input\"  [(ngModel)]=\"prod.data.getLeftComponent().expression\" #ctrl=\"ngModel\" required (change)=\"updateProcedure($event, prod, 'left')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t <span>in</span>  \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <input matInput class=\"tree-input\" [(ngModel)]=\"prod.data.getRightComponent().expression\" #ctrl=\"ngModel\" required (change)=\"updateProcedure($event, prod, 'right')\"> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t  )\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"prod.data.getType() == 'Action'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='procedure-item'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input matInput class=\"tree-input\" [(ngModel)]=\"prod.data.getLeftComponent().expression\" #ctrl=\"ngModel\" required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"updateProcedure($event, prod, 'left')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"equal\">=</span>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"module\">{{prod.data.getRightComponent().module}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t.\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <span class=\"function\">{{prod.data.getRightComponent().fn_name}}</span> \r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t( <span *ngIf=\"prod.data.getRightComponent().params.length>0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"param-container\" \t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let p of prod.data.getRightComponent().params; let i=index\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input matInput class=\"tree-input\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t [(ngModel)]=\"prod.data.getRightComponent().params[i].value\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t #ctrl=\"ngModel\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t (change)=\"updateProcedure($event, prod, 'right')\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf='i<prod.data.getRightComponent().params.length-1'>,</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <input width=50 class=\"tree-input\" [(ngModel)]=\"p\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t placeholder=\"Input something here\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t #ctrl=\"ngModel\" required \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t (change)=\"updateProcedure($event, prod, 'right')\"> --> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\t)\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class = \"divider\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class = \"seg2\" *ngIf=\"prod.data.getType() != 'Else' && prod.data.getType() != 'If'\">\r\n\t\t\t\t\t\t\t\t\t\t\t   <button mat-button\r\n\t\t\t\t\t\t\t\t\t\t\t   \t\t(click)=\"togglePrint(prod.data)\" \r\n\t\t\t\t\t\t\t\t\t\t\t   \t\tmatTooltip=\"Print value to console\"\r\n\t\t\t\t\t\t\t\t\t\t\t   \t\t*ngIf=\"prod.data.getType() =='Action' || prod.data.getType() =='Data'\">\r\n\t\t\t\t    \t\t\t\t\t    \t\t<mat-icon>print</mat-icon>\r\n\t\t\t\t\t    \t\t\t\t\t    </button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t <button mat-button (click)=\"toggle(prod.data)\" matTooltip=\"Enable/Disable Line\">\r\n\t\t\t\t    \t\t\t\t\t    \t\t<mat-icon>check_circle</mat-icon>\r\n\t\t\t\t\t    \t\t\t\t\t    </button>\r\n\t\t\t\t\t\t\t\t\t\t        <button mat-button (click)=\"deleteProcedure(prod)\" matTooltip=\"Delete Line\">\r\n\t\t\t\t    \t\t\t\t\t    \t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t    \t\t\t\t\t    </button>\r\n\t\t\t\t\t    \t\t\t\t\t    <!-- <button (click)=\"disableProcedure(prod, $event)\">Disable</button>\r\n\t\t\t\t\t    \t\t\t\t\t    <button (click)=\"go($event)\">Copy</button> -->\r\n\t\t\t\t\t\t    \t\t\t\t</div>\r\n\t\t\t\t\t\t    \t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </ng-template>\r\n\t\t\t\t\t\t</tree-root> \r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t</mat-expansion-panel>\r\n\t</mat-accordion>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/procedure-editor/procedure-editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      width: 250px;\n      border-right: 4px solid #A9BCEC;\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.procedure-item span.module {\n  color: #F3A32A !important;\n  font-weight: bold; }\n\n.procedure-item span.function {\n  color: #7B52AB !important;\n  font-weight: bold; }\n\n.procedure-item span.equal {\n  text-align: center;\n  width: 15px; }\n\n.seg1.disabled {\n  opacity: 0.4; }\n\n.seg1.print {\n  background-color: #A5F3A5; }\n\nmat-expansion-panel-header {\n  background-color: #F1F1F1 !important;\n  border-top: 1px solid #8AA8C0 !important;\n  border-bottom: 1px solid #8AA8C0 !important;\n  padding-left: 15px !important; }\n  mat-expansion-panel-header mat-panel-title {\n    color: #395D73 !important;\n    font-weight: bold !important;\n    font-size: 12px !important; }\n  mat-expansion-panel-header:hover {\n    background-color: #F1F1F1 !important; }\n\n/*\r\n.viewer{\r\n\t@extend .viewer;\r\n\t.container{\r\n\t\tposition: relative;\r\n\r\n\t\tpadding: 15px; \r\n\r\n\t\tdisplay: flex; \r\n\t\tflex-direction: column;\r\n\r\n\t\t.tree{\r\n\t\t\tmargin-top: 20px; \r\n\t\t\tmin-height: 150px;\r\n\t\t\theight: 100%;\r\n\t\t\twidth: 100%; \r\n\t\t}\r\n\r\n\t\t.tree-node-wrapper{\r\n\t\t\tinput.tree-input{\r\n\t\t\t\twidth: auto;\r\n\t\t\t\tdisplay: inline-block;\r\n\t\t\t\ttext-align: center;\r\n\t\t\t}\r\n\r\n\t\t\t/*.param-container{\r\n\t\t\t\tdisplay: inline-block;\r\n\t\t\t\tbackground-color: $color3;\r\n\t\t\t}*/\n/*\r\n\t\t\t.procedure-item{\r\n\t\t\t\tmargin: 3px; \r\n\t\t\t\tpadding: 3px;\r\n\r\n\t\t\t\tfont-size: 12px; \r\n\t\t\t\tline-height: 14px;\r\n\t\t\t\t\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\tborder: 1px solid $color2;\r\n\t\t\t\tbackground-color: $color2;\r\n\t\t\t\tcursor: move;\r\n\r\n\t\t\t\t.btn-group{\r\n\t\t\t\t\tdisplay: none;\r\n\t\t\t\t\tmargin: 5px 0px;\r\n\t\t\t\t\tdisplay: flex; \r\n\t\t\t\t\tflex-direction: row; \r\n\t\t\t\t\tjustify-content: space-between;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}*/\n/*.toolbox{\r\n\t\t\tmax-height: 600px;\r\n\t\t\tbackground-color:$color1;\r\n\t\t\t.fn_name{\r\n\t\t\t\tfont-size: 12px;\r\n\t\t\t}\r\n\t\t}\r\n\t}*/\n/* \t.container{\r\n\tposition: relative;\r\n\r\n\t.procedure{\r\n\r\n\t\tpadding: 4px; \r\n\t\twidth: 100%;\r\n\r\n\t\t[contenteditable=\"true\"]:active,\r\n\t\t[contenteditable=\"true\"]:focus{\r\n\t\tborder:none;\r\n\t\toutline:none;\r\n\t\t}\r\n\r\n\t\t[contenteditable=\"true\"]{\r\n\t\t\tcolor: blue;\r\n\t\t\tborder-bottom: 1px dashed blue;\r\n\t\t}\r\n\r\n\r\n\t\t&.disabled{\r\n\t\t\tbackground-color: red;\r\n\t\t}\r\n\r\n\t}\r\n\r\n\t.btn-container{\r\n\t\tposition: absolute;\r\n\t\tbottom: 0px; \r\n\t\tleft: 30%;\r\n\r\n\t\tbutton{\r\n\t\t\theight: 30px; \r\n\t\t\twidth: 30px;\r\n\t\t}\r\n\t}\r\n\r\n}\r\n\r\ninput.tree-input{\r\n\tbackground-color: transparent;\r\n\twidth: auto;\r\n\tborder: 0px; \r\n\theight: 18px; \r\n\tfont-size: 14px;\r\n\tpadding: 5px; \r\n\tdisplay: inline;\r\n\tfont-family: sans-serif;\r\n\tline-height: 18px;\r\n\ttext-align: center;\r\n\tvertical-align: middle;\r\n\tborder-bottom: 1px dashed blue;\r\n} \t\r\n\r\n}\r\n\r\n\r\n/* .dialog{\r\n\tposition: absolute;\r\n\ttop: 100px;\r\n\tleft: 0px;\r\n\tborder: 1px solid black;\r\n\tpadding: 10px;\r\n\tbackground-color: white;\r\n\tz-index: 14;\r\n\tfont-size: 12px;\r\n\r\n\t.close{\r\n\t\tcursor: pointer;\r\n\t}\r\n\r\n\t.toolbox{\r\n\t\t.fn_container{\r\n\t\t\t.fn_name{\r\n\t\t\t\t\r\n\t\t\t\tcursor: pointer;\r\n\t\t\t\t\r\n\t\t\t\t&:hover{\r\n\t\t\t\t\tbackground-color: gray;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/editors/procedure-editor/procedure-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcedureEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__ = __webpack_require__("../../../../../src/app/base-classes/procedure/ProcedureModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_services_layout_service__ = __webpack_require__("../../../../../src/app/global-services/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm2015/material.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let ProcedureEditorComponent = class ProcedureEditorComponent extends __WEBPACK_IMPORTED_MODULE_2__base_classes_viz_Viewer__["a" /* Viewer */] {
    constructor(injector, dialog, layoutService) {
        super(injector, "procedure-editor");
        this.dialog = dialog;
        this.layoutService = layoutService;
        this._procedureArr = [];
        //_treeNodes = [];
        this._tree_options = {
            allowDrag: function (element) {
                if (element.data._type == __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].IfControl || element.data._type == __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].ElseControl) {
                    return false;
                }
                else {
                    return true;
                }
            },
            allowDrop: (element, { parent, index }) => {
                // return true / false based on element, to.parent, to.index. e.g.
                return (parent.data._type !== __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].IfElseControl
                    && parent.data._type !== __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Data
                    && parent.data._type !== __WEBPACK_IMPORTED_MODULE_1__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Action); /*(parent.data._type == ProcedureTypes.IfControl)
        || parent.data._type == ProcedureTypes.ElseControl
        || parent.data._type == ProcedureTypes.ForLoopControl));*/
            }
        };
    }
    getString(type) {
        return type.toString();
    }
    openHelp($event, prod) {
        $event.stopPropagation();
        if (prod.data._type == "Action") {
            let fn = prod.data.getRightComponent().expression.split(".");
            fn = { module: fn[0], name: fn[1] };
            this.layoutService.showHelp(fn);
        }
    }
    reset() {
        this._procedureArr = [];
        this._node = undefined;
        //this._treeNodes = [];
    }
    update(message) {
        if (message == "procedure") {
            this.tree.treeModel.update();
        }
        else {
            this._node = this.flowchartService.getSelectedNode();
            this._procedureArr = this._node.getProcedure();
            //this.updateProcedureTree();
        }
    }
    ngOnInit() {
        this._node = this.flowchartService.getSelectedNode();
        this._procedureArr = this._node.getProcedure();
        //this._treeNodes = this._procedureArr; 
        this.tree.treeModel.update();
    }
    ngAfterViewInit() {
        this.tree.treeModel.expandAll();
    }
    toggle(prod) {
        if (prod.isDisabled()) {
            prod.enable();
        }
        else {
            prod.disable();
        }
    }
    togglePrint(prod) {
        if (prod.printToConsole()) {
            prod.disablePrint();
        }
        else {
            prod.enablePrint();
        }
    }
    focus($event, prod) {
        this._focusedProd = prod;
        this.flowchartService.selectProcedure(prod.data);
    }
    //
    //
    //
    onMoveNode($event) {
        // get previous parent
        let moved_procedure = $event.node;
        let to_procedure = $event.to.parent;
        let moved_position = $event.to.index;
        moved_procedure.setParent(to_procedure);
        // case: no parent and parent added
        // case: no parent and no parent
        // case: parent and different parent
        // case: parent and same parent
        // case: parent and no parent
        // if( moved_procedure.getParent() === to_procedure ){
        // 	if(parent === undefined){
        // 		this._node.deleteProcedure(moved_procedure);
        // 		this._node.addProcedureAtPosition(moved_procedure, moved_position);
        // 	}
        // 	else{
        // 		to_procedure.deleteChild(moved_procedure);
        // 		to_procedure.addChildAtPosition(moved_procedure, moved_position);
        // 	}
        // }
        // else{
        // 	if(parent === undefined){
        // 		this._node.deleteProcedure(moved_procedure);
        // 	}
        // 	else{
        // 		parent.deleteChild(moved_procedure);
        // 	}
        // 	if(to_procedure === undefined){
        // 		this._node.addProcedureAtPosition(moved_procedure, moved_position)
        // 	}
        // 	else{
        // 		to_procedure.addChildAtPosition(moved_procedure, moved_position);
        // 	}
        // }
        //this.flowchartService.update();
    }
    // converts the procedure into a tree item
    // getTreeItem(prod : IProcedure, index: number): Object{
    // 	let self = this;
    // 	let procedure_type :ProcedureTypes = prod.getType();
    // 	let treeItem = { 
    // 		index: index,
    // 		name: procedure_type, 
    // 		expanded: true,
    // 		children: [], 
    // 		leftExpression: "undefined", 
    // 		rightExpression: "undefined",
    // 		model: prod
    // 	};
    // 	//let dataObj = { id: Math.random() , name: data.getTitle(), type: procedure_type, model: data } ; 
    // 	// ProcedureType.Data
    // 	if(procedure_type === ProcedureTypes.Data){
    // 		treeItem["leftExpression"] = prod.getLeftComponent().expression;
    // 		treeItem["rightExpression"] = prod.getRightComponent().expression;
    // 	}
    // 	else if(procedure_type === ProcedureTypes.Action ){
    // 		treeItem["leftExpression"] = prod.getLeftComponent().expression;
    // 		treeItem["module"] = prod.getRightComponent().module;
    // 		treeItem["function"] = prod.getRightComponent().fn_name;
    // 		treeItem["params"] = prod.getRightComponent().params;
    // 	}
    // 	else if(prod.hasChildren() == true){
    // 		treeItem["children"] = prod.getChildren().map(function(node, id){
    // 			return self.getTreeItem(node, id) 
    // 		})
    // 		if(procedure_type == ProcedureTypes.ForLoopControl){
    // 			treeItem["leftExpression"] = prod.getLeftComponent().expression;
    // 			treeItem["rightExpression"] = prod.getRightComponent().expression;
    // 		}
    // 		else if(procedure_type == ProcedureTypes.IfControl){
    // 			treeItem["leftExpression"] = prod.getLeftComponent().expression;
    // 		}
    // 	}
    // 	else{
    // 		throw Error("unknown procedure type");
    // 	}
    // 	return treeItem;
    // }
    // updateProcedureTree(){
    // 	let self = this;
    // 	this._treeNodes = this._procedureArr.map(function(prod, index){
    // 		return self.getTreeItem(prod, index);
    // 	})
    // }
    updateProcedure($event, prod, property) {
        if (property == 'left') {
            prod.data.getLeftComponent().expression =
                prod.data.getLeftComponent().expression.replace(/[^\w\[\]]/gi, '');
        }
        // let procedure: IProcedure = prod.data;
        // if(property == "left"){	
        // 	let comp = procedure.getLeftComponent(); 
        // 	//comp.expression = prod.data.leftExpression;
        // 	//procedure.setLeftComponent(comp);
        // }
        // else if(property == "right"){
        // 	let comp = procedure.getRightComponent(); 
        // 	comp.expression = prod.data.rightExpression;
        // 	comp.params = prod.data.params;
        // 	procedure.setRightComponent(comp);
        // }
        // else{
        // 	throw Error("Invalid procedure update");
        // }
        //this.tree.treeModel.update();
        /// check if valid procedure was generated
        // this.flowchartService.updateProcedure(prod.data);
    }
    deleteProcedure(node) {
        let parent = node.parent;
        if (parent.data.virtual) {
            this._node.deleteProcedure(node.data);
            this._procedureArr = this._node.getProcedure();
        }
        else {
            parent.data.deleteChild(node.data);
            this.tree.treeModel.update();
        }
        // let prod: IProcedure = node.data;
        // if(prod.getParent()){
        // 	prod.getParent().deleteChild(prod);
        // 	this.tree.treeModel.update();
        // }
        // else{
        // }
        // this.update("procedure");
        //this.flowchartService.update();
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('tree'),
    __metadata("design:type", Object)
], ProcedureEditorComponent.prototype, "tree", void 0);
ProcedureEditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-procedure-editor',
        template: __webpack_require__("../../../../../src/app/ui-components/editors/procedure-editor/procedure-editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/editors/procedure-editor/procedure-editor.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__global_services_layout_service__["a" /* LayoutService */]])
], ProcedureEditorComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/layout/panel/panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n\t<div class=\"title\">{{heading}}</div>\n\t<div class=\"data\"></div>\n\t<div class=\"btn-group\">\n\t\t<div (click)=\"maximize()\">\n\t\t\t<span matTooltip=\"Expand\">\n\t\t\t\t<mat-icon [class.disabled]=\"panel_id == 'main'\">aspect_ratio</mat-icon>\n\t\t\t</span>\n\t\t</div>\n\t\t<!-- <div (click)=\"minimize()\">\n\t\t\t<span matTooltip=\"Minimize\">\n\t\t\t\t<mat-icon  [class.disabled]=\"true\" >remove</mat-icon>\n\t\t\t</span>\n\t\t</div>\n\t\t<div (click)=\"restore()\">\n\t\t\t<span matTooltip=\"Restore\">\n\t\t\t\t<mat-icon  [class.disabled]=\"true\">open_in_new</mat-icon>\n\t\t\t</span>\n\t\t</div> -->\n\t</div>\n</div>\n\n\n<app-viewer-container *ngIf='heading === EV.Viewer'></app-viewer-container>        \n<app-flowchart-viewer *ngIf='heading === EV.Flowchart'></app-flowchart-viewer>\n<app-editor  *ngIf='heading === EV.Editor'></app-editor>\n<app-parameter-viewer  *ngIf='heading === EV.Parameter'></app-parameter-viewer>\n\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/layout/panel/panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      width: 250px;\n      border-right: 4px solid #A9BCEC;\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  border-bottom: 1px solid #8AA8C0;\n  background-color: #395D73;\n  color: white;\n  font-weight: bold;\n  height: 30px;\n  line-height: 30px;\n  font-size: 14px;\n  padding: 0px 15px; }\n  .header .btn-group {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n    .header .btn-group span {\n      color: #F1F1F1; }\n      .header .btn-group span mat-icon {\n        font-size: 14px;\n        cursor: pointer; }\n        .header .btn-group span mat-icon.disabled {\n          color: #8AA8C0 !important; }\n        .header .btn-group span mat-icon:hover {\n          color: #F0BFA0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/layout/panel/panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_layout_service__ = __webpack_require__("../../../../../src/app/global-services/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewers_EViewer__ = __webpack_require__("../../../../../src/app/ui-components/viewers/EViewer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let PanelComponent = class PanelComponent {
    constructor(layoutService) {
        this.layoutService = layoutService;
        this.EV = __WEBPACK_IMPORTED_MODULE_2__viewers_EViewer__["a" /* EViewer */];
        this._subscription = this.layoutService.getMessage().subscribe(message => {
            this.refresh();
        });
        this.refresh();
    }
    refresh() {
        this.layout = this.layoutService.getAssets();
        this.refreshContent();
    }
    refreshContent() {
        if (this.panel_id == "main") {
            this.heading = this.layout.content.main;
        }
        else {
            this.heading = this.layout.content.side[this.panel_id];
        }
    }
    ngOnInit() {
        this.refreshContent();
    }
    // shifts component to main panel
    maximize() {
        this.layoutService.maximize(this.panel_id);
    }
    // reduces size of component
    minimize() {
        this.layoutService.minimize(this.panel_id);
    }
    // refreshes size of component
    restore() {
        this.layoutService.restore(this.panel_id);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
    __metadata("design:type", String)
], PanelComponent.prototype, "panel_id", void 0);
PanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-panel',
        template: __webpack_require__("../../../../../src/app/ui-components/layout/panel/panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/layout/panel/panel.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__global_services_layout_service__["a" /* LayoutService */]])
], PanelComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/EViewer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EViewer; });
var EViewer;
(function (EViewer) {
    EViewer["Viewer"] = "Output Viewer";
    EViewer["Flowchart"] = "Flowchart";
    EViewer["Editor"] = "Procedure Editor";
    EViewer["Parameter"] = "Parameter Viewer";
})(EViewer || (EViewer = {}));


/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/code-viewer/code-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer\">\n\t<div class=\"ace-editor\" ace-editor [(text)]=\"code\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/code-viewer/code-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      width: 250px;\n      border-right: 4px solid #A9BCEC;\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.viewer {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box !important;\n  padding-bottom: 60px !important; }\n  .viewer .ace-editor {\n    height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/code-viewer/code-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_beautify__ = __webpack_require__("../../../../js-beautify/js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_beautify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_js_beautify__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let CodeViewerComponent = class CodeViewerComponent extends __WEBPACK_IMPORTED_MODULE_1__base_classes_viz_Viewer__["a" /* Viewer */] {
    constructor(injector) {
        super(injector, "Code viewer", "Displays the code associated with flowchart");
        this.panelOpenState = false;
    }
    update() {
        this.code = __WEBPACK_IMPORTED_MODULE_2_js_beautify__["js_beautify"](this.flowchartService.getCode());
    }
    reset() {
        this.code = "";
    }
};
CodeViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-code-viewer',
        template: __webpack_require__("../../../../../src/app/ui-components/viewers/code-viewer/code-viewer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/viewers/code-viewer/code-viewer.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
], CodeViewerComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/geometry-viewer/geometry-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer\">\r\n\t<div class=\"container\">\r\n\t\t<gs-viewer [data]=\"gs_dummy_data\"></gs-viewer>\r\n\t\t<!-- <div id=\"app-geometry-viewer\"></div> -->\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/geometry-viewer/geometry-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      width: 250px;\n      border-right: 4px solid #A9BCEC;\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.viewer {\n  height: 100%;\n  width: 100%; }\n  .viewer .container {\n    height: 100%;\n    width: 100%; }\n    .viewer .container #app-geometry-viewer {\n      height: 100%;\n      width: 100%; }\n      .viewer .container #app-geometry-viewer canvas {\n        height: 100% !important;\n        width: 100% !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/geometry-viewer/geometry-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeometryViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let GeometryViewerComponent = class GeometryViewerComponent extends __WEBPACK_IMPORTED_MODULE_1__base_classes_viz_Viewer__["a" /* Viewer */] {
    constructor(injector) {
        super(injector, "Geometry Viewer", "Displayed geometry with each node;");
    }
    reset() {
    }
    ngOnInit() {
        this.update();
    }
    update() {
        try {
            this._port = this.flowchartService.getSelectedPort();
            this.gs_dummy_data = this._port.getValue();
        }
        catch (ex) {
            this.gs_dummy_data = undefined;
        }
    }
};
GeometryViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-geometry-viewer',
        template: __webpack_require__("../../../../../src/app/ui-components/viewers/geometry-viewer/geometry-viewer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/viewers/geometry-viewer/geometry-viewer.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
], GeometryViewerComponent);

// this.gs_dummy_data =  {
//               attribs: null,
//               geom: {
//                   objs: [
//                       [
//                           [
//                               [0, 1, 2, 3, -1],
//                           ],
//                           [
//                               [1, 5, 4, 0, -1],
//                               [2, 6, 5, 1, -1],
//                               [3, 7, 6, 2, -1],
//                               [0, 4, 7, 3, -1],
//                               [5, 6, 7, 4, -1],
//                           ],
//                           [200],
//                       ],
//                   ],
//                   points: [
//                       [0, 1, 2, 3, 4, 5, 6, 7],
//                       [
//                           [-0.7, -1.0, 0.0],
//                           [0.2, -1.0, 0.0],
//                           [0.2, -1.0, 3.0],
//                           [-0.7, -1.0, 3.0],
//                           [-0.7, 1.0, 0.0],
//                           [0.2, 1.0, 0.0],
//                           [0.2, 1.0, 3.0],
//                           [-0.7, 1.0, 3.0],
//                       ],
//                   ],
//               },
//               groups: [
//                   {
//                       name: "building_obj",
//                       objs: [0],
//                       props: [["descr", "The building object, that has wire and faces."]],
//                   },
//                   // groups with topo
//                   {
//                       name: "building_all_faces",
//                       topos: [
//                           [[0, [0, 1, 2, 3, 4]]],
//                           [],
//                           [],
//                           [],
//                           [],
//                           [],
//                       ],
//                   },
//                   {
//                       name: "walls",
//                       parent: "building_obj",
//                       props: [["descr", "Three walls."], ["material", "brick"], ["thickness", 300]],
//                       topos: [
//                           [[0, [1, 3, 4]]],
//                           [],
//                           [],
//                           [],
//                           [],
//                           [],
//                       ],
//                   },
//                   {
//                       name: "floor",
//                       parent: "building_obj",
//                       topos: [
//                           [[0, [0]]],
//                           [],
//                           [],
//                           [],
//                           [],
//                           [],
//                       ],
//                   },
//                   {
//                       name: "roof",
//                       parent: "building_obj",
//                       topos: [
//                           [[0, [2]]],
//                           [],
//                           [],
//                           [],
//                           [],
//                           [],
//                       ],
//                   },
//                   {
//                       name: "winodw_openings",
//                       parent: "building_obj",
//                       topos: [
//                           [],
//                           [[0, [0]]],
//                           [],
//                           [],
//                           [],
//                           [],
//                       ],
//                   },
//                   {
//                       name: "vertical_edges_of_faces",
//                       parent: "building_obj",
//                       topos: [
//                           [
//                               [0,
//                                   [
//                                       [1, [1, 3]],
//                                       [3, [1, 3]],
//                                       [4, [0, 2]],
//                                   ],
//                               ],
//                           ],
//                           [],
//                           [],
//                           [],
//                           [],
//                           [],
//                       ],
//                   },
//                   {
//                       name: "vertices_on_ground",
//                       parent: "building_obj",
//                       topos: [
//                           [
//                               [0,
//                                   [
//                                       [0, [0, 1, 2, 3]],
//                                       [1, [2, 3]],
//                                       [3, [0, 1]],
//                                       [4, [0, 3]],
//                                   ],
//                               ],
//                           ],
//                           [
//                               [0,
//                                   [
//                                       [0, [0, 1]],
//                                   ],
//                               ],
//                           ],
//                           [],
//                           [],
//                           [],
//                           [],
//                       ],
//                   },
//                   {
//                       name: "points_on_ground",
//                       parent: "building_obj",
//                       points: [0, 1, 4, 5],
//                   },
//               ],
//               metadata: {
//                   crs: { epsg: 3857 },
//                   filetype: "gs-json",
//                   location: "+0-0",
//                   version: "0.1.1",
//               },
//               skins: null,
//           }; 


/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/help-viewer/help-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer\">\r\n\t\r\n\t<h1> Welcome to Mobius! </h1>\r\n\t<!-- <div class=\"iframe-container\">\r\n\t\t<iframe [src]=\"_url\" frameborder=\"0\"></iframe>\r\n\t</div> -->\r\n\t<mat-accordion>\r\n\t \t<mat-expansion-panel *ngFor=\"let m of _helpMods\">\r\n\t    \t<mat-expansion-panel-header>\r\n\t    \t\t<mat-panel-title>\r\n\t\t\t      {{ getModName(m.name) }} \r\n\t\t\t    </mat-panel-title>\r\n\t    \t</mat-expansion-panel-header>\r\n\r\n\t\t\t<mat-list style=\"max-height: 500px; overflow: auto;\">\r\n\t\t\t\t<h3 mat-subheader>{{m.comment.shortText}}</h3>\r\n\r\n\t\t\t\t<h3 mat-subheader>Functions</h3>\r\n\t\t\t \t<mat-list-item *ngFor=\"let fn of m.children\">\r\n\t\t\t \t\t<div class = \"content\">\r\n\t\t\t\t \t\t<h4 mat-line>{{fn.name}}</h4>\r\n\t    \t\t\t\t<p mat-line>{{fn.signatures[0].comment.shortText}}</p>\r\n\t    \t\t\t\t<p mat-line>{{fn.signatures[0].comment.returns}}</p>\r\n\t    \t\t\t\t<p mat-line><a href=\"https://phtj.github.io/gs-modelling/docs/modules/{{getUrl(m.name, fn.name)}}\" target=\"_blank\">More</a></p>\r\n    \t\t\t\t</div>\r\n\t\t\t \t</mat-list-item>\r\n\t\t\t \t<mat-divider></mat-divider>\r\n\t\t\t</mat-list>\r\n\r\n\t \t</mat-expansion-panel>\r\n\r\n\t</mat-accordion>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/help-viewer/help-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      width: 250px;\n      border-right: 4px solid #A9BCEC;\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.viewer {\n  padding: 15px;\n  height: 100%;\n  box-sizing: border-box;\n  padding-bottom: 30px;\n  overflow: auto; }\n  .viewer h1 {\n    padding-left: 15px;\n    padding-bottom: 5px;\n    color: #395D73;\n    display: block;\n    border-bottom: 1px solid #F1F1F1; }\n\nmat-expansion-panel {\n  margin: 0 !important;\n  overflow: hidden !important; }\n  mat-expansion-panel mat-expansion-panel-header mat-panel-title {\n    color: #F3A32A !important; }\n\nmat-panel-description {\n  display: none; }\n\n.content {\n  width: 100%; }\n\n/*\r\n.mat-list-item-content{\r\n\tpadding: 0;\r\n\tborder: 0;\r\n}\r\n\r\n.mat-line{\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tline-height: $fsize1;\r\n}*/\nmat-list .mat-subheader {\n  display: none;\n  font-size: 15px;\n  color: #395D73;\n  margin: 0;\n  padding: 0; }\n\nmat-list mat-list-item h4 {\n  color: #7B52AB;\n  font-size: 15px;\n  border-bottom: 1px solid #8AA8C0;\n  font-weight: bold;\n  display: block; }\n\nmat-list mat-list-item p {\n  font-size: 12px;\n  color: #395D73; }\n  mat-list mat-list-item p a {\n    color: #395D73; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/help-viewer/help-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_layout_service__ = __webpack_require__("../../../../../src/app/global-services/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_services_flowchart_service__ = __webpack_require__("../../../../../src/app/global-services/flowchart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_gs_modelling_docs_json_gs_modelling_json__ = __webpack_require__("../../../../gs-modelling/docs_json/gs-modelling.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_gs_modelling_docs_json_gs_modelling_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__node_modules_gs_modelling_docs_json_gs_modelling_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let HelpViewerComponent = class HelpViewerComponent {
    //modules/_group_.html
    constructor(layoutService, sanitizer, flowchartService) {
        this.layoutService = layoutService;
        this.sanitizer = sanitizer;
        this.flowchartService = flowchartService;
        this.sanitizer = sanitizer;
        this._subscription = this.layoutService.getMessage().subscribe(message => {
            if (message.text.startsWith("Module: ")) {
                this.notify();
            }
        });
        let mods = this.flowchartService.getModules().map(function (m) {
            return m["_name"].toLowerCase();
        });
        this._helpMods = __WEBPACK_IMPORTED_MODULE_4__node_modules_gs_modelling_docs_json_gs_modelling_json___default.a.children.filter(function (child) {
            let mod_name = child.name.substring(1, child.name.length - 1);
            return mods.indexOf(mod_name) > -1;
        });
    }
    notify() {
        let url_segment = this.layoutService.getUrl();
        let url = 'https://phtj.github.io/gs-modelling/docs/' + url_segment;
        this._url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    getUrl(name, fn) {
        return "_" + name.substring(1, name.length - 1).toLowerCase() + "_.html#" + fn.toLowerCase();
    }
    getModName(name) {
        return name.substring(1, name.length - 1).toUpperCase();
    }
    ngOnInit() {
        this.notify();
    }
    ;
};
HelpViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-help-viewer',
        template: __webpack_require__("../../../../../src/app/ui-components/viewers/help-viewer/help-viewer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/viewers/help-viewer/help-viewer.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__global_services_layout_service__["a" /* LayoutService */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_2__global_services_flowchart_service__["a" /* FlowchartService */]])
], HelpViewerComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/module-viewer/module-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel class='viewer'>\n  \t<mat-expansion-panel-header>\n\t    <mat-panel-title class='header'>\n\t      <div class='header'>Modules</div>\n\t    </mat-panel-title>\n  \t</mat-expansion-panel-header>\n\t<div class='container'>\n\t\t<div *ngFor=\"let fn of functions\">\n\t\t\t<div class='function'>{{fn}}</div>\n\t\t</div>\n\t</div>\n</mat-expansion-panel>"

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/module-viewer/module-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      width: 250px;\n      border-right: 4px solid #A9BCEC;\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.viewer .function {\n  border-bottom: 1px solid gray;\n  padding: 5px;\n  margin: 0px 5px 0px 5px; }\n  .viewer .function:hover {\n    background-color: #BDBABA;\n    cursor: move; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/module-viewer/module-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ModuleViewerComponent = class ModuleViewerComponent {
    constructor(injector) {
        this.functions = [];
        /*this.module_service = injector.get(ModuleService);
        let modules = this.module_service.getModule("gis");
        let fn_names = Object.keys(Object.getPrototypeOf(modules)).filter(function(t){  return (t != "constructor"); });
        this.functions = this.functions.concat(fn_names); */
    }
    ;
};
ModuleViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-module-viewer',
        template: __webpack_require__("../../../../../src/app/ui-components/viewers/module-viewer/module-viewer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/viewers/module-viewer/module-viewer.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
], ModuleViewerComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/node-library/node-library.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"disabled\">Save Library</div>\r\n<div class=\"disabled\">Load Library</div>\r\n\r\n<div (click)=\"clearLibrary()\">\r\n\tClear Library\r\n</div>\r\n<br>\r\n<div class=\"node\" *ngFor=\"let n of _savedNodes; let i=index\"\r\n\t(click)=\"addNode($event, i)\">\r\n\t{{n._name}}\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/node-library/node-library.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      width: 250px;\n      border-right: 4px solid #A9BCEC;\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.node {\n  cursor: pointer; }\n  .node:hover {\n    color: white; }\n\n.disabled {\n  color: #8AA8C0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/node-library/node-library.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeLibraryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let NodeLibraryComponent = class NodeLibraryComponent extends __WEBPACK_IMPORTED_MODULE_1__base_classes_viz_Viewer__["a" /* Viewer */] {
    constructor(injector) {
        super(injector, "Node Library");
        this._savedNodes = this.flowchartService.getSavedNodes();
    }
    reset() {
        this._savedNodes = this.flowchartService.getSavedNodes();
    }
    update() {
        this._savedNodes = this.flowchartService.getSavedNodes();
    }
    addNode($event, type) {
        $event.stopPropagation();
        if (type == undefined) {
            this.flowchartService.addNode();
        }
        else {
            this.flowchartService.addNode(type);
        }
        this.update();
    }
    clearLibrary() {
        this.flowchartService.clearLibrary();
    }
    downloadLibrary() {
        // todo	
    }
    loadLibrary() {
        // todo
    }
};
NodeLibraryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-node-library',
        template: __webpack_require__("../../../../../src/app/ui-components/viewers/node-library/node-library.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/viewers/node-library/node-library.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
], NodeLibraryComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/parameter-viewer/parameter-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer\">\r\n\r\n\t<div class=\"container\">\r\n\r\n\t\t<div class=\"default\" *ngIf='_inputs == undefined || _inputs.length == 0'>\r\n\t\t\tThis node has no inputs\r\n\t\t</div>\r\n \r\n\t\t<div class='paramater-container' *ngFor=\"let inp of _inputs\" >\r\n\t\t\t\r\n\t\t\t<div class=\"info\">\r\n\t\t\t\t<div class='param'>\r\n\t\t\t\t\t<!--<span class='label'>Name</span>-->\r\n\t\t\t\t\t<span class='content'>{{ inp.getName() }}</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"value\">\r\n\t\t\t\t<form  class='content'>\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<textarea matInput \r\n\t\t\t\t\t\t\tplaceholder=\"Value\" \r\n\t\t\t\t\t\t\tmatTextareaAutosize \r\n\t\t\t\t\t\t\tmatAutosizeMinRows=\"1\"\r\n\t            \t\t\tmatAutosizeMaxRows=\"5\" \r\n\t            \t\t\t(change)=\"updateComputedValue($event, inp)\">\r\n\t            \t\t\t{{ getValue(inp) }}\r\n\t            \t\t</textarea>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</form>\r\n\t\t\t</div> \r\n\r\n\t\t</div>\r\n\r\n\t\t\t<!-- todo: disable if port is connected -->\r\n\t\t\t<!-- ui options based on type -->\r\n\t\t\t<!-- todo: -->\r\n\t</div>\r\n\t<button id=\"execute\" mat-raised-button color=\"accent\" (click)=\"executeFlowchart($event)\">Execute Flowchart</button>  \r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/parameter-viewer/parameter-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      width: 250px;\n      border-right: 4px solid #A9BCEC;\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.viewer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: no-wrap;\n      flex-wrap: no-wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  background-color: white;\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  padding-bottom: 30px;\n  /* \t.input{\r\n\tpadding: 0px 15px;\r\n\tborder-bottom: 1px solid gray;\r\n\r\n\t.row{\r\n\t\twidth: 100%; \r\n\r\n\t\t.label{\r\n\t\t\tdisplay: inline-block;\r\n\t\t\ttext-transform: uppercase;\r\n\t\t\tfont-size: 10px; \r\n\t\t\tcolor: gray; \r\n\t\t\twidth: 10%; \r\n\t\t\tmin-width: 50px;\r\n\t\t}\r\n\r\n\t\t.content{\r\n\t\t\twidth: 90%;\r\n\t\t\tmin-width: 50px;\r\n\r\n\r\n\t\t\t&.undefined{\r\n\t\t\t\tborder-bottom: 1px dashed blue;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    overflow: auto;\n    box-sizing: border-box;\n    height: auto;\n    padding-bottom: 36px; }\n    .viewer .container .paramater-container {\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n      height: auto;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: space-equally;\n          -ms-flex-pack: space-equally;\n              justify-content: space-equally;\n      font-size: 15px;\n      line-height: 18px;\n      border-bottom: 1px solid #8AA8C0;\n      width: 100%;\n      /*padding: 5px 0px 0px 0px;\r\n\t\t\tmargin: 15px; */\n      /*.connection{\r\n\t\t\t\t\t//border-bottom: 1px solid $color2;\r\n\t\t\t\t\tpadding: 0 0 $default-side-padding 0;\r\n\t\t\t\t\tmargin: 0;\r\n\t\t\t}*/\n      /*border-top: 1px dashed $color1;\r\n\t\t\tborder-bottom: 1px dashed $color1;*/ }\n      .viewer .container .paramater-container .info {\n        background-color: white;\n        padding: 0 15px;\n        color: #395D73;\n        width: 20%; }\n        .viewer .container .paramater-container .info .param {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          margin: 5px 0px; }\n          .viewer .container .paramater-container .info .param .label {\n            width: 80px;\n            text-transform: uppercase;\n            font-size: 12px;\n            color: #8AA8C0; }\n          .viewer .container .paramater-container .info .param .content {\n            font-size: 12px; }\n      .viewer .container .paramater-container .value {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center; }\n        .viewer .container .paramater-container .value .content {\n          vertical-align: center; }\n          .viewer .container .paramater-container .value .content input {\n            color: #395D73;\n            border: 0;\n            border-style: solid !important;\n            border-bottom: 1px solid #395D73; }\n            .viewer .container .paramater-container .value .content input:hover {\n              background-color: #F0BFA0; }\n            .viewer .container .paramater-container .value .content input:focus {\n              background-color: #F0BFA0; }\n\n#execute {\n  width: 100%;\n  background-color: #82BF6E;\n  color: white;\n  height: 36px;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  -ms-flex-negative: 0;\n      flex-shrink: 0; }\n  #execute:hover {\n    background-color: #F0BFA0;\n    color: #F07A79; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/parameter-viewer/parameter-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParameterViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ParameterViewerComponent = class ParameterViewerComponent extends __WEBPACK_IMPORTED_MODULE_1__base_classes_viz_Viewer__["a" /* Viewer */] {
    constructor(injector) {
        super(injector, "parameter-viewer");
        this.isVisible = false;
    }
    ngOnInit() {
    }
    reset() {
        this._node = undefined;
        this._inputs = [];
    }
    // addInput(): void{
    //    	this._node.addInput();
    // 	  this.flowchartService.update();
    // }
    // updateInputName($event, input): void{
    //   let name: string = $event.srcElement.innerText;
    //   input.setName(name);
    //   // put a timeout on this update or something similar to solve jumpiness
    //   this.flowchartService.update();
    // }
    // updateInputType( type:string ){
    //   alert(type);
    // }
    updateComputedValue($event, input) {
        let value = $event.srcElement.value;
        if (value.trim().length > 0) {
            input.setComputedValue(value);
            // put a timeout on this update or something similar to solve jumpiness
            this.flowchartService.update();
        }
        else {
            input.setComputedValue(undefined);
        }
    }
    getValue(port) {
        /*if(port.isConnected()){
          let address = port.getValue().port;
          let otp = this.flowchartService.getFlowchart().getNodeByIndex(address[0]).getOutputByIndex(address[1]);
          return otp.getValue();
        }
        else{*/
        return (port.getValue() || " ");
        //}
    }
    //
    //	this update runs when there is a message from other viewers that something changed; 
    //  beware of updating flowchart here - it will go into an unending loop :/
    //
    update() {
        this._node = this.flowchartService.getSelectedNode();
        if (this._node != undefined) {
            this._inputs = this._node.getInputs().filter(function (inp) {
                return !inp.isConnected();
            });
            this.isVisible = true;
        }
        else {
            this.isVisible = false;
        }
    }
    //
    //
    //
    executeFlowchart($event) {
        $event.stopPropagation();
        this.flowchartService.execute();
    }
};
ParameterViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-parameter-viewer',
        template: __webpack_require__("../../../../../src/app/ui-components/viewers/parameter-viewer/parameter-viewer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/viewers/parameter-viewer/parameter-viewer.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
], ParameterViewerComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/text-viewer/text-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"default\" *ngIf=\"_selectedNode === undefined\">\r\n\tNo Node Selected\r\n</div>\r\n\r\n<div class=\"container\" *ngIf=\"_selectedNode != undefined\">\r\n\t<h3>Selected Node: {{_selectedNode.getName()}}</h3>\r\n\t<hr>\r\n\t<mat-accordion multi=\"true\" [displayMode]=\"flat\">\r\n\t\t\t<!-- inputs -->\r\n\t\t\t<mat-expansion-panel [expanded]=\"true\" *ngFor=\"let output of _selectedNode.getOutputs()\">\r\n\t\t\t\t\r\n\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t  {{ output.getName() }}\r\n\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t<mat-panel-description>\r\n\t\t\t\t\t  <!-- This is a summary of the content -->\r\n\t\t\t\t\t</mat-panel-description>\r\n\t\t\t\t</mat-expansion-panel-header>\r\n\r\n\t\t\t\t<p>{{ output.getValue() }}</p>\r\n\r\n\t\t\t</mat-expansion-panel>\r\n\t\t\t\r\n\t</mat-accordion>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/text-viewer/text-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      width: 250px;\n      border-right: 4px solid #A9BCEC;\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.container {\n  height: 100%;\n  width: 100%;\n  padding: 15px;\n  color: #395D73;\n  box-sizing: border-box;\n  overflow: auto;\n  font-family: 'Ubuntu Mono', monospace; }\n  .container .nameLabel {\n    width: 100%; }\n  .container .outputPort {\n    width: 100%; }\n  .container .content {\n    margin-right: 15px;\n    width: 100%;\n    color: #F07A79;\n    font-size: 12px; }\n\nspan {\n  font-size: 15px;\n  display: block;\n  border-bottom: 1px solid #8AA8C0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/text-viewer/text-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let TextViewerComponent = class TextViewerComponent extends __WEBPACK_IMPORTED_MODULE_1__base_classes_viz_Viewer__["a" /* Viewer */] {
    constructor(injector) {
        super(injector, "Text Viewer", "Displayed geometry with each node;");
    }
    ngOnInit() {
        this.update();
    }
    getPortContent() {
        if (this._selectedPort == undefined) {
            return "";
        }
        let value = this._selectedPort.getValue();
        if (typeof (value) == "object") {
            value = JSON.stringify(value);
        }
        return value;
    }
    update() {
        try {
            this._selectedNode = this.flowchartService.getSelectedNode();
            this._selectedPort = this.flowchartService.getSelectedPort();
        }
        catch (ex) {
        }
    }
};
TextViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-text-viewer',
        template: __webpack_require__("../../../../../src/app/ui-components/viewers/text-viewer/text-viewer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/viewers/text-viewer/text-viewer.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
], TextViewerComponent);



/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/viewer-container/viewer-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer-container\">     \r\n\t<mat-button-toggle-group class=\"viewer-toggle\" [(ngModel)]=\"group.value\" (change)=\"changed()\">\r\n\t\t<div class= \"btn-grp1\">\r\n\t\t\t<mat-button-toggle value=\"0\" class=\"viewer-toggle-btn\" matTooltip=\"3D Viewer\">\r\n\t\t\t  <mat-icon>3d_rotation</mat-icon>\r\n\t\t\t</mat-button-toggle>\r\n\t\t\t<mat-button-toggle value=\"2\" class=\"viewer-toggle-btn\" matTooltip=\"Text Viewer\">\r\n\t\t\t  <mat-icon>description</mat-icon>\r\n\t\t\t</mat-button-toggle>\r\n\t\t\t<!-- <mat-button-toggle value=\"3\" disabled class=\"viewer-toggle-btn\" matTooltip=\"??\">\r\n\t\t\t  <mat-icon>text_format</mat-icon>\r\n\t\t\t</mat-button-toggle> -->\r\n\t\t\t<mat-button-toggle value=\"3\" class=\"viewer-toggle-btn\" matTooltip=\"Console\">\r\n\t\t\t  <mat-icon>info_outline</mat-icon>\r\n\t\t\t</mat-button-toggle>\r\n\t\t\t<mat-button-toggle value=\"4\" class=\"viewer-toggle-btn\" matTooltip=\"Function Help\" >\r\n\t\t\t  <mat-icon>help_outline</mat-icon>\r\n\t\t\t</mat-button-toggle>\r\n\t\t\t<mat-button-toggle value=\"5\" class=\"viewer-toggle-btn\" matTooltip=\"About Mobius\" >\r\n\t\t\t  <mat-icon>info</mat-icon>\r\n\t\t\t</mat-button-toggle>\r\n\t\t</div>\r\n\t\t<div class = \"btn-grp2\">\r\n\t\t\t<mat-button-toggle value=\"1\" id=\"codeViewer\" class=\"viewer-toggle-btn\" matTooltip=\"Code Viewer\">\r\n\t\t\t  <mat-icon>code</mat-icon>\r\n\t\t\t</mat-button-toggle>\r\n\t\t</div>\r\n\t</mat-button-toggle-group>\r\n\r\n\t<!-- <button class=\"viewer-toggle-btn\" \r\n\t\tmatTooltip=\"Locked: {{this._lock}}\" (click)=\"lock()\" \r\n\t\tstyle=\"position: absolute;right: 0px; top:0px;\">\r\n\t\t<mat-icon>lock</mat-icon>\r\n\t</button>\r\n -->\r\n\t<app-geometry-viewer *ngIf=\"group.value == 0\"></app-geometry-viewer>\r\n\t<app-code-viewer *ngIf=\"group.value == 1\"></app-code-viewer>\r\n\t<app-text-viewer *ngIf=\"group.value == 2\"></app-text-viewer>\r\n\t<app-console *ngIf=\"group.value == 3\"></app-console>\r\n\t<app-help-viewer *ngIf=\"group.value == 4\"></app-help-viewer>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/viewer-container/viewer-container.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n  .viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    .viewer .container .sidebar {\n      width: 250px;\n      border-right: 4px solid #A9BCEC;\n      z-index: 100; }\n    .viewer .container .view-container {\n      box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.viewer-toggle {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  width: 100%;\n  background-color: #395D73; }\n  .viewer-toggle span {\n    font-style: italic;\n    font-weight: bold; }\n  .viewer-toggle mat-icon {\n    color: #8AA8C0;\n    height: 30px !important;\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important;\n    -webkit-box-pack: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important;\n    font-size: 15px; }\n  .viewer-toggle:hover .btn-grp1 {\n    -ms-flex-flow: wrap;\n        flex-flow: wrap; }\n  .viewer-toggle .mat-button-toggle {\n    height: 30px !important; }\n  .viewer-toggle .mat-button-toggle-disabled {\n    background-color: #395D73; }\n    .viewer-toggle .mat-button-toggle-disabled mat-icon {\n      color: #F07A79 !important; }\n  .viewer-toggle .btn-grp1 {\n    max-width: 100% !important;\n    -webkit-box-flex: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important;\n    -ms-flex-negative: 1 !important;\n        flex-shrink: 1 !important;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap; }\n  .viewer-toggle .btn-grp2 {\n    width: 56px !important;\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-flow: row-reverse nowrap !important;\n            flex-flow: row-reverse nowrap !important;\n    -webkit-box-flex: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important;\n    -ms-flex-negative: 0 !important;\n        flex-shrink: 0 !important; }\n\n.viewer-toggle-btn:hover mat-icon {\n  color: #F0BFA0; }\n\n.viewer-container {\n  position: relative;\n  height: 100%;\n  min-width: 56px !important;\n  margin: 0px !important;\n  overflow: hidden !important;\n  padding-bottom: 67.5px;\n  box-sizing: border-box; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/viewers/viewer-container/viewer-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewerContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_viz_Viewer__ = __webpack_require__("../../../../../src/app/base-classes/viz/Viewer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_services_layout_service__ = __webpack_require__("../../../../../src/app/global-services/layout.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ViewerContainerComponent = class ViewerContainerComponent extends __WEBPACK_IMPORTED_MODULE_1__base_classes_viz_Viewer__["a" /* Viewer */] {
    constructor(injector, layoutService) {
        super(injector, "Viewer Container", "Contains all the viewers");
        this.layoutService = layoutService;
        this.group = { value: undefined };
        this._lock = false;
        this._layout_subscription = this.layoutService.getMessage().subscribe(message => {
            if (message.text.startsWith("Module: ")) {
                this.switchToHelp();
            }
            else if (message.text == "console") {
                this.switchToConsole();
            }
        });
    }
    updateGroupValue(value) {
        this.group.value = value;
        this.layoutService.setViewContainer(value);
    }
    switchToHelp() {
        this.updateGroupValue(4);
        this._lock = true;
    }
    switchToConsole() {
        this.updateGroupValue(3);
        this._lock = true;
    }
    update() {
        if (!this._lock) {
            let port = this.flowchartService.getSelectedPort();
            if (port == undefined) {
                this.updateGroupValue(this.layoutService.getViewContainer());
            }
            else {
                this.updateGroupValue(this.flowchartService.getSelectedPort().getType());
            }
        }
    }
    lock() {
        this._lock = !this._lock;
    }
    ngOnInit() {
        this.updateGroupValue(this.layoutService.getViewContainer());
    }
    changed() {
        this._lock = false;
        this.layoutService.setViewContainer(this.group.value);
    }
};
ViewerContainerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-viewer-container',
        template: __webpack_require__("../../../../../src/app/ui-components/viewers/viewer-container/viewer-container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/viewers/viewer-container/viewer-container.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */], __WEBPACK_IMPORTED_MODULE_2__global_services_layout_service__["a" /* LayoutService */]])
], ViewerContainerComponent);



/***/ }),

/***/ "../../../../../src/assets/modules/AllModules.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attrib", function() { return Attrib; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Examples", function() { return Examples; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Intersect", function() { return Intersect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Obj", function() { return Obj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plane", function() { return Plane; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pline", function() { return Pline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PMesh", function() { return PMesh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return Query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ray", function() { return Ray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Split", function() { return Split; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Topo", function() { return Topo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Math", function() { return Math; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "String", function() { return String; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__ = __webpack_require__("../../../../../src/app/base-classes/code/CodeModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gs_modelling__ = __webpack_require__("../../../../gs-modelling/dist/index.js");


//// version for dev
let Attrib = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Attrib", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["a" /* attrib */]);
let Circle = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Circle", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["b" /* circle */]);
let Ellipse = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Ellipse", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["c" /* ellipse */]);
let Examples = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Examples", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["d" /* examples */]);
let Intersect = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Intersect", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["e" /* intersect */]);
let Model = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Model", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["h" /* model */]);
let Obj = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Obj", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["i" /* object */]);
let Plane = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Plane", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["j" /* plane */]);
let Pline = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Pline", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["k" /* pline */]);
let PMesh = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("PMesh", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["l" /* pmesh */]);
let Point = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Point", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["m" /* point */]);
let Query = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Query", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["n" /* query */]);
let Ray = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Ray", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["o" /* ray */]);
let Split = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Split", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["p" /* split */]);
let Topo = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Topo", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["r" /* topo */]);
let List = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("List", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["f" /* list */]);
let Math = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("Math", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["g" /* math */]);
let String = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule("String", __WEBPACK_IMPORTED_MODULE_1_gs_modelling__["q" /* string */]);



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map