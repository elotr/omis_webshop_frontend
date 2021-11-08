import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Item } from 'src/app/models/item.model';
import { CategoryService } from 'src/app/services/category.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  //id!: string;
  item!: Item;
  editItemForm!: FormGroup;
  categories: Category[] = [];


  constructor(private route: ActivatedRoute,
    private itemService: ItemService,
    private categoryService: CategoryService,
    private router: Router,) { }

  ngOnInit(): void {
    console.log("hakkan esemeid v]tma");
    this.categories = this.categoryService.categoriesInService;
    this.getItem();
  }

  private getItem() {
    // let _id = this.route.snapshot.paramMap.get("itemId")?.replace("%60", "/");
    // if(_id) {
    //   this.id = _id;
    //   let _item = this.itemService.itemsInService.find(item => item.title == this.id); // find() for loop 
    //   if(_item != undefined) {
    //     this.item = _item;
    const itemId = Number(this.route.snapshot.paramMap.get("itemId"));  // "itemId - app.routing urlis on just itemId parameete, mitte lihtsalt "id".

    if(!isNaN(itemId)) {
      this.itemService.getOneItem(itemId).subscribe((itemFromDb) => {
        this.item = itemFromDb;
        if (this.item) {
          this.editItemForm = new FormGroup({
            id: new FormControl(this.item.id),
            title: new FormControl(this.item.title),
            imgSrc: new FormControl(this.item.imgSrc),
            price: new FormControl(this.item.price),
            category: new FormControl(this.item.category),
            isActive: new FormControl(this.item.isActive),
          });
        }
      });
    }
    //   }
    // }
  }

  onSubmit() {
    if (this.editItemForm.valid) {
      // const index = this.itemService.itemsInService.indexOf(this.item);
      // this.itemService.itemsInService[index] = this.editItemForm.value;
      // this.router.navigateByUrl("/admin/esemed");

      this.itemService.editItem(this.editItemForm.value).subscribe(()=> {
        this.router.navigateByUrl("/admin/esemed");
      });
      
    }
  }
}
