import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "routing", loadChildren: () => import("../feature/routing-examples/routing-examples.module").then((m) => m.RoutingExamplesModule) },
  { path: "dynamic", loadChildren: () => import("../feature/dynamic-comp/dynamic-comp.module").then((m) => m.DynamicCompModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
