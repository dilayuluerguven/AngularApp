import { TestBed } from '@angular/core/testing';

import { CustomErrorInterceptor } from './custom-error.interceptor';

describe('CustomErrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CustomErrorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CustomErrorInterceptor = TestBed.inject(CustomErrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
