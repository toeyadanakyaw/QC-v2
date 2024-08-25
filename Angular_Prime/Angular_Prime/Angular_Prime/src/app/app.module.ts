import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { TagModule } from 'primeng/tag';
import { SliderModule } from 'primeng/slider';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ChatComponent } from './components/chat/chat.component';
import { CreateAnnounceComponent } from './components/create-announce/create-announce.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { GroupListComponent } from './components/group-list/group-list.component';
import { OtpComponent } from './components/otp/otp.component';
import { ScheduleAnnounceComponent } from './components/schedule-announce/schedule-announce.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnnounceListComponent } from './components/announce-list/announce-list.component';
import { AsknowledgeComponent } from './components/asknowledge/asknowledge.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AuthenticatedLayoutComponent } from './components/authenticated-layout-component/authenticated-layout-component.component';
import { StaffListComponent } from './components/staff-list/staff-list.component';
import { UpcommingAnnounceComponent } from './components/upcomming-announce/upcomming-announce.component';
import { AnnounceHistoryComponent } from './components/announce-history/announce-history.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AlertComponent } from './components/alert/alert.component';
import { GroupCreateComponent } from './components/group-create/group-create.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { WebsocketService } from './services/websocket.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AnnounceListComponent,
    ChatComponent,
    CreateAnnounceComponent,
    ForgetPasswordComponent,
    GroupListComponent,
    OtpComponent,
    ScheduleAnnounceComponent,
    DashboardComponent,
    AnnounceListComponent,
    AsknowledgeComponent,
    SidebarComponent,
    AuthenticatedLayoutComponent,
    StaffListComponent,
    UpcommingAnnounceComponent,
    AnnounceHistoryComponent,
    ProfileComponent,
    AlertComponent,
    GroupCreateComponent,
    NotificationsComponent
 ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ProgressBarModule,
    TableModule,
    CommonModule,
    InputTextModule,
    DropdownModule,
    MultiSelectModule,
    TagModule,
    SliderModule,
    ButtonModule,
    FormsModule,  
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    WebsocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
