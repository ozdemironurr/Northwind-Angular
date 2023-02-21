import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/modules/product';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
    constructor(private productService:ProductService ){}
    products:Product[]=[]
    dataLoaded:boolean=false;
  ngOnInit(): void {
    this.getProduct();
  }
getProduct()
{ 
  this.productService.getProduct().subscribe(response=>{
    this.products=response.data
    this.dataLoaded=true; 
  })
  

}


}
    


