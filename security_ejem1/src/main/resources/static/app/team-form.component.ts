import {Component, OnInit}  from 'angular2/core';
import {RouteParams,ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {Team, TeamService}   from './team.service';
import {NgForm} from 'angular2/common';
import {MultipartItem} from "./multipart-upload/multipart-item";
import {MultipartUploader} from "./multipart-upload/multipart-uploader";

@Component({
  templateUrl: "app/html/team-form.component.html",
  directives: [ROUTER_DIRECTIVES],
  styleUrls: ["app/css/team-form.component.css"],
  providers: [HTTP_PROVIDERS]
})
export class TeamFormComponent implements OnInit {

  newTeam: boolean;
  team: Team;
  active = true;
  ids: number;
  
  private description: string;
  private file: File;
  
  private images: String[] = [];

  constructor(
    private _router:Router,
    routeParams:RouteParams,
    private service: TeamService, private http: Http){

      let id = routeParams.get('id');
      this.ids = routeParams.get('id');
      if(id){
        service.getTeam(id).subscribe(
          team => this.team = team,
          error => console.error(error)
        );
        this.newTeam = false;
      } else {
        this.team = {fullname:'', imgescudo:'', imgequipo:'', imgequipment:'', imgcoach:'', coach:'', description:'', history:'', points:0};
        this.newTeam = true;
      }
  }
  
  ngOnInit(){
		this.loadImages();
	}
	
	loadImages(){
	
		this.http.get("/images").subscribe(
			response => this.images = response.json();
		)		
	}
	
	selectFile($event) {		
		this.file = $event.target.files[0];
		console.debug("Selected file: " + this.file.name + " type:" + this.file.size + " size:" + this.file.size);		
	}
	
	upload() {
		
		console.debug("Uploading file...");

		if (this.file == null || this.description == null){
			console.error("You have to select a file and set a description.");
			return;
		}		
		
		let formData = new FormData();
			
		formData.append("description", this.description);
		formData.append("file",  this.file);
		

		let multipartItem = new MultipartItem(new MultipartUploader({url: '/image/upload'}));
		
		multipartItem.formData = formData;
		
		multipartItem.callback = (data, status, headers) => {
						
			if (status == 200){				
				console.debug("File has been uploaded");
				this.loadImages();				
			} else {
				console.error("Error uploading file");
			}
		};
		
		multipartItem.upload();
	}

  cancel() {
    window.history.back();
  }

  save() {
	    if(this.ids){
	    	this.service.updateTeam(this.team).subscribe(
	    	team => {}, 
	    	error => console.error('Error creating new book: '+error)
    	);
	    }else{
    	this.service.saveTeam(this.team).subscribe(
	    	team => {}, 
	    	error => console.error('Error creating new book: '+error)
    	);
    }
    window.history.back();
  }

  onSubmit() { this.submitted = true; }
}
