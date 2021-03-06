import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { AddItemComponent } from './admin/add-item/add-item.component';
import { EditItemComponent } from './admin/edit-item/edit-item.component';
import { ViewItemsComponent } from './admin/view-items/view-items.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './admin/category/category.component';
import { ViewComponent } from './home/view/view.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ViewPeopleComponent } from './admin/view-people/view-people.component';
import { EditPersonComponent } from './admin/edit-person/edit-person.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CartComponent,
    AddItemComponent,
    EditItemComponent,
    ViewItemsComponent,
    AdminHomeComponent,
    CategoryComponent,
    ViewComponent,
    NotFoundComponent,
    RegisterComponent,
    LoginComponent,
    ViewPeopleComponent,
    EditPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
