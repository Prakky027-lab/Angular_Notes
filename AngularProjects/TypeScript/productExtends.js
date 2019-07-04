"use strict";
exports.__esModule = true;
var empall = [
    { prodId: 101, prodName: "ABCD", prodPrice: 1000.00 },
    { prodId: 102, prodName: "ABCE", prodPrice: 100.00 },
    { prodId: 103, prodName: "ABCF", prodPrice: 800.00 },
];
empall.push({ prodId: 104, prodName: "ABCG", prodPrice: 4000.00 });
empall.push({ prodId: 105, prodName: "ABCH", prodPrice: 400.00 }); // 'push' is used to enter element 
empall.splice(2, 1);
empall.splice(2, 1);
for (var _i = 0, empall_1 = empall; _i < empall_1.length; _i++) {
    var data = empall_1[_i];
    console.log(data.prodId + " " + data.prodName + " " + data.prodPrice);
}
var x = 0;
for (var _a = 0, empall_2 = empall; _a < empall_2.length; _a++) {
    var data = empall_2[_a];
    if (data.prodId == 102) {
        x = 1;
        break;
    }
}
if (x == 1)
    console.log("Id 102 is present");
else
    console.log("Id 102 is not present");
