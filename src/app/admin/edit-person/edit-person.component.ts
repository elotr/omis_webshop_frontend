import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {

  editPersonForm!: FormGroup;
  person!: Person;

  constructor(private route: ActivatedRoute,
    private personService: PersonService) { }

  ngOnInit(): void {
    this.getPerson();
  }

  private getPerson() {
    const personCode = this.route.snapshot.paramMap.get("personCode");

    if(personCode) {
      this.personService.getOnePerson(personCode).subscribe((personFromDb) => {
        this.person = personFromDb;
        if (this.person) {
          this.editPersonForm = new FormGroup ({
            personCode: new FormControl(this.person.personCode),
            password: new FormControl(this.person.password),
            firstName: new FormControl(this.person.firstName),
            lastName: new FormControl(this.person.lastName),
            eMail: new FormControl(this.person.eMail),
            phoneNumber: new FormControl(this.person.phoneNumber)
          });
        }
      });
    }
  }

  onSubmit() {
    
    this.personService.editPerson(this.editPersonForm.value).subscribe();
    console.log("this.person " + this.person);
    console.log("formvalue " + this.editPersonForm.value);
  }

}