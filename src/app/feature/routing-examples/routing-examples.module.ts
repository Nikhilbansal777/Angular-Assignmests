import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingExamplesRoutingModule } from './routing-examples-routing.module';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouteParamsComponent } from './route-params/route-params.component';
import { Childpage1Component } from './childpage1/childpage1.component';
import { Childpage2Component } from './childpage2/childpage2.component';


@NgModule({
  declarations: [
    LoginComponent,
    HomepageComponent,
    RouteParamsComponent,
    Childpage1Component,
    Childpage2Component
  ],
  imports: [
    CommonModule,
    RoutingExamplesRoutingModule
  ]
})
export class RoutingExamplesModule { }
