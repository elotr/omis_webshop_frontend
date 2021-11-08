import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { CartService } from '../services/cart.service';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: Item[] = []; // a n y, kui ei tea tyypi,kuid tal on midagi ikka vaja anda.

  constructor(private cartService: CartService, private itemService: ItemService) { 
    
  }

  ngOnInit(): void {
    // subscribe seest saab andmed k'tte, asynkroonne funktsioon
    // 
    this.itemService.getItems().subscribe(itemsFromBackend => {
      this.items = itemsFromBackend;
    });
  }

  onAddToCart(item: Item) {
    this.cartService.cartItemsInService.push(item);
  }

}
