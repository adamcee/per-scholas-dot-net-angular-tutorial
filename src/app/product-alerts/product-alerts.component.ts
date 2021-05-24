import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Output() notify = new EventEmitter();
  @Input() product!: Product;
   
  constructor() { }

  ngOnInit() {
  }

}