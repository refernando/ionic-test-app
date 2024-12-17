import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAnimalPage } from './view-animal.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAnimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAnimalPageRoutingModule {}
