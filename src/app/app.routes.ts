import { Routes } from '@angular/router';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { JobdetailComponent } from './components/jobdetail/jobdetail.component';
import { JobsComponent } from './components/jobs/jobs.component';

export const routes: Routes = [
    {path: "", redirectTo: "jobs", pathMatch: "full" },
    { path: 'jobs', component: JobsComponent },
    { path: 'jobdetail', component: JobdetailComponent },
    { path: 'favorites', component: FavoritesComponent }

];
