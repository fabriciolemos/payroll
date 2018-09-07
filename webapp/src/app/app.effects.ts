import {Injectable} from '@angular/core';
import {Actions, Effect, ofType, ROOT_EFFECTS_INIT} from '@ngrx/effects';
import {PayrollService} from "./payroll-report/payroll.service";
import {map, tap} from "rxjs/operators";
import {defer, Observable, of} from "rxjs";


@Injectable()
export class AppEffects {
  @Effect({dispatch: false})
  init$: Observable<any> = defer(() => of(null)).pipe(
    tap(() => this.payrollService.loadPayroll())
  );

  constructor(private actions$: Actions, private payrollService: PayrollService) {
  }
}
