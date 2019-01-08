import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromPersonas from '../../store/reducers/personas.reducers';
import * as fromPersonasActions from '../../store/actions/personas.actions';
import { Persona } from 'src/app/shared/models/persona.model';
import { PersonasService } from '../../services/personas.service';

@Component({
  selector: 'todo-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {
  personaForm = this.fb.group({
    firstName: [''],
    lastName: [''],
  });
  personaSubscription: Subscription;
  personaObject: Persona;
  personas;

  constructor(private fb: FormBuilder,
    private store: Store<fromPersonas.State>,
    private personasService: PersonasService) { }

  ngOnInit() {
    // Subscribe to the store in order to get the updated object.
    this.personaSubscription = this.store.select('personas').subscribe(personaSubscripted => {
      this.personaObject = personaSubscripted;
    }, err => {
      console.log('Error subscribing personas: ' + err);
    });

    // get Personas
    this.personasService.getPersonas().subscribe(personas => {
      this.personas = personas;
      console.log(this.personas);
    }, err => {
      // console.log('Error getting personas: ' + JSON.stringify(err));
      console.log('Error getting personas: ');
      console.log(err);
    });
  }

  onSubmit() {
    this.personaObject = this.personaForm.value;
    console.log(this.personaObject);
    this.store.dispatch(new fromPersonasActions.PersonaAdd(this.personaObject));
    console.log(this.personaObject);
    this.personasService.addPersona(this.personaObject, 3);
  }

}
