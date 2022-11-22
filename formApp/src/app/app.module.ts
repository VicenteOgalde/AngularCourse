import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeChildComponent } from './employee-child/employee-child.component';
import { EmployeeServiceService } from './employee-service.service';
import { EmployeeArrayService } from './employeeArray.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProjectsComponentComponent } from './projects-component/projects-component.component';
import { AboutUsComponentComponent } from './about-us-component/about-us-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  {path:'',component:HomeComponentComponent},
  {path:'projects',component:ProjectsComponentComponent},
  {path:'aboutus',component:AboutUsComponentComponent},
  {path:'contact',component:ContactComponentComponent}
]//array of routes for the different component

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeChildComponent,
    HomeComponentComponent,
    ProjectsComponentComponent,
    AboutUsComponentComponent,
    ContactComponentComponent
  ],
  imports: [



  BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    RouterModule.forRoot(appRoutes)//using the array of routes
  ],
  providers: [EmployeeServiceService, EmployeeArrayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
