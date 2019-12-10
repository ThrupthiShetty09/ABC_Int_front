import { Component, OnInit } from '@angular/core';
import { Customer } from './Customer';
import { CheckbalanceserviceService } from './checkbalanceservice.service';
import { Router } from '@angular/router';
import {AuthService} from '../../auth.service';
@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.component.html',
  styleUrls: ['./check-balance.component.css']
})
export class CheckBalanceComponent implements OnInit {
  cname:string;
	mod=new Customer(0,'','',0,'','',0,0,'','');
    getData:any[];
  constructor(private router: Router,private _httpService:CheckbalanceserviceService,public authService: AuthService) {this.cname=localStorage.getItem('cname');  }

  ngOnInit() {

  		 this._httpService.getUserDetails().subscribe((res:any[])=>{
        console.log(res);
        //this.getData=res;
        var x=JSON.parse(JSON.stringify(res));
        console.log(x.amount);
        this.mod.account_no=x.account_no;
        this.mod.amount=x.amount;

  })
  	
  }
  privious(){
       this.router.navigate(['/D_customer']);
     }
      logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['Login']);
  }
}


