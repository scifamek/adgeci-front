import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateSchemaComponent } from '../create-schema/create-schema.component';
import { SchemaListComponent } from '../schema-list/schema-list.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  static route = 'dashboard';

  constructor(private router: Router) {}

  navigateTo(routeName: string) {
    const routes: any = {
      schemas: SchemaListComponent.route,
      createSchema: CreateSchemaComponent.route,
    };
    const route: string = routes[routeName];
    this.router.navigate([route]);
  }
  ngOnInit(): void {}
}
