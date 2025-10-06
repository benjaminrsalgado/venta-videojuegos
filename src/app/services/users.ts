import { Injectable } from '@angular/core';

export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'admin',
      password: '1234',
      email: 'admin@example.com',
    },
  ];

  private currentUser: User | null = null;

  constructor() {}

  
  getCurrentUser(): User | null {
    return this.currentUser;
  }

  
  login(username: string, password: string): boolean {
    const foundUser = this.users.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      this.currentUser = foundUser;
      return true;
    }
    return false;
  }

  /** Cierra sesión */
  logout() {
    this.currentUser = null;
  }

  /** Registra un nuevo usuario si no existe uno con el mismo username o email */
  register(username: string, password: string, email: string): boolean {
    const userExists = this.users.some(
      (u) => u.username === username || u.email === email
    );

    if (userExists) return false;

    const newUser: User = {
      id: this.users.length + 1,
      username,
      password,
      email,
    };

    this.users.push(newUser);
    return true;
  }

  /** Devuelve todos los usuarios (solo para depuración) */
  getAllUsers(): User[] {
    return this.users;
  }
}