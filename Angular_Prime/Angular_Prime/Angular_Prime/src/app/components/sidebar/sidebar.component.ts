import { Component, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit {
  showSidebar: boolean = true;

  constructor(
    private primengConfig: PrimeNGConfig,
    private router: Router,
    private elRef: ElementRef,
    private renderer: Renderer2,
    private websocket:WebsocketService
  ) {}

  ngOnInit() {
    this.primengConfig.zIndex = {
      modal: 1100,
      overlay: 1000,
      menu: 1000,
      tooltip: 1100
    };

    this.router.events.subscribe(() => {
      this.showSidebar = !['/login', '/register', '/forget-password', '/otp'].includes(this.router.url);
    });
  }

  ngAfterViewInit() {
    this.setupSidebarToggle();
  }

  private setupSidebarToggle() {
    console.log('Setting up sidebar toggle'); // Debugging line
    const sidebarToggle = this.elRef.nativeElement.querySelector('#sidebarToggle');
    const sidebar = this.elRef.nativeElement.querySelector('#sidebar');
    const content = this.elRef.nativeElement.querySelector('#content');

    if (sidebarToggle && sidebar && content) {
      this.renderer.listen(sidebarToggle, 'click', () => {
        sidebar.classList.toggle('d-none');
        content.classList.toggle('full-width');
        console.log("hello sidebar ts is work!!")
      });
    } else {
      console.error('Element(s) not found');
    }
  }
}
