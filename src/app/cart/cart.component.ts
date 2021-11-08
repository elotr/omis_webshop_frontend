import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { CartService } from '../services/cart.service';
import { EverypayService } from '../services/everypay.service';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Item[] = [];
  sumOfCart = 0;
  errorMessage = "";
  loggedIn = false;

  // constructorisse seo cartService
  constructor(private cartService: CartService, private everypayService: EverypayService, private personService: PersonService) { 

  }

// lehele tulles l2heb k2ima. siin v6tab kellade listi cart.service seest
  ngOnInit(): void {
    // this.cartItems saab väärtuse service-i sees olevast muutujast cartItemsInService
    this.cartItems = this.cartService.cartItemsInService;
    this.calculateSumOfCart ();
    this.personService.isLoggedInChanged.subscribe(loggedInValue => {
      this.loggedIn = loggedInValue;
    });
    if (sessionStorage.getItem("user")) {
      this.loggedIn = true;
    }

  }

  onEmptyCart () {
    this.cartService.cartItemsInService = [];
    this.cartItems = this.cartService.cartItemsInService;
    this.calculateSumOfCart ();
  }

  removeFromCart(item: Item) {
    // let - ei saa mujal kasutada. const - ei saa v''rtust mitu korda anda.
    const index = this.cartService.cartItemsInService.indexOf(item);
    this.cartService.cartItemsInService.splice(index, 1);  //splice kustutab k]ik kui ise ei m22ra 2ra.
    this.cartItems = this.cartService.cartItemsInService;
    this.calculateSumOfCart ();
  }

  // private - ei kasutata html-is
  private calculateSumOfCart () {
    this.sumOfCart = 0;
    // for (Object cartItem: this.cartItems) {}
    this.cartItems.forEach(cartItem => {
      this.sumOfCart = this.sumOfCart + cartItem.price;
    });
  }

  onPayment() {
    this.everypayService.getEverypayLink(this.cartItems).subscribe(
      response => {location.href = response.link},
      error => {
        this.errorMessage = "Unexpected error happened";
        setTimeout(() => this.errorMessage = "", 3000)
      });
  }

}
