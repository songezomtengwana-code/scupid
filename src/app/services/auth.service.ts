import { Injectable, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { USER } from '../models/user/user.model';
import { StatusService } from './status.service';

class userAuthModel {
  email!: string;
  password!: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  private base_users: any;
  constructor(
    private http: HttpService,
    private statusService: StatusService
  ) {}

  ngOnInit(): void {
    this.get_users()
    console.log(this.base_users);
    
  }

  get_users() {
    this.http.get('users').subscribe((response) => {
      this.base_users = response;
      console.log(response);
    });
  }

  get users() {
    return this.base_users;
  }

  login(loggingUser: userAuthModel) {
    const dbUserEmail = this.users.find((user: USER) => {
      loggingUser.email === user.email;
    });
    const dbUserPassword = this.users.find((user: USER) => {
      loggingUser.password === user.password;
    });

    console.log(dbUserEmail);
    

    if (!dbUserEmail) {
      console.log({ error: 'email not found' });
    } else {
      // split nest
      if (dbUserEmail) {
        console.log(dbUserEmail);
        this.statusService.handleUserStatus(dbUserEmail);
      }
    }
  }
}
