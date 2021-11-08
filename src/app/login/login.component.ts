import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from '../models/person.model';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  personList: Person[] = [];
  errorMessage = "";


  constructor(private personService: PersonService,
    private router: Router) { }

  ngOnInit(): void {
    // this.personService.getAll().subscribe(personFromBackend => {
    //   this.personList = personFromBackend;
    // });
  }

  login(loginForm: NgForm) {

    if (loginForm.valid) {
      // let personCodeCheck = this.personList.find(person => person.personCode == loginForm.value.personCode);
      // console.log(personCodeCheck);

      // if (personCodeCheck) {
      //   console.log(personCodeCheck.personCode);
      //   if (personCodeCheck.password == loginForm.value.password) {
      //     sessionStorage.setItem("user", loginForm.value.personCode);
      //     this.personService.isLoggedInChanged.next(true);
      //     this.router.navigateByUrl("/")
      //     console.log("k6ik 6ige, oled sisse loginud");
      //   } else {
      //     this.errorMessage = "Vale parool. Sisesta uuesti.";
      //   }
      // } else {
      //   this.errorMessage = "Isikukood on vale või kasutajat ei eksisteeri.";
      // }

      this.personService.getOnePerson(loginForm.value.personCode).subscribe(
        person => {
          if (loginForm.value.password === person.password) {
            sessionStorage.setItem("user", loginForm.value.personCode);
            this.personService.isLoggedInChanged.next(true);
            this.router.navigateByUrl("/");
          } else {
            this.errorMessage = "Parool on vale. Proovige uuesti."
          }
        },
        errorResponse => {
          loginForm.reset();
          this.errorMessage = errorResponse.error.message;
          setTimeout(() => this.errorMessage = "", 5000);
        }
      );
    } else {
      this.errorMessage = "Täida kõik väljad!"
    }
    
  }

}
// sessionStorage.setItem("", loginForm.value.personCode); - paneb asjad kohalikku? m'llu. Vt edasi navbari, seal saab k'tte