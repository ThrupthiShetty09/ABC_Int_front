import { Component,OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import {AllCommunityModules} from '@ag-grid-community/all-modules';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from '@ag-grid-community/angular';
import { Employee } from '../a_register/employee';
import { Router } from '@angular/router';
import { DelAdminService } from './del-admin.service';
import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css";
//import { RegisterComponent } from '../register/register.component';

@Component({
    selector: 'app-listadmin',
    templateUrl:'./listadmin.component.html',
   

    styleUrls: ['./listadmin.component.css']
})

export class ListadminComponent  implements OnInit {
    title = 'grid-example-app';
    //custArray: Array<employee> = new Array();
    getData:any[];
    openform=false;
   
    private gridApi;
    private gridColumnApi;

    
 



   
   constructor(private router: Router, private http: HttpClient, private __httpService : DelAdminService) {
       

    }

    id : number;
    name: string;
    dob: string;
    phno: number;
    username :string;
    password : string;
    role :string;

    employee : Employee;
    model =  new Employee('','',0,'','','');

    columnDefs = [
         
         
         {  headerName: "Date of Birth",field: "dob", sortable:true,filter:true , checkboxSelection:true},
         {  headerName: "Employee ID",field: "emp_no",sortable:true,filter:true },
         {  headerName: "Role",field: "emp_role", sortable:true,filter:true },
         {  headerName: "Name",field: "name",sortable:true,filter:true},
         {  headerName: "Password",field: "password", sortable:true,filter:true },
         {  headerName: "Contact Number",field: "phno", sortable:true,filter:true },
         {  headerName: "Username",field: "username", sortable:true,filter:true }
        
        

      ];

    rowData: any;

    
    ngOnInit() {
         this.rowData = this.http.get('http://localhost:8090/ABC_Project/a_employee');
    }


    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }

   

    home2(){
      this.router.navigate(['a_main-page']);
    }

    onRemoveSelected() {
        var selectedData = this.gridApi.getSelectedRows();
        console.log(selectedData[0].emp_no);
        this.__httpService.delEmployee(selectedData[0].emp_no)
              .subscribe(data => console.log(data), error => console.log(error));
        location.reload();

        //var id = selectedData
    }

    updateSelected() {
        var selectedData = this.gridApi.getSelectedRows();
        //console.log(selectedData);
        //this.id = selectedData[0].emp_no;
        this.model.emp_no = selectedData[0].emp_no;
        this.model.name = selectedData[0].name;
        this.model.dob = selectedData[0].dob;
        this.model.phno = selectedData[0].phno;
        this.model.username = selectedData[0].username;
        this.model.password = selectedData[0].password;

        this.model.emp_role = selectedData[0].emp_role;
       this.openform=true;
        return this.openform;
    }

    updRow(){
        //var uData = [];
        //var id = this.updateSelected();
        this.employee = new Employee(this.model.name,this.model.dob,this.model.phno,this.model.username,this.model.password,this.model.emp_role);
        this.employee.emp_no = this.model.emp_no;
        //console.log(this.employee);
        //console.log(id);
        this.__httpService.updateEmployee(this.model.emp_no,this.employee).subscribe(data => console.log(data));
         location.reload();
         //this.router.navigate(['a_main-page']);  
    }

    

    
    modules = AllCommunityModules;

}
