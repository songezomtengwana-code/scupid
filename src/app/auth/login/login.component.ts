import { Component } from '@angular/core';
import { USER } from 'src/app/models/user/user.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}
  user = new USER();

  handleLoginRequest() {
    const loader = document.querySelector('.screen-loader') as HTMLElement;
    const password = document.querySelector('.password') as HTMLElement;
    const email = document.querySelector('.email') as HTMLElement;

    switch (this.user.email) {
      case 'cupid@outlook.com':
        if (this.user.password === 'cupidis#1') {
          loader.classList.add('loading');
          setTimeout(() => {
            this.router.navigateByUrl('shops/gifts');
          }, 5000);
        } else {
          password.style.color = 'red';
        }
        break;
      default:
        email.style.color = 'red';
        break;
    }
  }
}
