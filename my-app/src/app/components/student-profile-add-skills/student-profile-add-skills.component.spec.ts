import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileAddSkillsComponent } from './student-profile-add-skills.component';

describe('StudentProfileAddSkillsComponent', () => {
  let component: StudentProfileAddSkillsComponent;
  let fixture: ComponentFixture<StudentProfileAddSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentProfileAddSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProfileAddSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
