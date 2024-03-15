import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { jobDetails } from '../../models/job.model';

@Component({
  selector: 'app-jobdetail',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule],
  templateUrl: './jobdetail.component.html',
  styleUrl: './jobdetail.component.css'
})
export class JobdetailComponent {
  title: string = 'Back'
  jobDetailsList: jobDetails = {
    id: 0,
    companyName: '',
    title: '',
    companyLogo: '',
    reference: '',
    location: '',
    industries: [],
    types: [],
    description: '',
    publishDate: ''
  };
  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit() {
    const queryParams = this.route.snapshot.queryParamMap;
    const jobId = queryParams.get('id');
    this.httpClient.get('/jobs/' + jobId).subscribe((response: any) => {     
      this.jobDetailsList = response;
    })
  }


  navigateHomeJob() {
    this.router.navigate(['./jobs']);
  }
}
