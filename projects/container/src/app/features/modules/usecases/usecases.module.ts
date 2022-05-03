import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { GetEnterpriseModulesUsecase } from './get-enterprise-modules/get-enterprise-modules.usecase';

@NgModule({
  declarations: [],
  imports: [CommonModule, InfrastructureModule],
  providers: [GetEnterpriseModulesUsecase],
})
export class UsecasesModule {}
