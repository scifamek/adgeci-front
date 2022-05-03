import { IGeneralResponse } from 'adgeci-core-utils/infrastructure/http';
import { Observable } from 'rxjs';
import { IModuleModel } from '../models/module.model';

export abstract class ModuleAdapter {
  abstract getModules(): Observable<IGeneralResponse<IModuleModel>>;
}
