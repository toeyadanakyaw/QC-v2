import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { User } from '../models/user';
import { CookieService } from './cookie.service';
import { map, Observable } from 'rxjs';
import { AuthenticationResponse } from '../models/authicatation';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/user';

  constructor( private http: HttpClient, private cookieService: CookieService , @Inject(PLATFORM_ID) private platformId: Object) { }

  register(user: User): Observable<AuthenticationResponse>{
    let url = this.baseUrl + "/register";
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<AuthenticationResponse>(url,user, {headers});
  }

  // login(user: User): Observable<AuthenticationResponse>{
  //   let url = this.baseUrl + "/login"; 
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.http.post<AuthenticationResponse>(url,user, {headers, withCredentials: true});
  // }

  // setUserData(userData: any): void {
  //   this.cookieService.setUserData(userData);
  // }
  authenticate(user: any): Observable<AuthenticationResponse> {
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json' 
    });
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/login`, user, { headers })
      .pipe(
        map(response => {
          if (response.token) {
            // Save the token in local storage
            localStorage.setItem('authToken', response.token);
          }
          return response;
        })
      );
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  getUserRole(): string | null {
    const token = this.getToken();
    if (!token) {
      return null;
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.role;
  }

  getUserId(): string | null {
    const token = this.getToken();
    if (!token) {
      return null;
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.id;
  }

  isAdmin(): boolean {
    return this.getUserRole() === 'ADMIN';
  }

  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const user = localStorage.getItem('user');
      return user !== null;
    }
    return false;
  }
}
