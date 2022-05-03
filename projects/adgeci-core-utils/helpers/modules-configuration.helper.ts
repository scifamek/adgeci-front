import { IModulesConfigurationData } from 'adgeci-core-utils/models';

export function getServerUrl(data: IModulesConfigurationData) {
  const moduleName: any = data['currentModule'];
  return data['modules'][moduleName]['server'];
}
