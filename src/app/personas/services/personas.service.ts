import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from 'src/app/shared/models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  private url = environment.firebase.databaseURL;
  constructor(private http: HttpClient) { }

  /**
   * This method will get all personas from the database.
   */
  getPersonas(): Observable<any> {
    return this.http.get<any>(this.url + '/personas');
  }

  /**
   * This method will add a persona into the database.
   * @param persona is the array of elements of the actual persona.
   * @param id will set the id number of the object.
   */
  addPersona(persona: {}, id): Observable<Persona[]> {
    return this.http.post<any>(this.url + '/personas/', id + '/' + persona);
  }

}
