import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: Product;
  constructor( private route: ActivatedRoute,
    private productService: ProductService,
    private router : Router) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(){
    this.route.params.subscribe(param => {
        this.productService.getProductFromApi(param.productID).subscribe(data => this.product = data);
    })
  }

  updateProduct(){
       this.productService.updateProduct(this.product).subscribe(data => {
         this.router.navigateByUrl("/manager")
       });
  }
  
}
