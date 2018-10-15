import { TestBed } from '@angular/core/testing';

import { GitrepoinfoService } from './gitrepoinfo.service';

describe('GitrepoinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitrepoinfoService = TestBed.get(GitrepoinfoService);
    expect(service).toBeTruthy();
  });
});
