import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-view-people',
  templateUrl: './view-people.component.html',
  styleUrls: ['./view-people.component.css']
})
export class ViewPeopleComponent implements OnInit {

  personList: Person[] = [];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getAll().subscribe(personFromBackend => {
      this.personList = personFromBackend;
    });
  }

  onEdit() {

  }

  onRemove(person: Person) {
    this.personService.deletePerson(person.personCode).subscribe(() => {
      this.personService.getAll().subscribe(peopleFromBackend => {
        this.personList = peopleFromBackend;
      });
    });
  }

}