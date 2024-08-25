import { Component, ViewEncapsulation } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { response } from 'express';
import { AuthenticationResponse } from '../../models/authicatation';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user: User = { name: '', email: '', password: '' };
  registrationResponse: string | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  // Make sure this method is defined correctly
  onSubmit(): void {
    this.authService.register(this.user).subscribe({
      next: (response: AuthenticationResponse) => {
        this.registrationResponse = response.message;
        console.log('Registration successful:', response);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.registrationResponse = error.error.message;
        console.error('Registration failed:', error);
      }
    });
  }
}