import { Injectable } from "@angular/core";
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    private _data: any;
    constructor(private http: HttpService) {
        this.http.get('').subscribe((res) => { this._data = res })
    }

    get server() { return this._data }
}