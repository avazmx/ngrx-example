import { ActionReducerMap } from '@ngrx/store';

import * as personasReducers from '../../personas/store/reducers/personas.reducers';

export interface AppState {
    personas: personasReducers.State;
}

export const reducers: ActionReducerMap<AppState> = {
    personas: personasReducers.personasReducer
};
