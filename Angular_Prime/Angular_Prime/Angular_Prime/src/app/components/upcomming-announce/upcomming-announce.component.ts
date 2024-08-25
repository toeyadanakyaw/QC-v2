import { Component, OnInit } from '@angular/core';

// Define a custom event interface
interface BootstrapModalEvent extends Event {
  relatedTarget: HTMLElement;
}

@Component({
  selector: 'app-upcomming-announce',
  templateUrl: './upcomming-announce.component.html',
  styleUrls: ['./upcomming-announce.component.css']
})
export class UpcommingAnnounceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initializeModal();
  }

  private initializeModal(): void {
    const detailsModal = document.getElementById('detailsModal');
    if (detailsModal) {
      detailsModal.addEventListener('show.bs.modal', function (event: Event) {
        const bootstrapEvent = event as BootstrapModalEvent;
        const button = bootstrapEvent.relatedTarget;
        const title = button.getAttribute('data-title');
        const date = button.getAttribute('data-date');
        const description = button.getAttribute('data-description');

        const modalTitle = detailsModal.querySelector('.modal-title') as HTMLElement;
        const modalDate = detailsModal.querySelector('#modalDate') as HTMLElement;
        const modalDescription = detailsModal.querySelector('#modalDescription') as HTMLElement;

        if (modalTitle) modalTitle.textContent = title ?? '';
        if (modalDate) modalDate.textContent = date ?? '';
        if (modalDescription) modalDescription.textContent = description ?? '';
      });
    }
  }
}
