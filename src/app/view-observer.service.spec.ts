import { TestBed } from '@angular/core/testing';

import { ViewObserverService } from './view-observer.service';

describe('ViewObserverService', () => {
  let service: ViewObserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewObserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
