import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeathCountsPageRoutingModule } from './death-counts-routing.module';

import { DeathCountsPage } from './death-counts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeathCountsPageRoutingModule
  ],
  declarations: [DeathCountsPage]
})
export class DeathCountsPageModule {}
