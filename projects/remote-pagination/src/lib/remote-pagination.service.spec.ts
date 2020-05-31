import { TestBed } from '@angular/core/testing';

import { RemotePaginationService } from './remote-pagination.service';

describe('RemotePaginationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemotePaginationService = TestBed.get(RemotePaginationService);
    expect(service).toBeTruthy();
  });
});
