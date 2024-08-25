import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsknowledgeComponent } from './asknowledge.component';

describe('AsknowledgeComponent', () => {
  let component: AsknowledgeComponent;
  let fixture: ComponentFixture<AsknowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsknowledgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsknowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
