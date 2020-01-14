import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowallPage } from './showall.page';

const routes: Routes = [
  {
    path: '',
    component: ShowallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowallPageRoutingModule {}
