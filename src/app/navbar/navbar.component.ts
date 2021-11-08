import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    // if (sessionStorage.getItem("user")) {
    //   this.isLoggedIn = true;
    // }  // ?? kui on tyhi, annab false

    this.personService.isLoggedInChanged.subscribe(loggedInValue => {
        this.isLoggedIn = loggedInValue;
    });
    if (sessionStorage.getItem("user")) {
      this.isLoggedIn  = true;
    }
    console.log(this.isLoggedIn);
  }

  onLogout() {
    sessionStorage.removeItem("user");
    //this.isLoggedIn = false;
    this.personService.isLoggedInChanged.next(false);
  }

}
