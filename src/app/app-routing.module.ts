import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './admin/add-item/add-item.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { EditItemComponent } from './admin/edit-item/edit-item.component';
import { ViewItemsComponent } from './admin/view-items/view-items.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './admin/category/category.component';
import { ViewComponent } from './home/view/view.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ViewPeopleComponent } from './admin/view-people/view-people.component';
import { EditPersonComponent } from './admin/edit-person/edit-person.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "ostukorv", component: CartComponent },
  { path: "ese/:id", component: ViewComponent },    // /:id ese/midaiganes on tema jaoks valiidne aadress. ese niisama ei ole valiidne aadress
  { path: "admin", component: AdminHomeComponent },
  { path: "admin/lisa-ese", component: AddItemComponent },
  { path: "admin/muuda-ese/:itemId", component: EditItemComponent },
  { path: "admin/esemed", component: ViewItemsComponent },
  { path: "admin/category", component: CategoryComponent },
  { path: "registreeru", component: RegisterComponent },
  { path: "logi-sisse", component: LoginComponent },
  { path: "admin/kasutajad", component: ViewPeopleComponent },
  { path: "admin/muuda-kasutaja/:personCode", component: EditPersonComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
