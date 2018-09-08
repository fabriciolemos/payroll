import {Action} from '@ngrx/store';
import {PayrollActionTypes} from "../actions/payroll.actions";

export interface State {

}

export const initialState: State = {};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    case PayrollActionTypes.LoadPayrollSuccess:
      console.log("reducer");
      return state;

    default:
      return state;
  }
}
