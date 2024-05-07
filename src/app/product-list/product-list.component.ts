import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { IProductForm } from '../form-add/form-add.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  constructor(private productsService: ProductsService) {}

  get products() {
    return this.productsService.getItems();
  }

  addProduct(product: IProductForm) {
    const productsLength = this.products.length;
    const highestId = this.products[productsLength - 1].id;
    this.productsService.addProduct({
      description: product.description,
      id: highestId + 1,
      name: product.name,
      price: product.price,
    });
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify(price: number) {
    window.alert('You will be notified with ' + price);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
