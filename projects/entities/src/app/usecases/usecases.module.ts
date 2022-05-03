import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { GetSchemasTypeEntityUsecase } from './get-schemas-type-entity/get-schemas-type-entity.usecase';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InfrastructureModule
  ],
  providers:[
    GetSchemasTypeEntityUsecase
  ]
})
export class UsecasesModule { }
