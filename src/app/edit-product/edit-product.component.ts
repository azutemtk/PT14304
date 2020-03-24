import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/Product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
product: Product;
  constructor() { }

  ngOnInit() {
  }

}