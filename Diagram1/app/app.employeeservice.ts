import{Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
    providedIn:'root'
})
export class EmployeeService{
    constructor(private http:HttpClient){}
    getAllEmployee(){
      return this.http.get("assets/employee.json"); //inside get we give the url from which we want to get json data
                                                                                                // in place of "asserts/employee.json"
    }
}