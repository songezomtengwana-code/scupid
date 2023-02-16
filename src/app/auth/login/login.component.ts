import { Component } from '@angular/core';
import { USER } from 'src/app/models/user/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService) {}
  user = new USER();

  handleLoginRequest() {
    this.authService.login(this.user)
  }
}
