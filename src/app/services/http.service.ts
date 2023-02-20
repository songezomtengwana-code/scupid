import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestaurantsModel } from '../models/accommodations/accommodations.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private base_url: string = 'http:localhost:3000/';
  restaurants_base_url: string = 'assets/restaurants.json';
  hotels_base_url: string = 'assets/hotels.json'
  public _accommodations: any;
  public _hotels: any;

  constructor(private http: HttpClient) {
    this.http
      .get<RestaurantsModel>(this.restaurants_base_url)
      .subscribe((response) => {
        this._accommodations = response;
      });

      this.http.get(this.hotels_base_url).subscribe((response) => {
        this._hotels = response
      })
  }

  get accommodations() { return this._accommodations }

  get hotels() { return this._hotels }

  get(uri: string) {
    return this.http.get(`${this.base_url + uri}`);
  }

  post(uri: string, payload: Object) {
    return this.http.post(`${this.base_url + uri}`, payload);
  }

  put(uri: string, body: Object) {
    this.http.put(`${this.base_url + uri}`, body);
  }
}
