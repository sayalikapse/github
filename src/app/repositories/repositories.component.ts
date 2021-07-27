import { Component, OnInit } from '@angular/core';
import { RepositoriesService } from 'src/app/services/repositories.service';

@Component({
	selector: 'app-repositories',
	templateUrl: './repositories.component.html',
	styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

	title = 'mostStarredGet';
	page: number = 2; //display repositories on page 2
	repositories = [];

		ngOnInit() {
		this.getRepositories(this.page);
	}
	constructor (private profilesService: RepositoriesService){}
		getRepositories(page: number) {
   
    this.profilesService.getProfileInfo(page).subscribe((res) => this.onSuccess(res) );
  }

 
  onSuccess(res) {
    
    if (res != undefined) {
      res.items.forEach(item => {
        this.repositories.push(item);
      });
    }
  }

  onScroll()
  {
    console.log("Scrolled");
    this.page = this.page + 2;
    this.getRepositories(this.page);
  }



}
