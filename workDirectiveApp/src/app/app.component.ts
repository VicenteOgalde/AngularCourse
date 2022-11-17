import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  users:object[]=[];
  title = 'User Register';
  message:string='';
  name:string='';
  surname:string='';
  position:string='';
  booleanRegister:boolean=false;



  public userRegister():void{
    this.booleanRegister=true;
    this.users.push({Name:this.name},{Surname:this.surname},
      {Position:this.position});
    this.message='successful register';
  }
}
