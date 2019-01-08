import { Persona } from 'src/app/shared/models/persona.model';
import * as PersonasActions from '../actions/personas.actions';
import * as fromApp from '../../../store/reducers/app.reducers';

const newState = persona => {
    return Object.assign(persona);
};

export interface FeatureState extends fromApp.AppState {
    app: State;
}

export interface State {
    persona: Persona;
}

const initialState: State = {
    // Not being used... Shown as an example.
    // Will be used only as an initial state.
    persona: {
        // id: '',
        firstName: '',
        lastName: '',
    }
};

export function personasReducer(state = initialState, action: PersonasActions.PersonasActions) {
    switch (action.type) {

        case PersonasActions.PERSONA_INITIALIZE:
            return newState({});

        case PersonasActions.PERSONA_ADD:
            return newState({
                // id: action.payload.id,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName
            });

        case PersonasActions.PERSONA_EDIT:
            return newState({});

        case PersonasActions.PERSONA_DELETE:
            return newState({});

        default:
            return state;
    }
}
