import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SummonersRiftComponent } from './summoners-rift.component';

const routes: Routes = [
  {
    path: '',
    component: SummonersRiftComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SummonersRiftModuleRoutingModule {}
