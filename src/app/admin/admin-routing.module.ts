import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from '../components/add-product/add-product.component';
import { ListProductComponent } from '../components/list-product/list-product.component';

const routes: Routes = [
    {path:'admin',component:ListProductComponent,children:[
      {path:'/add-product',component:AddProductComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
