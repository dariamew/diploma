import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileInvitationListComponent } from './student-profile-invitation-list.component';

describe('StudentProfileInvitationListComponent', () => {
  let component: StudentProfileInvitationListComponent;
  let fixture: ComponentFixture<StudentProfileInvitationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentProfileInvitationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProfileInvitationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
