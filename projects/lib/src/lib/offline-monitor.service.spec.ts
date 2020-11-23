import { TestBed } from '@angular/core/testing';

import { OfflineMonitorService } from './offline-monitor.service';

describe('OfflineMonitorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfflineMonitorService = TestBed.get(OfflineMonitorService);
    expect(service).toBeTruthy();
  });
});
