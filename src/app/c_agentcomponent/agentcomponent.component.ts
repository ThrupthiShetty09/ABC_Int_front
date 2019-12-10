import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentserviceService } from './agentservice.service';
import { HttpClient } from '@angular/common/http';
import  {Employee} from '../c_agentprofile/employee';

@Component({
  selector: 'app-agentupdateform',
  templateUrl: './agentcomponent.component.html',
  styleUrls: ['./agentcomponent.component.css']
})
export class AgentcomponentComponent implements OnInit {
getData:any;
employee: Employee;
id:any;
empaddress:any;

  constructor(private router: Router, private _httpService:AgentserviceService) { }
id1:string;
ngOnInit() {
  this.id1= localStorage.getItem('token');
     this._httpService.getAgentDetails(this.id1).subscribe((res:any[])=>{
       console.log(res);
       this.getData=res;
  
     });
}
 updated1()
{
  for(let age1 of this.getData)
  {

  this.id=age1.empid;
  this.employee=new Employee(age1.empid,age1.empname,age1.address,age1.empdob,age1.empcontact,age1.empmail,age1.empbranch_id);
  
  }
     
       this._httpService.getAgentDetails1(this.id,this.employee).subscribe(data=>console.log(data),error=>console.log(error));
       alert("Your Profile Updated"); 
       this.router.navigate(['c_agentmain']); 

}}