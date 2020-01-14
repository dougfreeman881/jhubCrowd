import { Component, OnInit, Output, EventEmitter, NgModule } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {Plugins, Capacitor, CameraResultType, CameraSource} from '@capacitor/core';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { ExpenseService } from '../expenses.service';
import { Expense } from '../expenses.model';
import { NgForm, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.page.html',
  styleUrls: ['./expenses.page.scss'],
})

@NgModule({
  imports: [
    FormsModule
  ]
})

export class ExpensesPage implements OnInit {
  @Output() imagePick = new EventEmitter<string>();
  form: FormGroup;
  amount: number;
  id: string;
  description: string;
  expenseService: ExpenseService;
  loadedExpenses: Expense[];
  testarray: Expense[];
  selectedImage: string;
  photo: SafeResourceUrl;
  date: Date;

  constructor(private sanitizer: DomSanitizer, private expensesService: ExpenseService, private router: Router) {  }

  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    this.photo = image.dataUrl;
  }

  ngOnInit() {
    this.loadedExpenses = this.expensesService.expense;
  }

  onSubmit(form: NgForm) {
    this.id = Math.random().toString();
    this.date = new Date();

    this.expensesService.addExpense(
        this.id,
        form.value.description,
        form.value.amount,
        this.date,
        this.photo
        );

    form.reset();
    this.router.navigate(['/showall']);
  }

  testRoutine(id: string, desc: string, amount: number, date: Date, imageref: SafeResourceUrl ) {
    const newExpense = new Expense(
      id,
      desc,
      amount,
      date,
      imageref
    );

    this.loadedExpenses.push(newExpense);
  }


}




defineCustomElements(window);
