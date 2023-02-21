import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
import { Product } from 'src/app/modules/product';
import { productResponseModel } from 'src/app/modules/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl="https://localhost:7078/api/Products/getall"
  constructor(private httpClent:HttpClient) { }
  products:Product[]=[]
  productResponseModel:productResponseModel={data:this.products,succes:true,message:""}

  getProduct():Observable<productResponseModel>
{
  return this.httpClent.get<productResponseModel>(this.apiUrl);
  
}
}
