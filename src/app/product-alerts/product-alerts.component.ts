import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.css',
})
export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  @Output() notifyFunc = new EventEmitter();

  onNotify(price: number) {
    this.notifyFunc.emit(price);
  }
}
