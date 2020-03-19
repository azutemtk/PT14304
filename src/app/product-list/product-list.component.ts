import { Component, OnInit } from '@angular/core';
import { Data } from '../Component/';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
product = Data;
}import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products: Product[] = [
    {
      id: 1,
      name: "Item 1",
      price: 24.99,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      status: false,
      img: 'https://dummyimage.com/275x175/000/fff'
    },
    {
      id: 2,
      name: "Item 2",
      price: 24.99,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      status: false,
      img: 'https://dummyimage.com/275x175/000/fff'
    },
    {
      id: 3,
      name: "Item 3",
      price: 24.99,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      status: false,
      img: 'https://dummyimage.com/275x175/000/fff'
    }
]
  changeStatus(){
    // this.product.status = !this.product.status;
  }
  changeName(e){
    // this.product.name = e.target.value;
  }
  removeItem(id){
    this.products = this.products.filter(product => product.id != id);
  }
}
