import { TestBed, inject } from '@angular/core/testing';

import { PetugasService } from './petugas.service';

describe('PetugasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetugasService]
    });
  });

  it('should be created', inject([PetugasService], (service: PetugasService) => {
    expect(service).toBeTruthy();
  }));
});
