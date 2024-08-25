import { Component, Input } from '@angular/core';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() type: 'success' | 'error' | 'warning' | 'info' | 'confirm' = 'info';
  @Input() title: string = '';
  @Input() message: string = '';

  isVisible = true;

  constructor(private alertService: AlertService) {}

  closeAlert() {
    this.isVisible = false;
    this.alertService.clearAlert();
  }
}
