import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileSkillsComponent } from './student-profile-skills.component';

describe('StudentProfileSkillsComponent', () => {
  let component: StudentProfileSkillsComponent;
  let fixture: ComponentFixture<StudentProfileSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentProfileSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProfileSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
