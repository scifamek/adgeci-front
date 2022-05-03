import { InjectionToken } from '@angular/core';

export const MODULES_CONFIG_DATA_IT = new InjectionToken(
  'All configuration for Adgeci modules'
);
export const MODULES_CONFIG_DATA = {
  currentModule: 'entities',
  modules: {
    entities: { server: 'http://localhost:4501' },
  },
};
