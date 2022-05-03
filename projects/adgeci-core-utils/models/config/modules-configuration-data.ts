export interface IModulesConfigurationData {
  currentModule: string;
  modules: {
    [index: string]: { server: string };
  };
}
