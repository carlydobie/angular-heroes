import { NgModule } from '@angular/core';
//Routing functionality
import { RouterModule, Routes } from '@angular/router';
//Somewhere to go once you configure the routes
import { HeroesComponent } from './heroes/heroes.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';

//Routes tell the router which view to display
//when a user clicks a link or pastes a URL
//into the browser address bar
//path: a string that matches the URL in the
//browser address bar
//component: the component that the router
//should create when navigating to this route
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

//metadata initializes the router and starts it
//listening for browser location changes
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //makes the RouterModule available throughout app
  exports: [RouterModule]
})
export class AppRoutingModule { }
