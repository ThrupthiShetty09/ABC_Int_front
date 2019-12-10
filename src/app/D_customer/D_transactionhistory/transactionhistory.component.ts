import { Component, OnInit } from '@angular/core';
import { TransactionserviceService } from './transactionservice.service';
import { Transaction } from './Transaction';
import { TransDuplicate } from './TransDuplicate';
import { ODataAdaptor } from '@syncfusion/ej2-data';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { Router } from '@angular/router';
import {AuthService} from '../../auth.service';
@Component({
  selector: 'app-transactionhistory',
  templateUrl: './transactionhistory.component.html',
  styleUrls: ['./transactionhistory.component.css']
})
export class TransactionhistoryComponent implements OnInit {
  cname:string;
  myArray:Array<TransDuplicate>=new Array();
   public data: DataManager;
   mod=new Transaction(0,'',0,0,0);
   modDuplicate=new TransDuplicate(0,'',0,0,0);
    getData:any[];
    str:string;
  constructor(private router: Router,private _httpService:TransactionserviceService,public authService: AuthService) {
  this.cname=localStorage.getItem('cname');  }

  public filterSettings: Object;
  ngOnInit() {
     // this.str=" { id: 10248, trans_date: 'VINET', credit: 32.38, debit: 123,amount:123 },";
      this.filterSettings = { type: 'Menu' };
      this._httpService.getUserDetails().subscribe((res:any[])=>{
        //console.log(res);
        let accNo=localStorage.getItem('token');
         for (const Transaction of res) {
             
              //this.myArray.push(new TransDuplicate(Transaction.id,Transaction.trans_date,Transaction.credit,Transaction.credit,Transaction.amount));
              console.log(Transaction.id);
          }
                 this.data = new DataManager({

                          url: 'http://localhost:8090/ABC_Project/d_Customer/Transaction/'+accNo,
                          adaptor: new WebApiAdaptor,
                          offline: true
                }); 
                   
                  
       


      })

  }
   logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['D_Login']);
  }
  privious(){
       this.router.navigate(['/D_customer']);
     }

}
