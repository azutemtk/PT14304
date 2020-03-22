import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service'
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/Product';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(){
    this.route.params.subscribe(param => {
      this.product = this.productService.getProduct(param.id);
      console.log(this.product.name);
  })

}
}
