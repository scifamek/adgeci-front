import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MODULES_CONFIG_DATA, MODULES_CONFIG_DATA_IT } from './app.constants';
import { initApp } from './app.initializer';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: MODULES_CONFIG_DATA_IT,
      useValue: MODULES_CONFIG_DATA,
    },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: () => initApp(),
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
