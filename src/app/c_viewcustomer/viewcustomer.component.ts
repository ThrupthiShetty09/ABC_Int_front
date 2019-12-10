import { Component, OnInit } from '@angular/core';
import {AllCommunityModules} from '@ag-grid-community/all-modules';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css']
})
export class ViewcustomerComponent implements OnInit {

/*let gridDiv = document.querySelector('#myGrid');

        var gridOptions ={
*/
	columnDefs=[
        {headerName: 'Aadhar', field: 'aadhar_card', sortable: true, filter: true },
         {headerName: 'Acc_type', field: 'acc_type', sortable: true, filter: true},
        {headerName: 'Account Number', field: 'accno', sortable: true, filter: true },
         {headerName: 'Action', field: 'action', sortable: true, filter: true},
       {headerName: 'Balance', field: 'amount', sortable: true, filter: true},
          {headerName: 'Branch', field: 'branch', sortable: true, filter: true },
             {headerName: 'Contact', field: 'contact', sortable: true, filter: true },
               {headerName: 'DOB', field: 'dob', sortable: true, filter: true },
             {headerName: 'Loan_type', field: 'loan_type', sortable: true, filter: true },
              {headerName: 'Name', field: 'name', sortable: true, filter: true },
                {headerName: 'PanCard', field: 'pan_card', sortable: true, filter: true },
                 {headerName: 'Password', field: 'password', sortable: true, filter: true },
                   {headerName: 'Username', field: 'username', sortable: true, filter: true },
      
    
      
     
       
       
      
        
    ];


     rowData: any;

    modules = AllCommunityModules;



  constructor(private router: Router,private http: HttpClient) { }
 id: string;
  ngOnInit() {
    this.id = localStorage.getItem('token');
    console.log(this.id);
   
    
     this.rowData = this.http.get('http://localhost:8090/ABC_Project/c_customer/'+this.id);
  }
  main1()
  {
              this.router.navigate(['c_agentmain']);

  }
  
  logout()
  {
    this.router.navigate(['c_login']);
  }
}



