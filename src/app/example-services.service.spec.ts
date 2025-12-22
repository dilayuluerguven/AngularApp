import { TestBed } from '@angular/core/testing';

import { ExampleServicesService } from './example-services.service';

describe('ExampleServicesService', () => {
  let service: ExampleServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
