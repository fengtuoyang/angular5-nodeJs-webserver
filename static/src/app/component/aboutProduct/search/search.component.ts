import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../shared/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  categories: any;

  formModel: FormGroup;

  constructor(private productService: ProductService,
    private fb: FormBuilder) {
    this.formModel = fb.group({
      title: ['', Validators.minLength(1)],
      price: [null, this.positiveNumberValidator],
      category: ['-1']
    });
  }

  ngOnInit() {
    this.categories = this.productService.getAllCategories();
  }

  positiveNumberValidator(control: FormControl): any {
    if (parseInt(control.value) > 0) {
      return null;
    } else {
      return { positiveNumber: '请输入一个正数' }
    }
  }

  onSearch() {
    let _this = this;
    if (this.formModel.valid) {
      this.productService.search(this.formModel.value).
        subscribe(
          product => {
            _this.productService.searchEvent.emit(product);
          }
        );
    }
  }

}
