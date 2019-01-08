import { Action } from '@ngrx/store';
import { Persona } from '../../../shared/models/persona.model';

export const PERSONA_INITIALIZE = '[Personas]PERSONA_INITIALIZE';
export const PERSONA_ADD = '[Personas]PERSONA_ADD';
export const PERSONA_EDIT = '[Personas]PERSONA_EDIT';
export const PERSONA_DELETE = '[Personas]PERSONA_DELETE';

// ACTIONS
export class PersonaInitialize implements Action {
    readonly type = PERSONA_INITIALIZE;
    constructor(public payload: Persona) { }
}

export class PersonaAdd implements Action {
    readonly type = PERSONA_ADD;
    constructor(public payload: Persona) { }
}

export class PersonaEdit implements Action {
    readonly type = PERSONA_EDIT;
    constructor(public payload: Persona) { }
}

export class PersonaDelete implements Action {
    readonly type = PERSONA_DELETE;
    constructor() { }
}

export type PersonasActions
    = PersonaInitialize
    | PersonaAdd
    | PersonaEdit
    | PersonaDelete;
