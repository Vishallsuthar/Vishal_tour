import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HotelComponent } from './hotel/hotel.component';
import { TourpackagesComponent } from './tourpackages/tourpackages.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const appRoutes: Routes = [
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us',component: AboutusComponent },
  {
    path: 'hotel',
    component: HotelComponent,
    data: { title: 'Hotel' }
  },
  {
    path: 'tour-packages',
    component: TourpackagesComponent,
    data: { title: 'Tour Packages' }
  },
  {
    path: 'contact-us',
    component: ContactusComponent,
    data: { title: 'Contact Us' }
  },
  
  { path: '**', component: PagenotfoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )
  ],
  exports: [RouterModule],
  // declarations: []
  
})
export class AppRoutingModule { }
