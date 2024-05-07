import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface IProductForm {
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrl: './form-add.component.css',
})
export class FormAddComponent {
  @Output() onNewProduct: EventEmitter<IProductForm> =
    new EventEmitter<IProductForm>();

  public myForm: FormGroup = this._formBuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    price: [0, [Validators.required, Validators.min(1)]],
  });

  constructor(private _formBuilder: FormBuilder) {}

  isInvalidField(field: string) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  addProduct() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.onNewProduct.emit(this.myForm.value);
    this.myForm.reset();
  }
}
