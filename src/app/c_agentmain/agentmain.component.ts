import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankserviceService } from './bankservice.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-agentmain',
  templateUrl: './agentmain.component.html',
  styleUrls: ['./agentmain.component.css']
})
export class AgentmainComponent implements OnInit {

getData:any[];

  constructor(private router: Router,private _httpService: BankserviceService,public authService: AuthService) { }

 id: string;
  ngOnInit() {
      this.id = localStorage.getItem('token');
  }
   logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/c_login']);
  }
 viewcust()
   {


     this._httpService.getCustomerDetails(this.id).subscribe((res:any[])=>{
       console.log(res);
       this.getData=res;
  
     });
          this.router.navigate(['c_viewcustomer']);
   }
   viewtrans()
   {
      


 this._httpService.getTransactiondetails(this.id).subscribe((res:any[])=>{
       console.log(res);
       this.getData=res;
  
     });

     this.router.navigate(['c_viewtransaction']);
   }
   approvecust()
   {
      this._httpService.getCustomerDetails(this.id).subscribe((res:any[])=>{
       console.log(res);
       this.getData=res; });
          this.router.navigate(['c_approve-cust']);

   }
   main1()
   {
          this.router.navigate(['c_agentmain']);

   }

   Profile1(){

      
     this._httpService.getProfiledetails(this.id).subscribe((res:any[])=>{
       console.log(res);
       this.getData=res;
  
     });

               this.router.navigate(['c_agentprofile']);

   }
}

