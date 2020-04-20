import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationProfileTaskListComponent } from './organization-profile-task-list.component';

describe('OrganizationProfileTaskListComponent', () => {
  let component: OrganizationProfileTaskListComponent;
  let fixture: ComponentFixture<OrganizationProfileTaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationProfileTaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationProfileTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
