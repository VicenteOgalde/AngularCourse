import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { Employee } from '../employee.model';
import { EmployeeArrayService } from '../employeeArray.service';

@Component({
  selector: 'app-projects-component',
  templateUrl: './projects-component.component.html',
  styleUrls: ['./projects-component.component.css']
})
export class ProjectsComponentComponent implements OnInit {

  constructor(private router:Router,private serviceArray:EmployeeArrayService ) { 
    this.employees=serviceArray.employees;
  }

  ngOnInit(): void {

  }
  backToHome(){
    this.router.navigate(['']);

  }
  name:string='';
  surname:string='';
  position:string='';
  salary:number=0;

  employees:Employee[]=[];
  public registerEmployee():void{
    // this.meService.showOkMessage(`Employee ${this.name} with position ${this.position} added` )
     this.serviceArray.AddEmployeeService(this.name,this.surname,this.position,Number(this.salary));
     this.router.navigate(['']);
 
   }

}
