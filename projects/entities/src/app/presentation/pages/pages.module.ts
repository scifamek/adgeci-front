import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AclButtonModule } from 'angular-components-library/button';
import { AclSelectModule } from 'angular-components-library/select';
import { AclCardModule } from 'angular-components-library/card';
import { AclInputModule } from 'angular-components-library/input';
import { CrudBuilderModule } from 'crud-builder';
import { EmptyRouteComponent } from '../../empty-route/empty-route.component';
import { CreateSchemaComponent } from './create-schema/create-schema.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntityListComponent } from './entity-list/entity-list.component';
import { SchemaDetailComponent } from './schema-detail/schema-detail.component';
import { SchemaListComponent } from './schema-list/schema-list.component';


@NgModule({
    declarations: [
        EmptyRouteComponent,
        SchemaListComponent,
        EntityListComponent,
        SchemaDetailComponent,
        DashboardComponent,
        CreateSchemaComponent,
    ],
    imports: [
    
        AclCardModule,
        AclButtonModule,
        AclInputModule,
        AclSelectModule,
        CrudBuilderModule,

        MatIconModule,
        MatCardModule,
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class PagesModule {}
