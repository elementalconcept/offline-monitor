# Offline Monitor Service For Angular

Provides an `Observable` to monitor application network state as provided by
[online and offline events](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/Online_and_offline_events).
If API is not supported by the environment, `supported` flag is set to `false` and
`state` emits `false`.

## Installation

Install through npm:

`$ npm i @elemental-concept/offline-monitor`

or yarn:

`$ yarn add @elemental-concept/offline-monitor`

## Usage

Import `OfflineMonitorModule` inside one of your Angular modules or inside `AppModule` if you want to make it globally available.
Inject into your component or service `OfflineMonitorService` and subscribe to `state` changes.

```typescript
import { Component, OnInit } from '@angular/core';

import { OfflineMonitorService } from '@elemental-concept/offline-monitor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  online: boolean;

  constructor(private readonly offlineMonitor: OfflineMonitorService) {
  }

  ngOnInit() {
    this.offlineMonitor
      .state
      .subscribe(online => this.online = online);
  }
}

```
