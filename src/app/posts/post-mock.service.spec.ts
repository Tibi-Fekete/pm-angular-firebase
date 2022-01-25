import { TestBed } from '@angular/core/testing';

import { PostMockService } from './post-mock.service';

describe('PostMockService', () => {
  let service: PostMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
