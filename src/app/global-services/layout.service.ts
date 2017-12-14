import { Injectable } from '@angular/core';

@Injectable()
export class LayoutService {

	private action = {
	    a1s: 25,
	    a2s: 50,
	    a3s: 25,
	    a1v: true,
	    a2v: false,
	    a3v: true,
	    useTransition: true,
	}

  	constructor() { }

  	getAssets(){
  		return this.action;
  	}

  	setAssets(obj){
  		this.action = obj;
  	}

  	showEditor(){
  		this.action.a2v = true;
  	}

  	hideEditor(){
  		this.action.a2v = false;
  	}

}