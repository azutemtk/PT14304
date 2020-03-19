import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  selected : Product;
  products : Product [];

  constructor( 
    private productService: ProductService
     ) { 

     }
 
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
 
  removeItem(id){
    this.products = this.productService.removeProduct(id);
    // this.products = this.productService.removeProduct(id);
  }

  showDetail(product){
  this.selected = product;
  }
  
  close(){
    this.selected = null;
  }
}