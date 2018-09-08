import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {reducer} from "./payroll.reducer";

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  payroll: reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
