import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGeneralResponse } from 'adgeci-core-utils/infrastructure/http';
import { Observable } from 'rxjs';
import { ModuleAdapter } from '../../adapters/module.adapter';
import { IModuleModel } from '../../models/module.model';

@Injectable()
export class ModuleService extends ModuleAdapter {
  constructor(private httpClient: HttpClient) {
    super();
  }
  getModules(): Observable<IGeneralResponse<IModuleModel>> {
    const URL = 'http://localhost:3000/v1/get-modules-by-enterprise';
    return this.httpClient.get<IGeneralResponse<IModuleModel>>(URL);
  }
}
