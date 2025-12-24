import { TestBed } from '@angular/core/testing';

import { ExresolverResolver } from './exresolver.resolver';

describe('ExresolverResolver', () => {
  let resolver: ExresolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ExresolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
