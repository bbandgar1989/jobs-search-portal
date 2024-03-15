import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../../services/job.service';
import { jobList } from '../../models/job.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  message :string = "No Record Found"
  allJobList = [];
  FinalFabList: any[] = [];
  jobModelList: jobList[] = [];
  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute, private jobService: JobService) {

  }
  ngOnInit() {
    this.getAllJobList();
  }

  getAllJobList() {
    this.httpClient.get('/jobs').subscribe((res: any) => {
      this.allJobList = res;
      this.getFavList();
    });

  }
  getFavList() {
    let finalFavList: any[] = [];
    let fabList = this.jobService.favList;
    this.allJobList.forEach((items: any) => {
      if (fabList.indexOf(items.id) !== -1) {
        finalFavList.push(items);
      }
    });
    this.FinalFabList = finalFavList;   

  }
  navigateToDetailJob(data: any) {
    let queryparams = { id: data.id };
    this.router.navigate(['./jobdetail'], { queryParams: queryparams });

  }
}
