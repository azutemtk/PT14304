import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SliderComponent } from './slider/slider.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { AddFormComponent } from './add-form/add-form.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HttpClientModule} from '@angular/common/http';
import { NewsListComponent } from './news-list/news-list.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, SliderComponent, ProductListComponent, CategoryComponent, ProductComponent, AddFormComponent, AddProductComponent, ProductManagerComponent, NotFoundComponent, ProductDetailComponent, NewsListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
