import { Component } from '@angular/core';
import { Employee } from './employee.model';
import { EmployeeServiceService } from './employee-service.service';
import { EmployeeArrayService } from './employeeArray.service';


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

  employees:Employee[]=[];

  constructor(private meService:EmployeeServiceService,private serviceArray:EmployeeArrayService){
    this.employees=serviceArray.employees;
  }


  public registerEmployee():void{
    this.meService.showOkMessage(`Employee ${this.name} with position ${this.position} added` )
    this.serviceArray.AddEmployeeService(this.name,this.surname,this.position,Number(this.salary));

  }


}
