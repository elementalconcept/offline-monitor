import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OfflineMonitorModule } from '@elemental-concept/offline-monitor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OfflineMonitorModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
