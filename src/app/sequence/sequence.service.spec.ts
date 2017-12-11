import { TestBed, inject } from '@angular/core/testing';

import { SequenceService } from './sequence.service';

describe('SequenceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SequenceService]
    });
  });

  it('should be created', inject([SequenceService], (service: SequenceService) => {
    expect(service).toBeTruthy();
  }));
});
