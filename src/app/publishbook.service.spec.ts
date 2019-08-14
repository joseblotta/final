import { TestBed } from '@angular/core/testing';

import { PublishBookService } from './publishbook.service';

describe('PublishBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublishBookService = TestBed.get(PublishBookService);
    expect(service).toBeTruthy();
  });
});
