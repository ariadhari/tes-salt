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

	constructor(
    public api: ApiService
	) { }

	ngOnInit() {
 		this.loadVideos()
	}

	// Get videos list
	loadVideos() {
  	return this.api.getVideos().subscribe(data => this.Videos = data);
  }

}
