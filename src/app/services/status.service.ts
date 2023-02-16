import { Injectable } from '@angular/core';
import { USER } from 'src/app/models/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  private _activeUser?: USER;
  clean?: Object;

  handleUserStatus(loggingUser: USER) {
    this._activeUser = loggingUser;
    console.log(this._activeUser);
  }

  get activeUser() {
    return this._activeUser;
  }
}
