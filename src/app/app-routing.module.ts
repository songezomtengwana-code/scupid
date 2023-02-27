import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ShopComponent } from './shop/shop.component';
import { GiftsComponent } from './pages/gifts/gifts.component';
import { EventsComponent } from './pages/events/events.component';
import { AccomodationComponent } from './pages/accomodation/accomodation.component';
<<<<<<< HEAD
import { MatchComponent } from './components/match/match.component';
=======
import { EntertainmentComponent } from './pages/entertainment/entertainment.component';
import { HomeComponent } from './pages/home/home.component';
>>>>>>> 4c1000508017eca724f4165bac4cd8c2185f5c18

const routes: Routes = [
  // authentication routes
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: LoginComponent },
    ],
  },
  // main app routes
  {
    path: 'welcome',
    component: HomeComponent
  },
  {
    path: 'shop',
    component: ShopComponent,
    children: [
      { path: 'gifts', component: GiftsComponent },
      { path: 'events', component: EventsComponent },
<<<<<<< HEAD
      { path: 'match', component: MatchComponent },
      { path: 'accommodations', component: AccomodationComponent }
=======
      { path: 'accommodations', component: AccomodationComponent },
      { path: 'entertainment', component: EntertainmentComponent }
>>>>>>> 4c1000508017eca724f4165bac4cd8c2185f5c18
    ],
  },
  { path: '**', redirectTo: 'shop/gifts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
