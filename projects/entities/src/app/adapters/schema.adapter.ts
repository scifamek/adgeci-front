import { IGeneralResponse } from 'adgeci-core-utils/infrastructure/http';
import { Observable } from 'rxjs';
import { IEntitySchemaModel } from '../models/schema.model';
let a: IGeneralResponse<IEntitySchemaModel>;
export abstract class SchemaAdapter {
  abstract getSchemasTypeEntity(): Observable<
    IGeneralResponse<IEntitySchemaModel>
  >;

  abstract getSchemaDefinition(
    schema: string
  ): Observable<IGeneralResponse<any>>;
}
