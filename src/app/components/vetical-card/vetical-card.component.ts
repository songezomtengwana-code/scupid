import { Component, Input } from '@angular/core';
import { EventsModel } from '../../models/events/events.model';

@Component({
  selector: 'app-vetical-card',
  templateUrl: './vetical-card.component.html',
  styleUrls: ['./vetical-card.component.scss']
})
export class VeticalCardComponent {
 @Input() event: any = undefined
 @Input() accommodation: any = undefined
 @Input() hotel: any = undefined

 starRating:number = 0
}
