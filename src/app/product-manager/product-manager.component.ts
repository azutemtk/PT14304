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
    this.productService.getProductsFromApi().subscribe(data => {
      console.log(data);
      this.products = data;
     });
  }

  removeItem(id){
    this.products = this.products.filter(product => product.id != id);
  }

}
