import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { BaseComponent } from './base/base.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BaseComponent,
    DashboardComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
  ]
})
export class FeatureModule { }
