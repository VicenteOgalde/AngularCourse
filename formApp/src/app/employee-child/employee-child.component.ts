import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';


@Component({
  selector: 'app-employee-child',
  templateUrl: './employee-child.component.html',
  styleUrls: ['./employee-child.component.css']
})
export class EmployeeChildComponent implements OnInit {

  @Output() featuresEmployee= new EventEmitter<string>();//export event to other component

  constructor(private meService:EmployeeServiceService) { }

  ngOnInit(): void {
  }
  addFeature(value:string){
    alert(this.meService.showOkMessage(`Added new feature "${value}"`))
    this.featuresEmployee.emit(value);
  }

}
