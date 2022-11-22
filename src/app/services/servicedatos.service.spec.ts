import { TestBed } from '@angular/core/testing';

import { ServiceDatosService } from './servicedatos.service';

describe('ServiceDatosService', () => {
  let service: ServiceDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
