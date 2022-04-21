import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentsModule } from './payments/payments.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule,
    //  PaymentsModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
