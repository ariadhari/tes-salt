// import { Component, DoCheck } from '@angular/core';
// import { map, take } from 'rxjs/operators';
// import {Video} from "./model/video.model";

// @Component({
//   selector: 'a-comp',
//   template: `
//     <div>I am A component</div>
//     <b-comp></b-comp>
//   `
// })
// export class AComponent implements DoCheck 
// {
//   video: Video[];

//   ngDoCheck() {
//     console.log('ngDoCheck is called on AComponent');
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ApiService } from "../service/api.service";

@Component({
  selector: 'a-comp',
  templateUrl: './a.component.html',
})

export class AComponent implements OnInit {

  Videos: any = [];
  Peoples: any = [];
	Documents: any = [];

	constructor(
    public api: ApiService
	) { }

	ngOnInit() {
    this.loadVideos();
    this.loadPeoples();
 		this.loadDocuments();
	}

	// Get videos list
	loadVideos() {
  	return this.api.getVideos().subscribe(( data : any ) => {
      this.Videos = data.data;

      console.log(this.Videos);
    });
  }

  // Get Peoples list
  loadPeoples() {
    return this.api.getPeoples().subscribe(( data : any ) => {
      this.Peoples = data.data;

      console.log(this.Peoples);
    });
  }

  // Get Peoples list
  loadDocuments() {
    return this.api.getDocuments().subscribe(( data : any ) => {
      this.Documents = data.data;

      console.log(this.Documents);
    });
  }

  trackByFn(index, item) {    
    return item.id; // unique id corresponding to the item
  }

}
