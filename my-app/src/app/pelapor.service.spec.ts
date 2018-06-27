import { TestBed, inject } from '@angular/core/testing';

import { PelaporService } from './pelapor.service';

describe('PelaporService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PelaporService]
    });
  });

  it('should be created', inject([PelaporService], (service: PelaporService) => {
    expect(service).toBeTruthy();
  }));
});
