import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-create-announce',
  templateUrl: './create-announce.component.html',
  styleUrls: ['./create-announce.component.css']  // Corrected from 'styleUrl' to 'styleUrls'
})
export class CreateAnnounceComponent implements AfterViewInit {
  fileInput!: HTMLInputElement;
  fileInputContainer!: HTMLElement;
  filePreview!: HTMLElement;

  ngAfterViewInit() {
    // Ensure document is available
    if (typeof document !== 'undefined') {
      this.fileInput = document.getElementById('fileInput') as HTMLInputElement;
      this.fileInputContainer = document.getElementById('fileInputContainer') as HTMLElement;
      this.filePreview = document.getElementById('filePreview') as HTMLElement;

      this.fileInput.addEventListener('change', this.handleFileChange.bind(this));
    }
  }

  handleFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target.files ? target.files[0] : null;

    if (file) {
      const fileName = file.name;
      const fileReader = new FileReader();

      if (file.type.startsWith('image/')) {
        fileReader.onload = (e: ProgressEvent<FileReader>) => {
          if (e.target) {
            this.fileInputContainer.innerHTML = `<p class="m-0">${fileName}</p>`;
            this.filePreview.innerHTML = `<img src="${e.target.result}" alt="Preview of ${fileName}">`;
          }
        };
        fileReader.readAsDataURL(file);
      } else {
        this.fileInputContainer.innerHTML = `<p class="m-0">${fileName}</p>`;
        this.filePreview.innerHTML = '';
      }
    } else {
      this.fileInputContainer.innerHTML = `<span>Drag and drop a file here or click</span>`;
      this.filePreview.innerHTML = '';
    }
  }
}
