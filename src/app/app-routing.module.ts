import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router'
import { AddProductComponent } from './add-product/add-product.component'
import { ProductListComponent } from './product-list/product-list.component'
import { ProductManagerComponent } from './product-manager/product-manager.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { NewsListComponent } from './news-list/news-list.component'
// import { EditProductComponent } from './edit-product/edit-product.component'
import { ContactComponent } from './contact/contact.component'
const routes: Routes= [
  {
    path: '', redirectTo:'home', pathMatch:'full'
  },
  {
    path: 'add', component: AddProductComponent
    
  },
  {
    path: 'home', component: ProductListComponent
  },
  {
    path: 'manager', component: ProductManagerComponent 
  },
  {
    path : 'product/:id', component:ProductDetailComponent
  },
  // {
  //   path : 'product/edit/:id', component:EditProductComponent
  // },
  {
    path : 'product', component:ProductListComponent
  },
  {
    path : 'news', component:NewsListComponent
  },
  {
    path : 'manager/add', component:AddProductComponent
  },
  {
    path : 'contact', component:ContactComponent
  },
  {
    path : ''
  },
  {
    path: '**', component: NotFoundComponent
  }
];
@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
