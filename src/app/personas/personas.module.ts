import { NgModule } from '@angular/core';

import { PersonaComponent } from './components/persona/persona.component';

import { CommonModule } from '@angular/common';
import { PersonasRoutingModule } from './personas-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PersonasEffects } from './store/effects/personas.effects';
import * as fromPersonas from './store/reducers/personas.reducers';

@NgModule({
  declarations: [
    PersonaComponent
  ],
  imports: [
    CommonModule,
    PersonasRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('personas', fromPersonas.personasReducer),
    EffectsModule.forFeature([PersonasEffects]),
  ],
  providers: [],
})

export class PersonasModule { }
