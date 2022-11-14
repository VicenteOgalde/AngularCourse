import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  //template:'<p>here is an employee</p>',
styleUrls: ['./employee.component.css']
  //styles:['p{background-color: aqua;}']
})
//this way you can write an inline component only if you app is very simple and avoid use the css and html component.
export class EmployeeComponent implements OnInit {

  name:string='Vicente';
  private age:number=33;

  inputProperty:boolean=false; //property binding with html component
  registerUser:boolean=false;

  registerText:string='Zero registers';

  getRegisterUser(){
    this.registerUser=true;
  }
  setRegisterUser(event:Event){//taking the event from the input 
    //alert("register user ok")
    if((<HTMLInputElement>event.target).value=='yes'){//casting the html element
      this.registerText='register user ok';
    }else{
      this.registerText='Not register';
    }
    
  }

  public getAge():number{
    return this.age;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
