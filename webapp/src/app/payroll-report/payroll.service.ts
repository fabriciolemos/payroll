import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PayrollService {

  constructor() { }

  loadPayroll() {
    console.log("load");
  }
}
