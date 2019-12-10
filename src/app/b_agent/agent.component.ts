import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {agent} from './agent';
import {AllCommunityModules} from '@ag-grid-community/all-modules';
import { AgGridAngular } from '@ag-grid-community/angular';
import { HttpClient } from '@angular/common/http';
import { AgentserviceService } from './agentservice.service';
@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
 title = 'grid-example-app';
  custArray: Array<agent> = new Array();
  getData:any[];
  private gridApi;
  private gridColumnApi;
  //private columnDefs;
  public rowData;
  public tempId = 0;
  public btnVal = "Submit";


  /**/

  


  model = new agent(0,' ',new Date(),0,' ',' ',0);

  columnDefs = [
        {  headerName: "Agent_id",field: "agent_id",sortable:true,filter:true,checkboxSelection:true },
        {  headerName: "Agent_Name",field: "name",sortable:true,filter:true },
        {  headerName: "DOB",field: "DOB", sortable:true,filter:true  },
        {  headerName: "phone_no",field: "phone_no",sortable:true,filter:true },
        {  headerName: "username",field: "username",sortable:true,filter:true },
        {  headerName: "password",field: "password",sortable:true,filter:true },
        {  headerName: "Branch_id",field: "branch_id",sortable:true,filter:true },
          
       ];
  


    constructor(private router:Router,private _httpService:AgentserviceService,private http: HttpClient) {} 

    

    ngOnInit() {
        this.rowData = this.http.get('http://localhost:8090/ABC_Project/B_Agent');
    }

    modules = AllCommunityModules;

    onGridReady(params){
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
    }
   
    onTestGet(){
      this._httpService.getUserDetails()
      .subscribe((res:any[])=>{
        console.log(res);
        this.getData=res;
      });
    }

    onRemoveSelected(){
      var selectedData=this.gridApi.getSelectedRows();
      console.log(selectedData[0].agent_id);
      this._httpService.delAgent(selectedData[0].agent_id)
      .subscribe(data=>console.log(data), error=>console.log(error));
      location.reload();
    }



    
  }


    
  

