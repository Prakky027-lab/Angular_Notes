import {Component} from '@angular/core';

@Component({
    selector:'add-emp',
    templateUrl:'app.add.html'
})
export class AddEmployeeComponent{
    empId:number;
    empName:string;
    empSal:number;
    empDep:string;

    emId:number;
    emName:string;
    emSal:number;
    emDep:string;
    x:number;
    empAll:any[]=[
        {empId:1001,empName:"Rahul",empSal:9000,empDep:"Java"},
        {empId:1002,empName:"Sachin",empSal:19000,empDep:"OraApps"},
        {empId:1003,empName:"Vikash",empSal:29000,empDep:"BI"},
    ];  

    addEmployee():any{
        this.empAll.push({empId:this.empId,empName:this.empName,empSal:this.empSal,empDep:this.empDep});   //TO ADD DATA TO ARRAY BY TAKING VALUE FROM USER
        console.log("Employee All Added*****"+this.empAll);   //TO PRINT ALL THE ARRAY VALUES
    }

    deleteEmployee(data:number):any{
        this.empAll.splice(data,1); //To delete the data
    }
    
    updateEmployee(data:number):any{
        this.x=data;
        this.emId=this.empAll[data].empId;
        this.emName=this.empAll[data].empName;
        this.emSal=this.empAll[data].empSal;
        this.emDep=this.empAll[data].empDep;
    }


    updateValue():any{
        this.empAll.splice(this.x,1,{empId:this.emId,empName:this.emName,empSal:this.emSal,empDep:this.emDep});
}

}