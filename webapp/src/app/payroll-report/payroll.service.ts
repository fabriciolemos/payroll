import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PayrollEntry} from "../models/payroll-entry";

@Injectable({
  providedIn: 'root'
})
export class PayrollService {

  constructor(private http: HttpClient) {
  }

  loadPayroll(): Observable<PayrollEntry[]> {
    return this.http.get<PayrollEntry[]>("http://localhost:8080/api/payroll")
  }
}
