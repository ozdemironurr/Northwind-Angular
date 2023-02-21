import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',//    ./ aynı classın içinde demek
  styleUrls: ['./app.component.css']  // component ile ilgili cssleri koydugumuz yer
})
export class AppComponent {
  title:string = 'northwind';
  user:string="Onur"
 

}
 
