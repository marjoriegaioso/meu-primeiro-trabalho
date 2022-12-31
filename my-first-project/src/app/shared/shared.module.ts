import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponentComponent } from './new-component/new-component.component';


@NgModule({
  declarations: [NewComponentComponent, InputComponent],
  exports: [NewComponentComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
