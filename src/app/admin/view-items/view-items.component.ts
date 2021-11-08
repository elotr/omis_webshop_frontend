import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';


@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {

  items: Item[] = [];
  message = "";

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {

      //this.items = this.itemService.itemsInService;
      this.itemService.getItems().subscribe(itemsFromBackend => {
        this.items = itemsFromBackend;
      });

  }

  onRemoveItem (item: Item) {
    // let index = this.itemService.itemsInService.indexOf(item);
    // this.itemService.itemsInService.splice(index, 1);
    // this.items = this.itemService.itemsInService;
    this.itemService.deleteItem(Number(item.id)).subscribe(() => {
      this.itemService.getItems().subscribe(itemsFromBackend => {
        this.items = itemsFromBackend;
      });
    },
    errorResponse => {
      console.log("sai errori");
      console.log(errorResponse.error.message);
      this.message = errorResponse.error.message;
      setTimeout(()=>this.message = "", 3000)
    
    });

  }

}
