import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule, LoadRemoteModuleEsmOptions } from '@angular-architects/module-federation';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  // {
  //   path: 'entities',
  //   loadChildren: () =>
  //     import('entities/EntitiesModule').then((m) => m.EntitiesModule),
  // },

  {
    path: 'entities',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4501/remoteEntry.js',
        exposedModule: './EntitiesModule',
        remoteName: 'entities',
      } as LoadRemoteModuleEsmOptions).then((m) => m.EntitiesModule),
  },

  {
    path: 'payments',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4502/remoteEntry.js',
        exposedModule: './PaymentsModule',
        remoteName: 'payments',
      } as LoadRemoteModuleEsmOptions).then((m) => m.PaymentsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
