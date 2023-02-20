import { Component, OnInit } from '@angular/core';
import { TagsModel } from 'src/app/models/general/tag.model';
import { EventsService } from '../../services/events.service';
import { EventsModel } from '../../models/events/events.model';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit{
  tags: TagsModel[] = [
    {
      name: "Couples",
      status: false
    },
    {
      name: "Singles",
      status: false
    }
  ];

  constructor(private eventsService: EventsService) {}
  ngOnInit(): void {
    this.eventsService
  }

  get events(): EventsModel[] { return this.eventsService.events }

}
