import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeathCountDetailsPageRoutingModule } from './death-count-details-routing.module';

import { DeathCountDetailsPage } from './death-count-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeathCountDetailsPageRoutingModule
  ],
  declarations: [DeathCountDetailsPage]
})
export class DeathCountDetailsPageModule {}
