import { Component } from '@angular/core';
import { TagsModel } from '../../models/general/tag.model';
import { HttpService } from '../../services/http.service';
import { RestaurantsModel } from 'src/app/models/accommodations/accommodations.model';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: [
    './accomodation.component.scss',
    '../../components/title-tag/title-tag.component.scss',
  ],
})
export class AccomodationComponent {
  public tags: TagsModel[] = [
    {
      name: 'Restaurants',
      status: false,
    },
    {
      name: 'Hotels',
      status: false,
    },
  ];

  public isCollapsed = true;
  public restTag: boolean = true;
  public hotelTag: boolean = false;

  rowTitle: string = this.tags[0].name;

  constructor(private http: HttpService) {}

  get hotels() {
    return this.http.hotels;
  }

  get accommodations(): RestaurantsModel[] {
    return this.http.accommodations;
  }

  handleActiveTag(tag: TagsModel) {
    if (tag.name === 'Restaurants') {
      this.hotelTag = false;
      this.restTag = true;
      console.log({ restTag: this.restTag });
    } else if (tag.name === 'Hotels') {
      this.restTag = false;
      this.hotelTag = true;
      console.log({ hotelTag: this.hotelTag });
    }

    this.rowTitle = tag.name;
    console.log({ selection_made: tag.name });
  }
}
