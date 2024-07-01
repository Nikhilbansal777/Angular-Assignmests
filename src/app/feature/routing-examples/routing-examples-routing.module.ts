import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { Childpage1Component } from './childpage1/childpage1.component';
import { Childpage2Component } from './childpage2/childpage2.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RouteParamsComponent } from './route-params/route-params.component';

const routes: Routes = [
  {
    path: "login", component: LoginComponent, canActivate: [authGuard]
  },
  {
    path: "home", component: HomepageComponent, canActivate: [authGuard], children: [
      { path: "", component: Childpage1Component },
      { path: "child", component: Childpage2Component }
    ]
  },
  {
    path: "params", component: RouteParamsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingExamplesRoutingModule { }
