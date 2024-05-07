import { Injectable } from '@angular/core';
import { Product, products } from './products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  _products: Product[] = products;

  constructor() {}

  addProduct(product: Product) {
    this._products.push(product);
    console.log(this._products);
  }

  getItems() {
    return [...this._products];
  }
}
