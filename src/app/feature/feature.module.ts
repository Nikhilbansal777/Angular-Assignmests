import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { BaseComponent } from './base/base.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    BaseComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
