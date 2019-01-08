import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from 'src/app/shared/models/persona.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  personasList: AngularFireList<any>;
  constructor(private fb: AngularFireDatabase) { }

  /**
   * This method will get all personas from the database.
   */
  getPersonas() {
    this.personasList = this.fb.list('personas');
    return this.personasList.snapshotChanges();
  }

  /**
   * This method will add a persona into the database.
   * @param persona is the array of elements of the actual persona.
   */
  addPersona(persona) {
    this.personasList.push(persona);
  }

  editPersona(persona, id) {
    this.personasList.update(persona, id);
  }

  deletePersona(persona) {
    this.personasList.remove(persona);
  }

}
