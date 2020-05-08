import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfileTasksComponent } from './admin-profile-tasks.component';

describe('AdminProfileTasksComponent', () => {
  let component: AdminProfileTasksComponent;
  let fixture: ComponentFixture<AdminProfileTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProfileTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProfileTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
