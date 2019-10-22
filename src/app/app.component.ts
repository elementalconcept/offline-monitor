import { Component, OnDestroy, OnInit } from '@angular/core';

import { OfflineMonitorService } from '@elemental-concept/offline-monitor';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'offline-monitor-app';
  online: boolean;

  private readonly destroy$ = new Subject<boolean>();

  constructor(private readonly offlineMonitor: OfflineMonitorService) {
  }

  ngOnInit() {
    this.offlineMonitor
      .state
      .pipe(takeUntil(this.destroy$))
      .subscribe(online => this.online = online);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
