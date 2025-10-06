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
  private users: User[] = [];
  private currentUser: User | null = null;

  constructor() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) this.users = JSON.parse(storedUsers);

    const storedSession = localStorage.getItem('currentUser');
    if (storedSession) this.currentUser = JSON.parse(storedSession);
  }

  private saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  private saveSession() {
    if (this.currentUser)
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    else localStorage.removeItem('currentUser');
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  login(username: string, password: string): boolean {
    const foundUser = this.users.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      this.currentUser = foundUser;
      this.saveSession();
      return true;
    }
    return false;
  }

  logout() {
    this.currentUser = null;
    this.saveSession();
  }

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
    this.saveUsers();
    return true;
  }

  getAllUsers(): User[] {
    return this.users;
  }
}