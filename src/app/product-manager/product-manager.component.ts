import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {

  products : Product [];

  constructor(private productService: ProductService) {
    
   }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  removeItem(id){
    this.products = this.products.filter(product => product.id != id);
  }

}
