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

  constructor() { }

  ngOnInit(): void {
  }

}
