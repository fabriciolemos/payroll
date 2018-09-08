import {Action} from '@ngrx/store';

export enum PayrollActionTypes {
  LoadPayroll = '[Payroll] Load Payroll',
  LoadPayrollSuccess = '[Payroll] Load Payroll Success'
}

export class LoadPayroll implements Action {
  readonly type = PayrollActionTypes.LoadPayroll;
}

export class LoadPayrollsSuccess implements Action {
  readonly type = PayrollActionTypes.LoadPayrollSuccess;
}

export type PayrollActions = LoadPayroll | LoadPayrollsSuccess;
