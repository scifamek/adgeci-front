import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateSchemaComponent } from '../create-schema/create-schema.component';
import { SchemaListComponent } from '../schema-list/schema-list.component';
import { getServerUrl } from 'adgeci-core-utils/helpers';
import { MODULES_CONFIG_DATA_IT } from '../../../app.constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  static route = 'dashboard';
  serverUrl!: string;

  options!: any[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    @Inject(MODULES_CONFIG_DATA_IT) private modulesConfigData: any
  ) {
    this.serverUrl = getServerUrl(modulesConfigData);
    this.options = [
      {
        imgUrl: this.serverUrl + '/assets/views/dashboard/schema.png',
        navigateTo: SchemaListComponent.route,
        display: 'Ver los Esquemas',
      },

      {
        imgUrl: this.serverUrl + '/assets/views/dashboard/new-schema.png',
        navigateTo: CreateSchemaComponent.route,
        display: 'Crear Nuevo Esquema',
      },
      {
        imgUrl: this.serverUrl + '/assets/views/dashboard/config-module.png',
        navigateTo: CreateSchemaComponent.route,
        display: 'Configurar el módulo',
      },
    ];
  }
}
