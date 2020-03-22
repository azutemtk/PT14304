import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

    product: Product = new Product();
  constructor( private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
  }
  addProduct(){
    this.productService.addProduct(this.product);
    this.router.navigate(["/manager"]);
  }
}
