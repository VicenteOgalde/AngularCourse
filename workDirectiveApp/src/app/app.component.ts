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



  public userRegister():void{
    this.users.push({Name:this.name},{Surname:this.surname});
    this.message='successful register';
  }
}
