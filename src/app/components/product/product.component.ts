import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {



  products: Product[] = [];
  dataLoaded=false;
  test:number=0;


  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])

      }else{
        this.getProducts();
      }
    })
  }

  getProducts() {

    this.productService.getProducts().subscribe(response =>{
      this.products=response.data
      this.dataLoaded=true;
    });
  }

  getProductsByCategory(categoryId:number) {

    this.productService.getProductsByCategory(categoryId).subscribe(response =>{
      this.products=response.data
      console.log(response)
      this.dataLoaded=true;
    });


  }
}
