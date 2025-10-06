import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss'],
})
export class Menu {
  constructor(private router: Router) {}

  logout() {
    
    this.router.navigate(['/login']);
  }
}
