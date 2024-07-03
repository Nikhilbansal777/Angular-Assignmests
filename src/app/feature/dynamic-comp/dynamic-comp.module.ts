import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicCompRoutingModule } from './dynamic-comp-routing.module';
import { DynamicCardComponent } from './dynamic-card/dynamic-card.component';
import { NondynamicbaseComponent } from './nondynamicbase/nondynamicbase.component';


@NgModule({
  declarations: [
    DynamicCardComponent,
    NondynamicbaseComponent
  ],
  imports: [
    CommonModule,
    DynamicCompRoutingModule
  ]
})
export class DynamicCompModule { }
