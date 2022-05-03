import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './authentication/authentication.service';
import { EntityService } from './entity/entity.service';
import { SchemaService } from './schema/schema.service';
import { SchemaAdapter } from '../adapters/schema.adapter';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    AuthenticationService,
    EntityService,
    { provide: SchemaAdapter, useClass: SchemaService },
  ],
})
export class InfrastructureModule {}
