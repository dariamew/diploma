import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationProfileEditComponent } from './organization-profile-edit.component';

describe('OrganizationProfileEditComponent', () => {
  let component: OrganizationProfileEditComponent;
  let fixture: ComponentFixture<OrganizationProfileEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationProfileEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
