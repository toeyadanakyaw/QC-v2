import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  private userDataSubject = new BehaviorSubject<User | null>(null);
  userData$ = this.userDataSubject.asObservable();

  constructor() { }

  setUserData(userData: User): void {
    this.userDataSubject.next(userData);
  }

  clearUserData(): void {
    this.userDataSubject.next(null);
  }
  
}
