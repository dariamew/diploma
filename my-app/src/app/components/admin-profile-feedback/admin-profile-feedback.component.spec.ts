import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfileFeedbackComponent } from './admin-profile-feedback.component';

describe('AdminProfileFeedbackComponent', () => {
  let component: AdminProfileFeedbackComponent;
  let fixture: ComponentFixture<AdminProfileFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProfileFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProfileFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
