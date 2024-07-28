import { TestBed } from '@angular/core/testing';

import { MesajService } from './mesaj.service';

describe('MesajService', () => {
  let service: MesajService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesajService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
