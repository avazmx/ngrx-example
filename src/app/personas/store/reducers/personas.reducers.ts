import { Persona } from 'src/app/shared/models/persona.model';
import * as PersonasActions from '../actions/personas.actions';
import * as fromApp from '../../../store/reducers/app.reducers';


export type Action = PersonasActions.All;
const newState = (state, newData) => {
    return Object.assign({}, state, newData);
};

export interface FeatureState extends fromApp.AppState {
    app: State;
}

export interface State {
    persona: Persona;
}

const initialState: Persona = {
    firstName: '',
    lastName: '',
};

export function personasReducer(
    state: any = initialState, action: Action): State {
    console.log(action.type, state);
    switch (action.type) {

        case PersonasActions.PERSONA_INITIALIZE:
            return newState(state, {});

        case PersonasActions.PERSONA_ADD:
            return newState(state, {
                firstName: action.payload,
                lastName: action.payload
            });

        case PersonasActions.PERSONA_EDIT:
            return newState(state, {});

        case PersonasActions.PERSONA_DELETE:
            return newState(state, {});

        default:
            return state;
    }
}
