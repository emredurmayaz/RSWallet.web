import { TestBed, inject } from '@angular/core/testing';

import { SiparisService } from './siparis.service';

describe('SiparisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SiparisService]
    });
  });

  it('should be created', inject([SiparisService], (service: SiparisService) => {
    expect(service).toBeTruthy();
  }));
});
