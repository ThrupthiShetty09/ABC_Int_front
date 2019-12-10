import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { AgGridAngular } from '@ag-grid-community/angular';
import { HttpClient } from '@angular/common/http';
import { AdminupdateserviceService } from './adminupdateservice.service';
import { Admin } from './admin';

@Component({
  selector: 'app-adminupdatecomponent',
  templateUrl: './adminupdatecomponent.component.html',
  styleUrls: ['./adminupdatecomponent.component.css']
})
export class AdminupdatecomponentComponent implements OnInit {
  empId:number;
	name:string;
	DOB:Date;
	phone_num:number;
	username:string;
	password:string;
	role:string;
    custArray: Array<Admin> = new Array();
    admin:Admin	;
    //submitted=false;

    model:any= new Admin(0,'',new Date(),0,'','','');


  constructor(private router:Router, private _httpService:AdminupdateserviceService,private http: HttpClient) { }

   ngOnInit() {
  }

  /*adminUpdatedetails(empId){
  		//this.submitted=true;
  		this.update();
  }

  update(){
  	this.empId=this.model.empId;
  	this.name=this.model.name;
  	this.DOB=this.model.DOB;
  	this.phone_num=this.model.phone_num;
  	this.username=this.model.username;
  	this.password=this.model.password;
  	this.role=this.model.role;
  	this.admin=new Admin(this.empId,this.name,this.DOB,this.phone_num,this.username,this.password,this.role);
  	console.log(this.admin);
  	this.adminupdateservice.adminUpdatedetails(this.empId)
  	.subscribe(data=> console.log(data),error=>console.log(error));
  }*/

  update(){
  	var empId=this.model.empId;
  	console.log("the id inside the function"+empId);
    
    this.empId=this.model.empId;
    this.name=this.model.name;
    this.DOB=this.model.DOB;
    this.phone_num=this.model.phone_num;
    this.username=this.model.username;
    this.password=this.model.password;
    this.role=this.model.role;
    this.admin=new Admin(this.empId,this.name,this.DOB,this.phone_num,this.username,this.password,this.role);
    console.log(this.admin);
    this._httpService.adminUpdatedetails(empId,this.admin)
    .subscribe(data=> console.log(data),error=>console.log(error));

    }
  	

  }


