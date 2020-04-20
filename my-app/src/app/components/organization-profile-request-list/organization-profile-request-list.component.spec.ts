import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationProfileRequestListComponent } from './organization-profile-request-list.component';

describe('OrganizationProfileRequestListComponent', () => {
  let component: OrganizationProfileRequestListComponent;
  let fixture: ComponentFixture<OrganizationProfileRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationProfileRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationProfileRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
