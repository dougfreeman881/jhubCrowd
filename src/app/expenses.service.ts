import { Expense } from './expenses.model';
import { Injectable } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  date = new Date();

  private _expense: Expense[] = [];

  get expense() {
    return [...this._expense];
  }

  addExpense(id: string, desc: string, amount: number, date: Date, imageref: SafeResourceUrl ) {
    console.log('test point');
    const newExpense = new Expense(
      id,
      desc,
      amount,
      date,
      imageref
    );

    this._expense.push(newExpense);
  }

  constructor() { }

}
