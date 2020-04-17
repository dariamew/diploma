import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileFeedbackComponent } from './student-profile-feedback.component';

describe('StudentProfileFeedbackComponent', () => {
  let component: StudentProfileFeedbackComponent;
  let fixture: ComponentFixture<StudentProfileFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentProfileFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProfileFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
