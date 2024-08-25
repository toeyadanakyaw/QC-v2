import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../services/websocket.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'] // Corrected styleUrls
})
export class NotificationsComponent implements OnInit {
  notifications: any[] = [];
  unreadCount: number = 0;

  constructor(private websocket: WebsocketService) {}

  ngOnInit() {
    // Subscribe to notifications
    this.websocket.getNotifications().subscribe(notification => {
      this.notifications.push(notification);
      this.unreadCount++;
      this.updateBadge();
    });

    // Initial unread count check
    this.websocket.getUnreadNotificationCount(1).subscribe(count => { // Replace 1 with dynamic user ID
      this.unreadCount = count;
      this.updateBadge();
    });
  }

  updateBadge() {
    // Update the badge count
    const badgeElement = document.querySelector('.badge') as HTMLElement;
    if (badgeElement) {
      badgeElement.textContent = this.unreadCount.toString();
    }
  }

  markAllAsRead() {
    this.websocket.notifyUserOpenedNotifications(1); // Replace 1 with dynamic user ID
    this.unreadCount = 0;
    this.updateBadge();
  }
}
