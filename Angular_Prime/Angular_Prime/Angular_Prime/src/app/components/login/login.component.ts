import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { response } from 'express';
import { AuthenticationResponse } from '../../models/authicatation';
import { error } from 'console';


interface Alert {
  type: 'success' | 'error' | 'warning' | 'info' | 'confirm';
  title: string;
  message: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  alert: Alert | null = null;
  user: User = { name: '', email: '', password: '' };
  loginResponse: string | undefined;


  constructor(private router: Router, private alertService: AlertService, private authService:AuthService) {
    this.alertService.alert$.subscribe(alert => {
      this.alert = alert;
    });
  }

  // onSubmit(): void {
  //   console.log("Login method is working!");
  //   // Assuming login is successful for demonstration
  //   // this.onLoginSuccess();
  //   this.authService.login(this.user).subscribe({
  //     next: (response: AuthenticationResponse) => {
  //       this.loginResponse = response.message;
  //       console.log('Login successful:', response);
  //       this.router.navigate(['/dashboard']);
  //     },
  //     error: (error) => {
  //       this.loginResponse = error.error.message;
  //       console.error('Login failed:', error);
  //     }
  //   });
  // }

  //for cookie
  onSubmit(): void {
    console.log("Login method is working!");
    // Assuming login is successful for demonstration
    // this.onLoginSuccess();
    // this.authService.login(this.user).subscribe({
    //   next: (response) => {
    //     this.authService.setUserData(response);
    //     console.log('Login successful:', response);
    //     this.router.navigate(['/dashboard']);
    //   },
    //   error: (error) => {
    //     this.loginResponse = error.error.message;
    //     console.error('Login failed:', error);
    //   }
    // });
    this.authService.authenticate(this.user).subscribe(
      (response:AuthenticationResponse)=>{
          this.loginResponse = response.message;
          this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.loginResponse = 'Login failed';
        // Handle error
      }
    );
  }

  onLoginSuccess() {
    this.alertService.showAlert('success', 'Login Success', 'You have logged in successfully!');
  }
  onLoginFail() {
    this.alertService.showAlert('error', 'Login Failed', 'Invalid username or password.');
  }
  fail() {
    this.alertService.showAlert('error', 'Operation Failed', 'There was an error with the operation.');
  }
  warning() {
    this.alertService.showAlert('warning', 'Operation Failed', 'There was an warning with the operation.');
  }
  info() {
    this.alertService.showAlert('info', 'Operation Success', 'infooo sful!');
  }
}