import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileserviceService } from './profileservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agentprofile',
  templateUrl: './agentprofile.component.html',
  styleUrls: ['./agentprofile.component.css']
})
export class AgentprofileComponent implements OnInit {
 getData:any;
  id: string;  
  constructor(private router: Router,private _httpService:ProfileserviceService) {

  this.id = localStorage.getItem('token');
   this._httpService.getProfiledetails(this.id).subscribe((res:any[])=>{
     console.log(res);
       this.getData=res;
  
     }); 

 }

  ngOnInit() {
      this.id = localStorage.getItem('token');

  }
  deleteagent()
  {
    for (let prop1 of this.getData) {

   this._httpService.deleteAgents(prop1.empid).subscribe(data=>console.log(data),error=>console.log(error));  
   alert("Account Deleted") 
            
       this.router.navigate(['c_login']);

  }}
  main1()
   {
          this.router.navigate(['c_agentmain']);

   }
 Updated()
 {

    for (let prop1 of this.getData) {

   this._httpService.UpdateAgents(this.id).subscribe(data=>console.log(data),error=>console.log(error));  
  

              
 }


this.router.navigate(['c_agentcomponent']);   

  }

  logout()
  {
    this.router.navigate(['c_login']);
  }
}


  

