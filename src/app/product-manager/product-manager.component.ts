import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    this.getProduct();
  }

  deleteProduct(product){
    this.productService.deleteProduct(product).subscribe(data =>{
     console.log("Da xoa");
     this.getProduct();
    }) ; 
  }
  getProduct(){
    this.productService.getProductsFromApi().subscribe(data => {
      console.log(data);
      this.products = data;
     });
  }

}
