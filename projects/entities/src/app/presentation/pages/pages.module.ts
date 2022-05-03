import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AclButtonModule } from 'angular-components-library/button';
import { AclSelectModule } from 'angular-components-library/select';
import { AclCardModule } from 'angular-components-library/card';
import { AclInputModule } from 'angular-components-library/input';
import { CrudBuilderModule } from 'crud-builder';
import { CreateSchemaComponent } from './create-schema/create-schema.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntityListComponent } from './entity-list/entity-list.component';
import { SchemaDetailComponent } from './schema-detail/schema-detail.component';
import { SchemaListComponent } from './schema-list/schema-list.component';
import { MODULES_CONFIG_DATA, MODULES_CONFIG_DATA_IT } from '../../app.constants';
import { UsecasesModule } from '../../usecases/usecases.module';

@NgModule({
  declarations: [
    SchemaListComponent,
    EntityListComponent,
    SchemaDetailComponent,
    DashboardComponent,
    CreateSchemaComponent,
  ],
  providers: [
    {
      provide: MODULES_CONFIG_DATA_IT,
      useValue: MODULES_CONFIG_DATA,
    },
  ],
  imports: [
    AclCardModule,
    AclButtonModule,
    AclInputModule,
    AclSelectModule,
    CrudBuilderModule,

    MatDialogModule,
    MatIconModule,
    MatCardModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsecasesModule
  ],
})
export class PagesModule {}
