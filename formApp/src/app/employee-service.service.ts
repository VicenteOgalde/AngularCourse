import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }

  public showOkMessage(message:string):void{
    alert(message);
  }
}
