import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseComponent } from './base/base.component';
import { CustomDirective } from './custom.directive';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DyanmicNotificationComponent } from './dashboard/dyanmic-notification/dyanmic-notification.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { FormComponent } from './form/form.component';
import { Sort } from './sort.pipe';


@NgModule({
  declarations: [
    BaseComponent,
    DashboardComponent,
    FormComponent,
    DyanmicNotificationComponent,
    Sort,
    CustomDirective
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CustomDirective
  ]
})
export class FeatureModule { }
