import { TestBed, inject } from '@angular/core/testing';

import { LaporanService } from './laporan.service';

describe('LaporanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LaporanService]
    });
  });

  it('should be created', inject([LaporanService], (service: LaporanService) => {
    expect(service).toBeTruthy();
  }));
});
