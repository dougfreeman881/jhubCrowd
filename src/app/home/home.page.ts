import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expenses.service';
import { Expense } from '../expenses.model';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  loadedExpenses: Expense[];
  totalExpense: number;
  arrayLength: number;
  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.loadedExpenses = this.expenseService.expense;
  }
  ionViewWillEnter() {
    this.loadedExpenses = this.expenseService.expense;
    this.arrayLength = this.loadedExpenses.length;
    this.totalExpense = 0;
    for (let i = 0; i < this.arrayLength; i++) {
      this.totalExpense = this.totalExpense + this.loadedExpenses[i].amount;
      // console.log(this.loadedExpenses[i].amount);
    }
    this.totalExpense = parseFloat(this.totalExpense.toFixed(2));
  }
}
