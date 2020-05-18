import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationProfileEditTaskComponent } from './organization-profile-edit-task.component';

describe('OrganizationProfileEditTaskComponent', () => {
  let component: OrganizationProfileEditTaskComponent;
  let fixture: ComponentFixture<OrganizationProfileEditTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationProfileEditTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationProfileEditTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
