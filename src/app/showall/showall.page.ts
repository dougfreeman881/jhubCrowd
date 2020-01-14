import { ExpenseService } from '../expenses.service';
import { Expense } from '../expenses.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showall',
  templateUrl: './showall.page.html',
  styleUrls: ['./showall.page.scss'],
})
export class ShowallPage implements OnInit {
  loadedExpenses: Expense[];
  totalExpense: number;
  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.loadedExpenses = this.expenseService.expense;
  }
  ionViewWillEnter() {
    this.loadedExpenses = this.expenseService.expense;
    const arrayLength = this.loadedExpenses.length;
    this.totalExpense = 0;
    for (let i = 0; i < arrayLength; i++) {
      this.totalExpense = this.totalExpense + this.loadedExpenses[i].amount;
      // console.log(this.loadedExpenses[i].amount);
    }
    this.totalExpense = parseFloat(this.totalExpense.toFixed(2));
  }


}
