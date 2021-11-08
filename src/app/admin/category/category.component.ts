import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  categoryTypes: string[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    //this.categories = this.categoryService.categoriesInService;
    this.categoryService.getCategoryTypes().subscribe(types => {this.categoryTypes = types});
    this.categoryService.getCategories().subscribe(categories => {this.categories = categories})
    //console.log(this.categoryTypes);
  }

  onSubmit (addCategoryForm: NgForm) {
    //this.categoryService.categoriesInService.push(addCategoryForm.value.category); // .category - ytleb mis ese, muidu on ObjectObject
    console.log(addCategoryForm);
    if (addCategoryForm.valid) {
      this.categoryService.addCategory(addCategoryForm.value).subscribe();
    }
  }

  onRemoveCategory(category: Category) { 
    // const index = this.categoryService.categoriesInService.indexOf(category);
    // this.categoryService.categoriesInService.splice(index, 1);
    // this.categories = this.categoryService.categoriesInService;
    //console.log(this.categories);
    console.log(category);
    this.categoryService.deleteCategory(Number(category.id)).subscribe();
  }



}
