import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatedLayoutComponentComponent } from './authenticated-layout-component.component';

describe('AuthenticatedLayoutComponentComponent', () => {
  let component: AuthenticatedLayoutComponentComponent;
  let fixture: ComponentFixture<AuthenticatedLayoutComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthenticatedLayoutComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthenticatedLayoutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
