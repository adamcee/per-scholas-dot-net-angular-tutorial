import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../products';

const awesomeProduct = {
  id: 1,
  name: "Awesome Product",
  price: 500,
}

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product;
  
  constructor() { }

  ngOnInit() {
  }

}