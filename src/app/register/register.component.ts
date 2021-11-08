import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from '../models/person.model';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  personList: Person[] = [];
  passwordNoMatch = "";
  registerSuccess = "";
  errorMessage = "";

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.personList = this.personService.personList;
  }

  register(registerPerson: NgForm) {

    // saadan andmed backendi, et lisada uus isik (PersonController). Seal kontrollitakse isiku (isikukoodi) olemasolu.
    // Kui on olemas, saadetakse teade, et isik on olemas.
    
    if (registerPerson.valid && registerPerson.value.password === registerPerson.value.passwordConfirm) {
      this.personService.addPerson(registerPerson.value).subscribe(
        () => {},
        errorResponse => {
          //this.errorMessage = errorResponse.error.message;
          //setTimeout(() => this.errorMessage = "", 5000)
          registerPerson.reset();
          this.showMessage(errorResponse.error.message);
        }
      );
      registerPerson.reset();
      this.registerSuccess = "Oled registreeritud!"
    } else if (registerPerson.value.password !== registerPerson.value.passwordConfirm) {
      this.errorMessage = "Paroolid ei kattu. Palun sisestage uuesti.";
      setTimeout(() => this.errorMessage = "", 5000)
    } else if (registerPerson.invalid) {
      this.errorMessage = "Palun täitke kõik väljad."
    }

  }

  showMessage (message: string) {
    this.errorMessage = message;
    setTimeout(() => this.errorMessage = "", 5000);
  }

}
