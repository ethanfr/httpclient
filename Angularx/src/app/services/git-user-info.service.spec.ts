import { TestBed } from '@angular/core/testing';

import { GitUserInfoService } from './git-user-info.service';

describe('GitUserInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitUserInfoService = TestBed.get(GitUserInfoService);
    expect(service).toBeTruthy();
  });
});
