import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { OfflineMonitorModule } from './offline-monitor.module';

@Injectable({ providedIn: OfflineMonitorModule })
export class OfflineMonitorService {
  private readonly emitter$: Observable<boolean>;
  private readonly supportFlag: boolean;

  constructor() {
    if (window.hasOwnProperty('navigator') && typeof window.navigator.onLine === 'boolean') {
      this.supportFlag = true;

      this.emitter$ = merge(fromEvent(window, 'online'), fromEvent(window, 'offline'))
        .pipe(
          map(event => event.type === 'online'),
          startWith(window.navigator.onLine));
    } else {
      this.supportFlag = false;
      this.emitter$ = new BehaviorSubject(false).asObservable();
    }
  }

  get supported() {
    return this.supportFlag;
  }

  get state() {
    return this.emitter$;
  }
}
