import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicCardComponent } from './dynamic-card/dynamic-card.component';
import { NondynamicbaseComponent } from './nondynamicbase/nondynamicbase.component';

const routes: Routes = [
  { path: "", component: NondynamicbaseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicCompRoutingModule { }
