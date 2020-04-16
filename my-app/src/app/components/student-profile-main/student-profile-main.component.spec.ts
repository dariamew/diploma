import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileMainComponent } from './student-profile-main.component';

describe('StudentProfileMainComponent', () => {
  let component: StudentProfileMainComponent;
  let fixture: ComponentFixture<StudentProfileMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentProfileMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProfileMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
