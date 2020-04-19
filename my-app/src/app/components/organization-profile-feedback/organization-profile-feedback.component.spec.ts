import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationProfileFeedbackComponent } from './organization-profile-feedback.component';

describe('OrganizationProfileFeedbackComponent', () => {
  let component: OrganizationProfileFeedbackComponent;
  let fixture: ComponentFixture<OrganizationProfileFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationProfileFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationProfileFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
