import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseModel } from 'adgeci-core-utils/models';
import { SchemaModel } from '../../models/schema.model';
import { SERVER_HOST } from '../../injection.tokens';

@Injectable({
  providedIn: 'root',
})
export class EntityService {
  constructor(
    private client: HttpClient,
    @Inject(SERVER_HOST) private host: string
  ) {}

  getFormattedEntitiesByType(page: number, sizePage: number, definition: any, collection: any): Observable<ResponseModel<SchemaModel[]>> {
    return this.client.get<ResponseModel<SchemaModel[]>>(
      `${this.host}/v1/get-formatted-entities-by-type`
    );
  }
}
