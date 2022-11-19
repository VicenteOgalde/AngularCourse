import { Component, Input, OnInit } from '@angular/core';
import { Employee } from './../employee.model';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() employeeIterate:Employee;//import from the html component to other component
  @Input() index:number;

  featuresArray=[''];
  constructor() { }

  ngOnInit(): void {
  }
  

  addFeature(newFeature:string){
    
    this.featuresArray.push(newFeature);

  }

}
