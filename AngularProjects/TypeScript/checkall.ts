import {IEmployee} from './Employee';
var  empall:IEmployee[]=[// FOR CREATING ARRAY OF EMPLOYEES
                        {empId:101,empName:"ABCD",empSalary:10000.00,empStatus:true},
                        {empId:102,empName:"ABCE",empSalary:5000.00,empStatus:true},
                        {empId:103,empName:"ABCF",empSalary:8000.00,empStatus:true},
                        ];
empall.push({empId:104,empName:"ABCG",empSalary:4000.00,empStatus:true});      // 'push' is used to enter element 
empall.splice(1,1);     //"splice" is used to remove a particular employee data)(1,1)=> Starting from index 1 and remove 1 value
for(let data of empall){
console.log(data.empId+" "+data.empName+" "+data.empSalary+" "+data.empStatus);
}