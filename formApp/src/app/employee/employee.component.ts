import { Component, Input, OnInit } from '@angular/core';
import { Employee } from './../employee.model';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() employeeIterate:Employee;
  @Input() index:number;

  constructor() { }

  ngOnInit(): void {
  }

}
