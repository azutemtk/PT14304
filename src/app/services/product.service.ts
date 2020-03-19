import { Injectable } from '@angular/core';
import { data } from '../mockData';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = data;
  constructor() { }

  getProducts(){
    return this.products;
  }

  removeProduct(id){
    return this.products.filter(product => product.id != id);
  }

  addProduct(product){
    const newProduct = { id: 11, ...product};
    this.products.push(newProduct);
    console.log(this.products)
  }
}
