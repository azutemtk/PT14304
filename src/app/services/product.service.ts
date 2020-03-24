import { Injectable } from '@angular/core';
import { data } from '../mockData';
import { HttpClient} from '@angular/common/http';
import { Observable  } from 'rxjs';
import { Product } from '../product'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = data;
  api = 'http://5c999ea71a4c360014a0ff5b.mockapi.io/products';
  constructor(
    private http : HttpClient,
  ) { }

  getProducts(){
    return this.products;
  }

  getProductFromApi(): Observable<Product[]>{
    return this.http.get<Product[]>(this.api);
  }

  getProduct(id){
    // return this.products.find(product => product.id == id);
    return this.http.get<Product>(`${this.api}/${id}`)
  }

  removeProduct(id){
    this.products.filter(product => product.id != id);
    // this.products = this.products.filter(product => product.id != id);
    // return this.products.filter(product => product.id !== id);
  }

  addProduct(product){
    const newProduct = { id: 11, ...product};
    this.products.push(newProduct);
    console.log(this.products)
  }

  updateProduct(): Observable<Product>{
  return this.http.put<Product>(`{$this.api}/${product.id}`,product);
  }
}
