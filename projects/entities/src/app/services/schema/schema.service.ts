import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseModel } from 'adgeci-core-utils/models';
import { SERVER_HOST } from '../../injection.tokens';
import { SchemaModel } from '../../models/schema.model';

@Injectable({
  providedIn: 'root',
})
export class SchemaService {
  constructor(
    private client: HttpClient,
    @Inject(SERVER_HOST) private host: string
  ) {}

  getSchemasTypeEntity(): Observable<ResponseModel<SchemaModel[]>> {
    return this.client.get<ResponseModel<SchemaModel[]>>(
      `${this.host}/v1/get-schemas-type-entity`
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
