import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  //categoriesInService = ["watch", "telephone", "laptops"];
  categoriesInService: Category[] = [];


  constructor(private httpClient: HttpClient) { }

  getCategoryTypes() {
    return this.httpClient.get<string[]>("http://localhost:8080/category-type");
  }

  getCategories() {
    return this.httpClient.get<Category[]>("http://localhost:8080/categories");
  }

  addCategory(category: Category) {
    return this.httpClient.post("http://localhost:8080/new-category", category);
  }

  deleteCategory(id: number) {
    return this.httpClient.delete("http://localhost:8080/delete-category/" + id);
  }



}
