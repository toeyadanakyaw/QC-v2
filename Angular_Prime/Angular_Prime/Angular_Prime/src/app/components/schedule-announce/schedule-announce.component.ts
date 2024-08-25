import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Correct import
import { AlertService } from '../../services/alert.service';

interface Alert {
  type: 'success' | 'error' | 'warning' | 'info' | 'confirm';
  title: string;
  message: string;
}

@Component({
  selector: 'app-schedule-announce',
  templateUrl: './schedule-announce.component.html',
  styleUrls: ['./schedule-announce.component.css']
})
export class ScheduleAnnounceComponent {
  alert: Alert | null = null;

  constructor(private router: Router, private alertService: AlertService) {
    this.alertService.alert$.subscribe(alert => {
      this.alert = alert;
    });
  }


  selectedCompanies: string[] = [];
  selectedCompaniesDisplay: string = '';

  selectedDepartments: string[] = [];
  selectedDepartmentsDisplay: string = '';

  selectedStaff: string[] = [];
  selectedStaffDisplay: string = '';

  selectedUsers: string[] = [];
  selectedUsersDisplay: string = '';

  showGroupCreation: boolean = false;
  showUserSelection: boolean = false;

  onCompanySelectChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedOptions = Array.from(selectElement.selectedOptions)
                                .map(option => option.text);

    this.updateSelectedCompanies(selectedOptions);
  }

  updateSelectedCompanies(selectedOptions: string[]): void {
    this.selectedCompanies = [...new Set([...this.selectedCompanies, ...selectedOptions])];
    this.selectedCompaniesDisplay = this.selectedCompanies.join(', ');
  }

  onDepartmentSelectChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedOptions = Array.from(selectElement.selectedOptions)
                                .map(option => option.text);

    this.updateSelectedDepartments(selectedOptions);
  }

  updateSelectedDepartments(selectedOptions: string[]): void {
    this.selectedDepartments = [...new Set([...this.selectedDepartments, ...selectedOptions])];
    this.selectedDepartmentsDisplay = this.selectedDepartments.join(', ');
  }

  onPositionSelectChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;

    this.showGroupCreation = selectedValue === 'create-group';
    this.showUserSelection = selectedValue === 'one-by-one';
  }

  onStaffSelectChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedOptions = Array.from(selectElement.selectedOptions)
                                .map(option => option.text);

    this.updateSelectedStaff(selectedOptions);
  }

  updateSelectedStaff(selectedOptions: string[]): void {
    this.selectedStaff = [...new Set([...this.selectedStaff, ...selectedOptions])];
    this.selectedStaffDisplay = this.selectedStaff.join(', ');
  }

  onUserSelectChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedOptions = Array.from(selectElement.selectedOptions)
                                .map(option => option.text);

    this.updateSelectedUsers(selectedOptions);
  }

  updateSelectedUsers(selectedOptions: string[]): void {
    this.selectedUsers = [...new Set([...this.selectedUsers, ...selectedOptions])];
    this.selectedUsersDisplay = this.selectedUsers.join(', ');
  }
}
