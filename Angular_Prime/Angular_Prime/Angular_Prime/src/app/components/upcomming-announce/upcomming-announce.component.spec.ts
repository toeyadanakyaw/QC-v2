import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcommingAnnounceComponent } from './upcomming-announce.component';

describe('UpcommingAnnounceComponent', () => {
  let component: UpcommingAnnounceComponent;
  let fixture: ComponentFixture<UpcommingAnnounceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpcommingAnnounceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpcommingAnnounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
