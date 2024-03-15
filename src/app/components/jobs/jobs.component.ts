import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { jobList } from '../../models/job.model';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})

export class JobsComponent {
  jobModelList: jobList[] = [];
  toggle: boolean = true;
  selectedRow: number = 0;
  favList: number[] = [];
  constructor(private httpClient: HttpClient, private router: Router, private jobService: JobService) {
    setTimeout(() =>{
      this.httpClient.get('/jobs').subscribe((res: jobList | any) => {     
        this.jobModelList = res;
      });
    }, 1000)
  }
 
  navigateToDetailJob(data: any) {
    let queryparams = { id: data.id };
    this.router.navigate(['/jobdetail'], { queryParams: queryparams });
  }
 
  addRemoveJobsToFavList(id: number) {
    if (this.jobService.favList.indexOf(id) !== -1) {
      let arrayRemove = this.jobService.favList.indexOf(id)
      this.jobService.favList.splice(arrayRemove, 1);
    } else {
      this.jobService.favList.push(id);
    }

  }
  setFavClass(id: number): boolean {
    const thisAllIHave = this.jobService.favList.filter((item: number) => item === id);
    if (thisAllIHave.length === 0) {
      return false;
    } else {
      return true;
    }
  }
}
