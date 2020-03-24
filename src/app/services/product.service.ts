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
  api = 'https://5e79b4b817314d00161333da.mockapi.io/product';
  constructor(
    private http : HttpClient,
  ) { }

  getProducts(){
    return this.products;
  }

  getProductsFromApi(): Observable<Product[]>{
    return this.http.get<Product[]>(this.api);
  }

  // getProduct(id){
  //   return this.products.find(product => product.id == id);
  // }

  getProductFromApi(id): Observable<Product>{
    return this.http.get<Product>(`${this.api}/${id}`);
    // return this.products.find(product => product.id == id);
  }

  // removeProduct(id){
  //   this.products.filter(product => product.id != id);
  //   this.products = this.products.filter(product => product.id != id);
  //   return this.products.filter(product => product.id !== id);
  // }

  addProduct(product){
    return this.http.post<Product>(`${this.api}`, product);
  }

  updateProduct(product){
     return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }

  deleteProduct(product){
    return this.http.delete<Product>(`${this.api}/${product.id}`,product)
  }
}
