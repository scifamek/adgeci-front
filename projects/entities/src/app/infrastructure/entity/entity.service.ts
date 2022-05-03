import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseModel, IModuleModel  } from 'adgeci-core-utils/models';
import { IEntitySchemaModel } from '../../models/schema.model';
import { SERVER_HOST } from '../../injection.tokens';

@Injectable()
export class EntityService {
  constructor(
    private client: HttpClient,
    @Inject(SERVER_HOST) private host: string
  ) {}

  getFormattedEntitiesByType(page: number, sizePage: number, definition: any, collection: any): Observable<ResponseModel<IEntitySchemaModel[]>> {
    return this.client.get<ResponseModel<IEntitySchemaModel[]>>(
      `${this.host}/v1/get-formatted-entities-by-type`
    );
  }

  getModulesByEnterprise(): Observable<ResponseModel<IModuleModel[]>> {
    return this.client.get<ResponseModel<IModuleModel[]>>(
      `${this.host}/v1/get-modules-by-enterprise`
    );
  }

}
