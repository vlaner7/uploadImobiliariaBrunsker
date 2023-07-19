import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductBrunskerComponent } from "./views/product-brunsker/product-brunsker.component";
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

const routes: Routes = [
{
  path: "",
  component: HomeComponent
},
{
  path: "products",
  component: ProductBrunskerComponent
},

{
  path: "products/create",
  component: ProductCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
