import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationProfileNewTaskComponent } from './organization-profile-new-task.component';

describe('OrganizationProfileNewTaskComponent', () => {
  let component: OrganizationProfileNewTaskComponent;
  let fixture: ComponentFixture<OrganizationProfileNewTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationProfileNewTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationProfileNewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
