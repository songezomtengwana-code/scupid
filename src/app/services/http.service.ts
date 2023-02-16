import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private base_url: string = 'http:localhost:3000/';

  constructor(private http: HttpClient) {}

  get(uri: string) {
    return this.http.get(`${this.base_url + uri}`);
  }

  post(uri:string, payload: Object) {
    return this.http.post(`${this.base_url+ uri}`, payload)
  }

  put(uri: string, body:Object) {
    this.http.put(`${this.base_url + uri}`, body)
  }
}
