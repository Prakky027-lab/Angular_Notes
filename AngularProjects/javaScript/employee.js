function addemployee(){
   var employeeId= document.getElementById('empid').value;
   var employeeName=document.getElementById('empname').value;
    var employeecourse=document.getElementsByName('ecourse');
   var employeeQualification=document.getElementById('Qualification').value;
   var employeeChoice=document.getElementById('EmpChoice').value;
   var c="";
   if(employeeChoice==true)
        c="Yes";
    else
        c="No";
    var check="";
  for(var i=0;i<employeecourse.length;i++){
     if(employeecourse[i].checked==true)
        check=check+","+employeecourse[i].value;
    }
 
  alert(employeeId+" "+employeeName+" "+check+" "+employeeQualification+" "+c);
   //var employeeName=document.emp.ename.value;

   // var employeeId=document.emp.eid.value;
  //alert("Welcome");
}