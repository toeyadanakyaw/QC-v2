import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { AlertService } from '../../services/alert.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

interface Alert {
  type: 'success' | 'error' | 'warning' | 'info' | 'confirm';
  title: string;
  message: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  alert: Alert | null = null;
  user: User | null = null;

  constructor(private router: Router, private alertService: AlertService, private authService: AuthService) {
    this.alertService.alert$.subscribe(alert => {
      this.alert = alert;
    });
  }
  @ViewChild('dt') dt: Table | undefined;

  annoData: any[] = [
    { title: 'Announcement 1', announcerName: 'John Doe', duration: '3 days', progress: 70 },
    { title: 'Announcement 2', announcerName: 'Jane Smith', duration: '5 days', progress: 45 },
    { title: 'Announcement 3', announcerName: 'Jane Smith', duration: '4 days', progress: 95 }
  ];
  onFilter(event: Event, field: string) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.dt?.filter(value, field, 'contains');
  }
  fails(){
    this.alertService.showAlert('error','Login Failed', 'Invalid username or password.')
  }

  // ngOnInit(): void {
  //   this.user = this.authService.setUserData();
  // }

}
