import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UsersService } from '../../services/users';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export class Register {
  username = '';
  email = '';
  password = '';
  confirmPassword = '';
  message = '';
  error = '';

  constructor(private usersService: UsersService, private router: Router) {}

  onRegister() {
    if (this.password !== this.confirmPassword) {
      this.error = 'Las contraseñas no coinciden';
      this.message = '';
      return;
    }

    const registered = this.usersService.register(
      this.username,
      this.password,
      this.email
    );

    if (registered) {
      this.message = 'Usuario registrado correctamente ✅';
      this.error = '';
      setTimeout(() => this.router.navigate(['/login']), 1500);
    } else {
      this.error = 'El usuario o correo ya existen ❌';
      this.message = '';
    }
  }
}
