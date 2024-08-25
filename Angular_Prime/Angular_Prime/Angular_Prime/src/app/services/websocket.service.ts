import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client, Message } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private serverUrl = 'http://localhost:8080/ws';
  private stompClient: Client;

  constructor(private http: HttpClient) {
    this.stompClient = new Client({
      webSocketFactory: () => new SockJS(this.serverUrl),
      reconnectDelay: 5000,
      debug: (str) => console.log(new Date(), str),
    });

    // Setup handlers
    this.stompClient.onConnect = () => {
      console.log('Connected to WebSocket');
    };

    this.stompClient.onStompError = (frame) => {
      console.error('Broker reported error:', frame.headers['message']);
      console.error('Additional details:', frame.body);
    };

    // Activate client
    this.stompClient.activate();
  }

  // Method to handle notifications
  public getNotifications(): Observable<any> {
    return new Observable((observer: Observer<any>) => {
      this.stompClient.onConnect = () => {
        this.stompClient.subscribe('/topic/notifications', (message: Message) => {
          const notification = JSON.parse(message.body);
          console.log(notification);
          observer.next(notification);
        });
      };

      // Handle subscription error
      this.stompClient.onStompError = (frame) => {
        console.error('Broker reported error:', frame.headers['message']);
        console.error('Additional details:', frame.body);
      };
    });
  }

  // Method to retrieve stored notifications
  public getStoredNotifications(): any[] {
    return JSON.parse(localStorage.getItem('notifications') || '[]');
  }

  // Notify the server that the user has opened notifications
  public notifyUserOpenedNotifications(userId: number): void {
    this.http.post('http://localhost:8080/api/notifications/user-opened', { userId }).subscribe();
  }

  // Get the unread notification count for a user
  public getUnreadNotificationCount(userId: number): Observable<number> {
    return this.http.get<number>('http://localhost:8080/api/notifications/unread-count', { params: { userId: userId.toString() } });
  }

  // Method to handle chat messages
  public subscribeToChat(roomId: string): Observable<any> {
    return new Observable((observer: Observer<any>) => {
      this.stompClient.onConnect = () => {
        this.stompClient.subscribe(`/topic/${roomId}`, (message: Message) => {
          const chatMessage = JSON.parse(message.body);
          observer.next(chatMessage);
        });
      };

      // Handle subscription error
      this.stompClient.onStompError = (frame) => {
        console.error('Broker reported error:', frame.headers['message']);
        console.error('Additional details:', frame.body);
      };
    });
  }

  // Method to send a chat message
  public sendChatMessage(roomId: string, content: string): void {
    const message = { content };
    if (this.stompClient.connected) {
      this.stompClient.publish({
        destination: `/app/send/${roomId}`,
        body: JSON.stringify(message),
      });
    } else {
      console.error('StompClient is not connected');
    }
  }
}
