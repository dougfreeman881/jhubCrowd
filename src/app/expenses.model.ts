import { SafeResourceUrl } from '@angular/platform-browser';
export class Expense {
    constructor(public id: string,
                public description: string,
                public amount: number,
                public timestamp: Date,
                public imageurl: SafeResourceUrl) { }
}
