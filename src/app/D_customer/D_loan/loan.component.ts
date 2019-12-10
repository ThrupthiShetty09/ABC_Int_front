import { Component, OnInit } from '@angular/core';
import {LoanserviceService} from './loanservice.service';
import {Customer} from './Customer';
import {Loan} from './Loan';
import { Router } from '@angular/router';
import {AuthService} from '../../auth.service';
@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  cname:string;
	 myArray:Array<Customer>=new Array();
	 loanArray:Array<Loan>=new Array();
    mod=new Customer(0,'','',0,'','',0,0,'','');
     loanMod=new Loan('','','','',0);
    getData:any[];
  constructor(private router: Router,private _httpService:LoanserviceService,public authService: AuthService) {
  this.cname=localStorage.getItem('cname');  }

  ngOnInit() {

  	this._httpService.getUserDetails().subscribe((res:any[])=>{
        console.log(res);
        //this.getData=res;
        var x=JSON.parse(JSON.stringify(res));
        console.log(x.id);
        this.loanMod.id=x.id;
        this.loanMod.loan_type=x.loan_type;
        this.loanMod.interest_rate=x.interest_rate;
  })
  }

  privious(){
       this.router.navigate(['/D_customer']);
     }
      logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['D_Login']);
  }
}
