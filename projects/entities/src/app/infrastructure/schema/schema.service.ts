import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseModel } from 'adgeci-core-utils/models';
import { SERVER_HOST } from '../../injection.tokens';
import { IEntitySchemaModel } from '../../models/schema.model';
import { IGeneralResponse } from 'adgeci-core-utils/infrastructure/http';

@Injectable()
export class SchemaService {
  constructor(
    private client: HttpClient,
    @Inject(SERVER_HOST) private host: string
  ) {}

  getSchemasTypeEntity(): Observable<IGeneralResponse<IEntitySchemaModel[]>> {
    return this.client.get<IGeneralResponse<IEntitySchemaModel[]>>(
      `${this.host}/v1/get-schemas-type-entity`,
      {
        reportProgress: true
      }
    );
  }

  getSchemaDefinition(
    schema: string
  ): Observable<ResponseModel<any>> {
    return this.client.get<ResponseModel<any>>(
      `${this.host}/v1/get-schema-definition/${schema}`
    );
  }
}
