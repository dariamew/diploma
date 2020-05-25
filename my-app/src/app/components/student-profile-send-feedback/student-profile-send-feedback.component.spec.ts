import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileSendFeedbackComponent } from './student-profile-send-feedback.component';

describe('StudentProfileSendFeedbackComponent', () => {
  let component: StudentProfileSendFeedbackComponent;
  let fixture: ComponentFixture<StudentProfileSendFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentProfileSendFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProfileSendFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
