import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileRequestListComponent } from './student-profile-request-list.component';

describe('StudentProfileRequestListComponent', () => {
  let component: StudentProfileRequestListComponent;
  let fixture: ComponentFixture<StudentProfileRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentProfileRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProfileRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
