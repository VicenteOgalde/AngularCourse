export class Employee{

    constructor(name:string,surname:string,position:string,salary:number){
        this.name=name;
        this.surname=surname;
        this.position=position;
        this.salary=salary;
    }
    name:string='';
    surname:string='';
    position:string='';
    salary:number=0;
}