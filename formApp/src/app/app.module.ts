import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeChildComponent } from './employee-child/employee-child.component';
import { EmployeeServiceService } from './employee-service.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeChildComponent
  ],
  imports: [


  BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
