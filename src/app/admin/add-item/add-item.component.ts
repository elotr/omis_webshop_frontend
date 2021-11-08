import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {


  //categories = ["watch", "telephone", "laptops"];
  categoriesInService : Category[] = []     // pane siia tyyp ka!!! :a n y

  constructor(private itemService: ItemService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoriesInService = this.categoryService.categoriesInService;
  }

  onSubmit(addItemForm: NgForm) {
    console.log(addItemForm);

    if (addItemForm.valid) {
      this.itemService.addItem(addItemForm.value).subscribe();
    }
  }

}
