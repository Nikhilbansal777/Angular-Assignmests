import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingExamplesRoutingModule } from './routing-examples-routing.module';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouteParamsComponent } from './route-params/route-params.component';


@NgModule({
  declarations: [
    LoginComponent,
    HomepageComponent,
    RouteParamsComponent
  ],
  imports: [
    CommonModule,
    RoutingExamplesRoutingModule
  ]
})
export class RoutingExamplesModule { }
