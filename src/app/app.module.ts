import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//opt-in FormsModule
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//Angular CLI declared when component generated
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    //@NgModule FormsModule
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    //no need to place any providers due to 
    //the `providedIn` flag
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
