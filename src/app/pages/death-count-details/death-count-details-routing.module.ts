import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeathCountDetailsPage } from './death-count-details.page';

const routes: Routes = [
  {
    path: '',
    component: DeathCountDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeathCountDetailsPageRoutingModule {}
