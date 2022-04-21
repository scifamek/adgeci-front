import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseModel } from 'adgeci-core-utils/models';
import { Observable } from 'rxjs';
import { IEntitySchemaModel } from '../../../models/schema.model';
import { SchemaService } from '../../../services/schema/schema.service';
import { EntityListComponent } from '../entity-list/entity-list.component';
import { SchemaDetailComponent } from '../schema-detail/schema-detail.component';

@Component({
  selector: 'app-schema-list',
  templateUrl: './schema-list.component.html',
  styleUrls: ['./schema-list.component.scss'],
})
export class SchemaListComponent implements OnInit {
  static route = 'schema-list';
  $schemas: Observable<ResponseModel<IEntitySchemaModel[]>>;

  constructor(
    private schemaService: SchemaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.$schemas = this.schemaService.getSchemasTypeEntity();
    this.$schemas.subscribe(console.log);
  }

  goToListItems(schema: any) {
    this.router.navigate(['..', EntityListComponent.route], {
      queryParams: {
        schema: JSON.stringify(schema),
      },
      relativeTo: this.route,
    });
  }

  goToDetail(schema: any) {
    this.router.navigate(['..', SchemaDetailComponent.route], {
      queryParams: {
        schema: JSON.stringify(schema),
      },
      relativeTo: this.route,
    });
  }

  ngOnInit(): void {}
}
