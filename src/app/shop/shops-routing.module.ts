import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftsComponent } from '../pages/gifts/gifts.component';
import { EventsComponent } from '../pages/events/events.component';
import { ShopComponent } from './shop.component';

const routes: Routes = [
  {
    path: 'shop',
    component: ShopComponent,
    children: [
      { path: 'gifts', component: GiftsComponent },
      { path: 'events', component: EventsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ShopsRoutingModule {}
