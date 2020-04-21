import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationSendInvitationComponent } from './organization-send-invitation.component';

describe('OrganizationSendInvitationComponent', () => {
  let component: OrganizationSendInvitationComponent;
  let fixture: ComponentFixture<OrganizationSendInvitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationSendInvitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationSendInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
