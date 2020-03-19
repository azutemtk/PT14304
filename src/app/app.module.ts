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

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SliderComponent, ProductListComponent, CategoryComponent, ProductComponent, AddFormComponent, AddProductComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
