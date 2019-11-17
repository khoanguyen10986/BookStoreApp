import { TestBed } from '@angular/core/testing';

import { DetailPopupService } from './detail-popup.service';

describe('DetailPopupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailPopupService = TestBed.get(DetailPopupService);
    expect(service).toBeTruthy();
  });
});
