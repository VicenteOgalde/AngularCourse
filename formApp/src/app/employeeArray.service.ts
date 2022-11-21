import { Injectable } from "@angular/core";
import { EmployeeServiceService } from "./employee-service.service";
import { Employee } from "./employee.model";
@Injectable()
export class EmployeeArrayService{

  constructor(private messageService:EmployeeServiceService){}
    employees:Employee[]=[
        new Employee('jose','mujica','president',8000),
        new Employee('ana','fox','secretary',3200),
        new Employee('sol','moon','admin',5100)
      ];
    
      AddEmployeeService(name:string,surname:string,position:string,salary:number){
        this.messageService.showOkMessage(
          "Employee added: "+"\n"+name
        );
        this.employees.push(new Employee(name,surname,position,salary));

      }

}