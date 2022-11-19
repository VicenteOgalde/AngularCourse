import { Component } from '@angular/core';
import { Employee } from './employee.model';
import { EmployeeServiceService } from './employee-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form App';
  name:string='';
  surname:string='';
  position:string='';
  salary:number=0;
  constructor(private meService:EmployeeServiceService){}

  employees:Employee[]=[
    new Employee('jose','mujica','president',8000),
    new Employee('ana','fox','secretary',3200),
    new Employee('sol','moon','admin',5100)
  ];
  public registerEmployee():void{
    this.meService.showOkMessage(`Employee ${this.name} with position ${this.position} added` )
    this.employees.push(new Employee(this.name,this.surname,this.position,Number(this.salary)));

  }


}
