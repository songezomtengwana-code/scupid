import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ShopComponent } from './shop/shop.component';
import { GiftsComponent } from './pages/gifts/gifts.component';
import { EventsComponent } from './pages/events/events.component';
import { AccomodationComponent } from './pages/accomodation/accomodation.component';
import { MatchComponent } from './components/match/match.component';

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
    path: 'shop',
    component: ShopComponent,
    children: [
      { path: 'gifts', component: GiftsComponent },
      { path: 'events', component: EventsComponent },
      { path: 'match', component: MatchComponent },
      { path: 'accommodations', component: AccomodationComponent }
    ],
  },
  { path: '**', redirectTo: 'shop/gifts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
