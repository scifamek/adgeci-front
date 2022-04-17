import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { CreateSchemaComponent } from './presentation/pages/create-schema/create-schema.component';
import { DashboardComponent } from './presentation/pages/dashboard/dashboard.component';
import { EntityListComponent } from './presentation/pages/entity-list/entity-list.component';
import { SchemaDetailComponent } from './presentation/pages/schema-detail/schema-detail.component';
import { SchemaListComponent } from './presentation/pages/schema-list/schema-list.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: DashboardComponent.route,
    component: DashboardComponent,
  },
  {
    path: CreateSchemaComponent.route,
    component: CreateSchemaComponent,
  },

  {
    path: SchemaListComponent.route,
    component: SchemaListComponent,
  },

  {
    path: EntityListComponent.route,
    component: EntityListComponent,
  },
  {
    path: SchemaDetailComponent.route,
    component: SchemaDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
