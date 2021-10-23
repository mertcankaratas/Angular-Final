import { ProductService } from './../../services/product.service';
import { ProductResponseModel } from './../../models/productResponseModel';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import * as internal from 'stream';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {



  products: Product[] = [];
  dataLoaded=false;
  test:number=0;


  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {

    this.productService.getProducts().subscribe(response =>{
      this.products=response.data
      this.dataLoaded=true;
    });


  }

}
