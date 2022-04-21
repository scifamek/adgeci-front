import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';



@NgModule({
  declarations: [
    IndexComponent
  ],
  exports: [
    IndexComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
