import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventsModel } from '../models/events/events.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private _events: any;

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('assets/events.json').subscribe((response) => {
      this._events = response
    });
  }

  get events(): EventsModel[] { return this._events }
}
