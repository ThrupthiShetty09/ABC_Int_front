import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { ApprovecustserviceService } from './approvecustservice.service';
import {AllCommunityModules} from '@ag-grid-community/all-modules';
import {Agent} from './agent';



@Component({
  selector: 'app-approve-cust',
  templateUrl: './approve-cust.component.html',
  styleUrls: ['./approve-cust.component.css']
})
export class ApproveCustComponent implements OnInit {
   columnDefs=[
        {headerName: 'Aadhar', field: 'aadhar_card', sortable: true, filter: true,checkboxSelection:true},
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

  constructor(private router: Router,private _httpService: ApprovecustserviceService,private http: HttpClient) { }
id:string;
  ngOnInit() {
 this.id = localStorage.getItem('token');
    this.rowData = this.http.get('http://localhost:8090/ABC_Project/c_customer/'+this.id);
  }
  private gridApi;
  private gridColumnsApi;


  getData:any;
approved()
{
   this._httpService.getCustomerDetails(this.id).subscribe((res:any[])=>{
       console.log(res);
       this.getData=res;
       this.router.navigate(['c_approve']);
});
 }
agent: Agent;
  main1()
  {
              this.router.navigate(['c_agentmain']);

  }

  logout()
  {
    this.router.navigate(['c_login']);
  }
  onGridReady(params)
  {
    this.gridApi=params.api;
    this.gridColumnsApi=params.columnApi;
  }
  activate()
  {

    var selecteddata=this.gridApi.getSelectedRows();
     console.log(selecteddata[0].dob);
    this.agent=new Agent(selecteddata[0].accno,selecteddata[0].name,selecteddata[0].dob,selecteddata[0].contact,selecteddata[0].username,selecteddata[0].password,selecteddata[0].amount,selecteddata[0].branch,selecteddata[0].loan_type,selecteddata[0].aadhar_card,selecteddata[0].pan_card,selecteddata[0].acc_type,"Activated");
     console.log(this.agent);
      this._httpService.updateAction(this.agent,selecteddata[0].accno).subscribe(data=>console.log(data),error=>console.log(error));   
       this.id = localStorage.getItem('token');
    console.log(this.id);
   
    
     this.rowData = this.http.get('http://localhost:8090/ABC_Project/c_customer/'+this.id);

     location.reload();
     
  }
  deactivate()
  {
    var selecteddata=this.gridApi.getSelectedRows();
     console.log(selecteddata[0].dob);
    this.agent=new Agent(selecteddata[0].accno,selecteddata[0].name,selecteddata[0].dob,selecteddata[0].contact,selecteddata[0].username,selecteddata[0].password,selecteddata[0].amount,selecteddata[0].branch,selecteddata[0].loan_type,selecteddata[0].aadhar_card,selecteddata[0].pan_card,selecteddata[0].acc_type,"deactivated");
     console.log(this.agent);
      this._httpService.updateAction(this.agent,selecteddata[0].accno).subscribe(data=>console.log(data),error=>console.log(error));   
  this.id = localStorage.getItem('token');
    console.log(this.id);
   
    
     this.rowData = this.http.get('http://localhost:8090/ABC_Project/c_customer/'+this.id);
      location.reload();
  }
}
