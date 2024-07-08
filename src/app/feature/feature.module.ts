import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { BaseComponent } from './base/base.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DyanmicNotificationComponent } from './dashboard/dyanmic-notification/dyanmic-notification.component';


@NgModule({
  declarations: [
    BaseComponent,
    DashboardComponent,
    FormComponent,
    DyanmicNotificationComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FeatureModule { }
