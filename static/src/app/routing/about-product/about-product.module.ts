import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AboutProductComponent} from '../../component/aboutProduct/about-product/about-product.component';
import {ProductDetailComponent} from '../../component/aboutProduct/product-detail/product-detail.component';
import {HomeComponent} from '../../component/aboutProduct/home/home.component';

const routes: Routes = [
  {
    path: '', component: AboutProductComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'product/:productId', component: ProductDetailComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class AboutProductModule { }
