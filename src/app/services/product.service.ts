import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "https://localhost:44312/api/products/getall";
  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>> {

   return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl)


  }

}
