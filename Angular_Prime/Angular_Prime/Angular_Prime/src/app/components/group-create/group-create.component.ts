import { Component } from '@angular/core';

@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.css']
})
export class GroupCreateComponent {
  selectedStaff: string[] = [];
  selectedStaffDisplay: string = '';
  groups: { id: string, name: string, staff: string[] }[] = [];
  selectedGroupStaff: string[] = [];
  selectedGroup: { id: string, name: string } | null = null;

  updateSelectedStaff(selectedOptions: string[]): void {
    this.selectedStaff = [...new Set([...this.selectedStaff, ...selectedOptions])];
    this.selectedStaffDisplay = this.selectedStaff.join(', ');
  }

  onStaffSelectChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedOptions = Array.from(selectElement.selectedOptions)
                                .map(option => option.text);

    this.updateSelectedStaff(selectedOptions);
  }

  toggleStaff(groupId: string): void {
    const element = document.getElementById('collapse-' + groupId);
    if (element) {
      element.classList.toggle('show');
    }
  }

  addGroup(groupName: string, staff: string[]): void {
    const groupId = 'group' + (this.groups.length + 1);
    this.groups.push({ id: groupId, name: groupName, staff: staff });
  }

  ngOnInit(): void {
    // Example initialization (you can fetch this from an API)
    this.addGroup('Group 1', ['Staff 1 - Position 1', 'Staff 2 - Position 2', 'Staff 3 - Position 3']);
    this.addGroup('Group 2', ['Staff 4 - Position 1', 'Staff 5 - Position 2']);
  }
}
