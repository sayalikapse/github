import { Component, OnInit } from '@angular/core';
import { ProfilesService } from 'src/app/services/profiles.service';

@Component({
	selector: 'app-profiles',
	templateUrl: './profiles.component.html',
	styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

	title = 'mostStarredGet';
	page: number = 2; //display repositories on page 2
	profiles = [];

		ngOnInit() {
		this.getProfiles(this.page);
	}
	constructor (private profilesService: ProfilesService){}
		getProfiles(page: number) {
   
    this.profilesService.getProfileInfo(page).subscribe((res) => this.onSuccess(res) );
  }

 
  onSuccess(res) {
    
    if (res != undefined) {
      res.items.forEach(item => {
        this.profiles.push(item);
      });
    }
  }

  onScroll()
  {
    console.log("Scrolled");
    this.page = this.page + 2;
    this.getProfiles(this.page);
  }



}
