import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpensesPageRoutingModule } from './expenses-routing.module';

import { ExpensesPage } from './expenses.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    ExpensesPageRoutingModule
  ],
  declarations: [ExpensesPage]
})
export class ExpensesPageModule {}
