import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Register';
  message:string='';
  name:string='';
  surname:string='';

  public userRegister():void{
    this.message='successful register';
  }
}
