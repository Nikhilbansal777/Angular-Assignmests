import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RouteParamsComponent } from './route-params/route-params.component';

const routes: Routes = [
  {
    path: "login", component: LoginComponent, canActivate: [authGuard]
  },
  {
    path: "home", component: HomepageComponent, canActivate: [authGuard]
  },
  {
    path: "params/:id", component: RouteParamsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingExamplesRoutingModule { }
