import {IProduct} from './product';
var  empall:IProduct[]=[// FOR CREATING ARRAY OF EMPLOYEES
                        {prodId:101,prodName:"ABCD",prodPrice:1000.00},
                         {prodId:102,prodName:"ABCE",prodPrice:100.00},
                         {prodId:103,prodName:"ABCF",prodPrice:800.00},
                        ];
empall.push({prodId:104,prodName:"ABCG",prodPrice:4000.00});  
empall.push({prodId:105,prodName:"ABCH",prodPrice:400.00});     // 'push' is used to enter element 
empall.splice(2,1); 
empall.splice(2,1); 

for(let data of empall){
console.log(data.prodId+" "+data.prodName+" "+data.prodPrice);
}
var x=0;
for(let data of empall){
    if(data.prodId==102)
    {
        x=1;
        break;
    }
}
if(x==1)
    console.log("Id 102 is present");

else
    console.log("Id 102 is not present");
