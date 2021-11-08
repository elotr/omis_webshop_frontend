import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  personList: Person[] = [];
  
  // autoriseerimise osa
  isLoggedInChanged = new Subject<boolean>(); 



  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Person[]>("http://localhost:8080/all-people");
  }

  getOnePerson(personCode: string) {
    return this.httpClient.get<Person>("http://localhost:8080/person/" + personCode);
  }

  addPerson(person: Person) {
    return this.httpClient.post("http://localhost:8080/add-person", person);
  }

  editPerson(person: Person) {
    return this.httpClient.post("http://localhost:8080/edit-person", person);
  }

  deletePerson(personCode: string) {
    return this.httpClient.delete("http://localhost:8080/delete-person/" + personCode);
  }

}
