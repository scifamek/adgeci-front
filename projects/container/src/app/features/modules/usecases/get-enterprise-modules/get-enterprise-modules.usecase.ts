import { Injectable } from '@angular/core';
import { IGeneralResponse } from 'adgeci-core-utils/infrastructure/http';
import { BaseUsecase } from 'adgeci-core-utils/usecases';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ModuleAdapter } from '../../adapters/module.adapter';
import { IModuleModel } from '../../models/module.model';

@Injectable()
export class GetEnterpriseModulesUsecase extends BaseUsecase<
  any,
  IModuleModel
> {
  constructor(private moduleAdapter: ModuleAdapter) {
    super();
  }
  call(): Observable<IModuleModel> {
    return this.moduleAdapter.getModules().pipe(
      filter((item) => {
        return item !== undefined && item !== null;
      }),
      map((item: IGeneralResponse<IModuleModel>) => {
        return item.data;
      })
    );
  }
}
