import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieslistComponent } from './movieslist/movieslist.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { PeopleComponent } from './people/people.component';
import { PersonDetailsComponent } from './person-details/person-details.component';

// @Todo: Use Relative routing
const routes: Routes = [
  { path : '', component: MovieslistComponent },
  { path : 'movies', component: MovieslistComponent },
  { path : 'movies/details/:id', component: MoviedetailsComponent },
  { path : 'people', component: PeopleComponent },
  { path : 'person/:id', component: PersonDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// Export Routing components const so we don't need to add imports line again in app.module.ts for each component
export const RoutingComponents = [
  MovieslistComponent,
  MoviedetailsComponent,
  PeopleComponent,
  PersonDetailsComponent
];
