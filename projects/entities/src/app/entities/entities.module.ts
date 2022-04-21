import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesRoutingModule } from './entities-routing.module';
import { PagesModule } from '../presentation/pages/pages.module';
import { ServicesModule } from '../services/services.module';
import { SERVER_HOST } from '../injection.tokens';
import { environment } from '../../environments/environment';
import { CrudBuilderModule } from "crud-builder";
@NgModule({
  declarations: [],
  exports: [CrudBuilderModule],
  imports: [CommonModule, EntitiesRoutingModule, PagesModule, ServicesModule, CrudBuilderModule],
  providers: [
    {
      provide: SERVER_HOST,
      useValue: environment.serverHost,
    },
  ],
})
export class EntitiesModule {}
