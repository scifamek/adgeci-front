import { TestBed } from '@angular/core/testing';

import { AdgeciCoreUtilsService } from './adgeci-core-utils.service';

describe('AdgeciCoreUtilsService', () => {
  let service: AdgeciCoreUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdgeciCoreUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
