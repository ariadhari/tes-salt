import { Component, OnInit } from '@angular/core';
import { ApiService } from "../service/api.service";

@Component({
  selector: 'b-comp',
  templateUrl: './b.component.html',
})

export class BComponent implements OnInit {

  	Activities: any = [];
  	Channels: any = [];
  	ChannelLength: string;
	
	constructor(
    	public api: ApiService
	) { }

	ngOnInit() {
    	this.loadActivities();
    	this.loadChannels();
	}

	// Get videos list
	loadActivities() {
  		return this.api.getActivities().subscribe(( data : any ) => {
	      	this.Activities = data.data;

	      	console.log(this.Activities);
	    });
	}

  	// Get Peoples list
	loadChannels() {
	    return this.api.getChannels().subscribe(( data : any ) => {
	      	this.Channels = data.data;
	      	this.ChannelLength = data.data.length;

	      	console.log(this.Channels);
	      	console.log(this.ChannelLength);
	    });
  	}

  	trackByFn(index, item) {    
    	return item.id; // unique id corresponding to the item
  	}

}
