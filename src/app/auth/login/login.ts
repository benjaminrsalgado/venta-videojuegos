import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UsersService } from '../../services/users';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private usersService: UsersService, private router: Router) {}

  onLogin() {
    const loggedIn = this.usersService.login(this.username, this.password);

    if (loggedIn) {
      this.errorMessage = '';
      this.router.navigate(['/main']);
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }
}