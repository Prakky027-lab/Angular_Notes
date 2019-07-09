import { Component, OnInit } from "@angular/core";
import {EmployeeService} from './app.employeeservice';
@Component({
selector:'add-comp',
templateUrl:'addemployee.html'
})

export class AddEmployeeComponent implements OnInit{
    empAll:any[]=[];
    constructor(private service:EmployeeService){}
    ngOnInit(){
        this.service.getAllEmployee().subscribe((data:any)=>this.empAll=data);

        }
        
        deleteEmployee(data:number){
            this.empAll.splice(data,1); //To delete the data
    }
}