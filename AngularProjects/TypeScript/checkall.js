"use strict";
exports.__esModule = true;
var empall = [
    { empId: 101, empName: "ABCD", empSalary: 10000.00, empStatus: true },
    { empId: 102, empName: "ABCE", empSalary: 5000.00, empStatus: true },
    { empId: 103, empName: "ABCF", empSalary: 8000.00, empStatus: true },
];
empall.push({ empId: 104, empName: "ABCG", empSalary: 4000.00, empStatus: true }); // 'push' is used to enter element 
empall.slice(1, 1); //"splice" is used to remove a particular employee data)(1,1)=> Starting from index 1 and remove 1 value
for (var _i = 0, empall_1 = empall; _i < empall_1.length; _i++) {
    var data = empall_1[_i];
    console.log(data.empId + " " + data.empName + " " + data.empSalary + " " + data.empStatus);
}
