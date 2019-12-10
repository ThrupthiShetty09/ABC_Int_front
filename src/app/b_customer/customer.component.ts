import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {customer} from './customer';
import {AllCommunityModules} from '@ag-grid-community/all-modules';
import { AgGridAngular } from '@ag-grid-community/angular';
import { HttpClient } from '@angular/common/http';
import { CustomerserviceService } from './customerservice.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
 title = 'grid-example-app';
  custArray: Array<customer> = new Array();
  getData:any[];
  public gridApi;
  public gridColumnApi;
  //private columnDefs;
  public rowData;
  public tempId = 0;
  public account_no=0;
  public btnVal = "Submit";
  


  model = new customer(0,' ',' ',0,' ',' ',0,0,' ',' ',0,'');

  columnDefs = [
        {  headerName: "account_no",field: "account_no",sortable:true,filter:true },
        {  headerName: "name",field: "name",sortable:true,filter:true },
        {  headerName: "DOB",field: "dob", sortable:true,filter:true  },
        {  headerName: "phone_no",field: "phone_no",sortable:true,filter:true },
        {  headerName: "username",field: "username",sortable:true,filter:true },
        {  headerName: "password",field: "password",sortable:true,filter:true },
        {  headerName: "balance",field: "balance",sortable:true,filter:true },
        {  headerName: "Branch_id",field: "branch_id",sortable:true,filter:true },
        {  headerName: "loan_id",field: "loan_id",sortable:true,filter:true },
        {  headerName: "type_id",field: "type_id",sortable:true,filter:true },
        {  headerName: "aadhar_no",field: "aadhar_no",sortable:true,filter:true },
        {  headerName: "pan_no",field: "pan_no",sortable:true,filter:true },
          
       ];
  


    constructor(private router:Router,private _httpService:CustomerserviceService,private http: HttpClient) {}
       ngOnInit() {
                this.rowData = this.http.get('http://localhost:8090/ABC_Project/B_Customer');

    }

    modules = AllCommunityModules;  

    onTestGet(){
      this._httpService.getUserDetails()
      .subscribe((res:any[])=>{
        console.log(res);
        this.getData=res;
      });
    }




}


      /*var itemsToUpdate = [];

      this.columnDefs = [
       {headerName: "Account_no",field: "account_no",sortable:true,filter:true,checkboxSelection:true },
        {headerName: "Name",field: "name",sortable:true,filter:true,checkboxSelection:true },
        {headerName: "dob",field: "dob", sortable:true,filter:true,checkboxSelection:true  },
        {headerName: "phno",field: "phno",sortable:true,filter:true,checkboxSelection:true },
        {headerName: "username",field: "username",sortable:true,filter:true,checkboxSelection:true },
        {headerName: "password",field: "password",sortable:true,filter:true,checkboxSelection:true },
        {headerName: "Amount",field: "amount",sortable:true,filter:true,checkboxSelection:true },
        {headerName: "Branch_id",field: "branch_id",sortable:true,filter:true,checkboxSelection:true },
        {headerName: "Loan_id",field: "loan_id",sortable:true,filter:true,checkboxSelection:true },
        {headerName: "Type_id",field: "type_id",sortable:true,filter:true,checkboxSelection:true },
       ];

       this.rowData = [
         

       ];
     }*/

       /*createemployee() {
          var res;
          var newItem;
          console.log("Customer creation!");
          this.custArray.push(new employee(this.model.account_no, this.model.name, this.model.dob, this.model.phno, this.model.username, this.model.password,this.model.amount, this.model.branch_id,this.model.loan_id, this.model.type_id));
          console.log(JSON.stringify(this.custArray));
          
            newItem = this.createNewRowData();
            res = this.gridApi.updateRowData({ add: [newItem] });
            //console.log(res.rowIndex);
          

     
          
          this.printResult(res);
       }*/
      
     /* createNewRowData() {
          var newData = {
            account_no: this.model.account_no,
            name: this.model.name,
            dob: this.model.dob,
            phno: this.model.phno,
            username:this.model.username,
            password:this.model.password,
            amount:this.model.amount,
            branch_id:this.model.branch_id,
            loan_id:this.model.loan_id,
            type_id:this.model.type_id

          };
          this.account_no++;
         return newData;
      }*/

    

    /*onRemoveSelected() {
      var selectedData = this.gridApi.getSelectedRows();
      var res = this.gridApi.updateRowData({ remove: selectedData });
      this.printResult(res);
    }
*/
    /*updateSelected() {
      var selectedData = this.gridApi.getSelectedRows();
      var account_no = selectedData[0].account_no;
      var name = selectedData[0].name;
      var dob = selectedData[0].dob;
      var phno = selectedData[0].phno;
      var username = selectedData[0].username;
      var password = selectedData[0].password;
      var amount = selectedData[0].amount;
      var branch_id = selectedData[0].branch_id;
      var loan_id=selectedData[0].loan_id;
      var type_id = selectedData[0].type_id;
     
      this.model.account_no=account_no;
      this.model.name = name;
      this.model.dob = dob;
      this.model.phno=phno;
      this.model.username=username;
      this.model.password=password;
      this.model.amount=amount;
      this.model.branch_id=branch_id;
      this.model.loan_id=loan_id;
      this.model.type_id=type_id
      
    }*/

    /*updRow() {
      var uData = [];
      var itemsToUpdate = [];
      var data = this.gridApi.getSelectedRows();
      uData = this.creatUpdateData();
      data[0].account_no = uData[0];
      data[0].name = uData[1];
      data[0].dob = uData[2];
      data[0].phno = uData[3];
      data[0].username = uData[4];
      data[0].password = uData[5];
      data[0].amount = uData[6];
       data[0].branch_id = uData[7];
        data[0].loan_id = uData[8];
         data[0].type_id = uData[9];
      itemsToUpdate.push(data);
      var res = this.gridApi.updateRowData({ update: itemsToUpdate });
      this.printResult(res);

    }*/
    
    /*creatUpdateData() {
      var uData = [];
      uData[0] = this.model.account_no;
      uData[1] = this.model.name;
      uData[2] = this.model.dob;
      uData[3] = this.model.phno;
      uData[4] = this.model.username;
      uData[5] = this.model.password;
      uData[6] = this.model.amount;
      uData[7] = this.model.branch_id;
      uData[8] = this.model.loan_id;
      uData[9] = this.model.type_id;
      return uData;
    }*/

    /*onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
    }

    printResult(res) {
      
      if (res.add) {
        res.add.forEach(function(rowNode) {
          console.log("Added Row Node", rowNode);
        });
      }

      if (res.remove) {
        res.remove.forEach(function(rowNode) {
          console.log("Removed Row Node", rowNode);
        });
      }

      if (res.update) {
        res.update.forEach(function(rowNode) {
          console.log("Updated Row Node", rowNode);
       });
      }
      
    }*/



    

   