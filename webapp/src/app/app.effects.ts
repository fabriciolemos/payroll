import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {PayrollService} from "./payroll-report/payroll.service";
import {map, switchMap} from "rxjs/operators";
import {defer, Observable, of} from "rxjs";
import {LoadPayroll, LoadPayrollsSuccess, PayrollActionTypes} from "./actions/payroll.actions";


@Injectable()
export class AppEffects {

  @Effect()
  loadPayroll$ = this.actions$.pipe(
    ofType<LoadPayroll>(PayrollActionTypes.LoadPayroll),
    switchMap(() => {
      return this.payrollService.loadPayroll()
        .pipe(
          map(() => new LoadPayrollsSuccess())
        )
    })
  );

  @Effect()
  init$: Observable<LoadPayroll> = defer(() => of(new LoadPayroll()));

  constructor(private actions$: Actions, private payrollService: PayrollService) {
  }
}
