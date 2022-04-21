import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEntitySchemaModel } from '../../models/schema.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseModel } from 'adgeci-core-utils/models';
import { SERVER_HOST } from '../../injection.tokens';

@Injectable()
export class AuthenticationService {
  constructor(
    private client: HttpClient,
    @Inject(SERVER_HOST) private host: string
  ) {}

  getFormattedEntitiesByType(
    page: number,
    sizePage: number,
    definition: any,
    collection: any
  ): Observable<ResponseModel<IEntitySchemaModel[]>> {
    return this.client.get<ResponseModel<IEntitySchemaModel[]>>(
      `${this.host}/v1/entity`
    );
  }
}
