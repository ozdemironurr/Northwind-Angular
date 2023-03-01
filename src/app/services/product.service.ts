import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
import { Product } from 'src/app/modules/product';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../modules/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl="https://localhost:7078/api/Products/getall"
  constructor(private httpClent:HttpClient) { }

 

  getProduct():Observable<ListResponseModel<Product>>
{
  return this.httpClent.get<ListResponseModel<Product>>(this.apiUrl);
  
}
}
