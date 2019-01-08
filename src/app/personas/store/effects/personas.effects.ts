import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import * as fromApp from '../../../store/reducers/app.reducers';


import * as personasActions from '../actions/personas.actions';

import { Persona } from '../../../shared/models/persona.model';
import * as fromPersonasReducer from '../reducers/personas.reducers';

export interface FeatureState extends fromApp.AppState {
    persona: State;
}

export interface State {
    persona: Persona;
}

@Injectable()
export class PersonasEffects {
    constructor(private actions$: Actions,
        private httpClient: HttpClient,
        private store: Store<fromPersonasReducer.FeatureState>) { }
}
