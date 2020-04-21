import { TestBed } from '@angular/core/testing';

import { NewFeedbackService } from './new-feedback.service';

describe('NewFeedbackService', () => {
  let service: NewFeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewFeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
