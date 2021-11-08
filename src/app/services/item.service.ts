import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsInService: Item[] = [];

  constructor(private httpClient: HttpClient) { }

  getItems() {
    // Tagastab Observable objekti, mis l'heb 8080 kysima ja saab tagasi selle, mida seal API otsas tagastatakse. Siin peab ytlema, mis on tagastatava tyyp
    return this.httpClient.get<Item[]>("http://localhost:8080/items"); //Items massiiv!!!
  }

  getOneItem(id: number) {
    return this.httpClient.get<Item>("http://localhost:8080/view-item/" + id);
  }

  deleteItem(id: number) {
    return this.httpClient.delete("http://localhost:8080/delete-item/" + id);
  }

  addItem(item: Item) {
    return this.httpClient.post("http://localhost:8080/add-item/", item);
  }

  editItem(item: Item) {
    return this.httpClient.post("http://localhost:8080/edit-item/", item);
  }
}
