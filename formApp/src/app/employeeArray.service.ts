import { Employee } from "./employee.model";

export class EmployeeArrayService{
    employees:Employee[]=[
        new Employee('jose','mujica','president',8000),
        new Employee('ana','fox','secretary',3200),
        new Employee('sol','moon','admin',5100)
      ];
    
      AddEmployeeService(name:string,surname:string,position:string,salary:number){
        this.employees.push(new Employee(name,surname,position,salary));

      }

}