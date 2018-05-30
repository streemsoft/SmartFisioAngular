import { TestBed, inject } from '@angular/core/testing';

import { PacienteFireService } from './paciente-fire.service';

describe('PacienteFireService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PacienteFireService]
    });
  });

  it('should be created', inject([PacienteFireService], (service: PacienteFireService) => {
    expect(service).toBeTruthy();
  }));
});
