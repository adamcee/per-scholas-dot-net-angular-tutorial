import { Component } from '@angular/core';

import { products } from '../products';

console.log('products:');
console.log(JSON.stringify(products));

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

const myObject = {
  myProperty: 'my property on myObject',
};

console.log(myObject.myProperty);

export class ProductListComponent {
  products = products;
  myProperty = 'my property on ProductListComponent';

  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/