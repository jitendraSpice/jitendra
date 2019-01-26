import { TestBed, inject } from '@angular/core/testing';

import { ApiListService } from './api-list.service';

describe('ApiListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiListService]
    });
  });

  it('should be created', inject([ApiListService], (service: ApiListService) => {
    expect(service).toBeTruthy();
  }));
});
