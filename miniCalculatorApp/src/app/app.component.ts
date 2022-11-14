import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculator App';
  number1:number=0;
  number2:number=0;
  result:number=0;

  public sum():void{
    this.result=Number(this.number1)+Number(this.number2);
  }
  public subtract():void{
    this.result=Number(this.number1)-Number(this.number2);
  }
  public multiply():void{
    this.result=Number(this.number1)*Number(this.number2);
  }
  public divide():void{
    this.result=Number(this.number1)/Number(this.number2);
  }



}
