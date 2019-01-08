import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
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
  personaForm: FormGroup;
  personaObject: Persona;
  personas;
  personaSubscription: Subscription;
  personas$: Observable<Persona>;

  constructor(private fb: FormBuilder,
    private store: Store<fromPersonas.State>,
    private personasService: PersonasService) {

  }

  ngOnInit() {
    this.personaForm = this.fb.group({
      firstName: '',
      lastName: '',
    });

    // Subscribe to the store in order to get the updated object.
    // this.personaSubscription = this.store.select('personas').subscribe(personaSubscripted => {
    //   this.personaObject = personaSubscripted;
    // }, err => {
    //   console.log('Error subscribing personas: ' + err);
    // });
    this.personas$ = this.store.select('persona');
    console.log(this.personas$);

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
    console.log('Persona added from form: ' + JSON.stringify(this.personaObject));
    // this.store.dispatch(new fromPersonasActions.PersonaAdd(this.personaObject));
    // console.log('Persona added to store: ' + JSON.stringify(this.personaObject));
    this.personasService.addPersona(this.personaObject);
  }

  deletePersona(persona) {
    this.personasService.deletePersona(persona);
  }

}
