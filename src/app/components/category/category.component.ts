import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  category1:any={categoryId:1,categoryName:"Bardak"}
  category2:any={categoryId:2,categoryName:"Mause"}
  category3:any={ categoryId:3, categoryName:"Kalem"}
  category4:any={ categoryId:4,categoryName:"Laptop"}
  category5:any={categoryId:5,categoryName:"Telefon"}
  categories=[
    this.category1,
    this.category2,
    this.category3,
    this.category4,
    this.category5]


}
