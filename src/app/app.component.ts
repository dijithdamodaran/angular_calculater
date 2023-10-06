import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_calculater';
  num1:number=0
  num2:number=0
  additionresult:number=0
  subtractionresult:number=0
  multiplicationresult:number=0
  divitionresult:number=0

  onaddition(){
    this.additionresult=this.num1+this.num2;
  }
 
  onsubtraction(){
    this.subtractionresult=this.num1-this.num2;
  }

  onmultiplication(){
    this.multiplicationresult=this.num1*this.num2;
  }

  ondivition(){
    this.divitionresult=this.num1/this.num2;
  }

}
