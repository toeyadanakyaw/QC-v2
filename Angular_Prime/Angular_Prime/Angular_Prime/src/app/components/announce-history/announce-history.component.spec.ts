import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnounceHistoryComponent } from './announce-history.component';

describe('AnnounceHistoryComponent', () => {
  let component: AnnounceHistoryComponent;
  let fixture: ComponentFixture<AnnounceHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnnounceHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnnounceHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
