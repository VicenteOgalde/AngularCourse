import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee-child',
  templateUrl: './employee-child.component.html',
  styleUrls: ['./employee-child.component.css']
})
export class EmployeeChildComponent implements OnInit {

  @Output() featuresEmployee= new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  addFeature(value:string){
    this.featuresEmployee.emit(value);
  }

}
