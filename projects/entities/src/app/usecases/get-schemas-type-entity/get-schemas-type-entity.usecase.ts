import { Injectable } from '@angular/core';
import { IGeneralResponse } from 'adgeci-core-utils/infrastructure/http';
import { BaseUsecase } from 'adgeci-core-utils/usecases';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { SchemaAdapter } from '../../adapters/schema.adapter';
import { IEntitySchemaModel } from '../../models/schema.model';


@Injectable()
export class GetSchemasTypeEntityUsecase extends BaseUsecase<
  any,
  IEntitySchemaModel
> {
  constructor(private schemaAdapter: SchemaAdapter) {
    super();
  }
  call(): Observable<IEntitySchemaModel> {
    return this.schemaAdapter.getSchemasTypeEntity().pipe(
      filter((item) => {
        return item !== undefined && item !== null;
      }),
      map((item: IGeneralResponse<IEntitySchemaModel>) => {
        return item.data;
      })
    );
  }
}
