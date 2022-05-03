import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleAdapter } from '../adapters/module.adapter';
import { ModuleService } from './module/module.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: ModuleAdapter,
      useClass: ModuleService,
    },
  ],
})
export class InfrastructureModule {}
