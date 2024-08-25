import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleAnnounceComponent } from './schedule-announce.component';

describe('ScheduleAnnounceComponent', () => {
  let component: ScheduleAnnounceComponent;
  let fixture: ComponentFixture<ScheduleAnnounceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduleAnnounceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduleAnnounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
