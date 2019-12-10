import { Component, OnInit } from '@angular/core';
import { TransferserviceService } from './transferservice.service';
import { Customer } from './Customer';
import { Transaction } from './Transaction';
import { Router } from '@angular/router';
import {AuthService} from '../../auth.service';
@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  cname:string;
  message:string;
  mod=new Customer(0,'','',0,'','',0,0,'','',0);
  transMod=new Transaction(0,'',0,0,0);
    getData:any[];
  constructor(private router: Router,private _httpService:TransferserviceService,public authService: AuthService) {
  this.cname=localStorage.getItem('cname');  
  	(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

  }

  ngOnInit() {

    this._httpService.getUserDetails().subscribe((res:any[])=>{
        console.log(res);
        //this.getData=res;
        var x=JSON.parse(JSON.stringify(res));
        console.log(x.amount);
        this.mod.account_no=x.account_no;
  
        
      })

  }


  TransferAmount(){
     if(this.mod.account_no1==0 || this.mod.amount==0 || this.mod.amount==null || this.mod.name==""){
           this.message="Enter All Inputs";
     }else{
         this._httpService.setUserDetails(this.mod.account_no1,this.mod.amount).subscribe((res:number)=>{
         console.log(res);
      })
      alert("Successfull Transfer....!");
      this.message="Transfer Successful";
     }
    
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
