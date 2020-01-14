import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowallPageRoutingModule } from './showall-routing.module';

import { ShowallPage } from './showall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowallPageRoutingModule
  ],
  declarations: [ShowallPage]
})
export class ShowallPageModule {}
