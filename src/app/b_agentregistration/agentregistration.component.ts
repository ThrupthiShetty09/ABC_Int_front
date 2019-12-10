import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentregistrationserviceService } from './agentregistrationservice.service'
import { Agent } from './agent';

@Component({
  selector: 'app-agentregistration',
  templateUrl: './agentregistration.component.html',
  styleUrls: ['./agentregistration.component.css']
})
export class AgentregistrationComponent implements OnInit {
	agent_id:number;
	name:string;
	DOB:Date;
	phone_no:number;
	username:string;
	password:string;
	branch_id:number;

	agent:Agent;
	submitted=false;
	
  model: any = new Agent(0,'',new Date(),0,'','',0);
constructor(private router:Router, private agentregService: AgentregistrationserviceService) { 
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

  ngOnInit() {}

  createAgent(){
  	this.submitted=true;
  	this.save();

  }

  save(){
  	this.agent_id=this.model.agent_id;
  	this.name=this.model.name;
  	this.DOB=this.model.DOB;
  	this.phone_no=this.model.phone_no;
  	this.username=this.model.username;
  	this.password=this.model.password;
  	this.branch_id=this.model.branch_id;
    console.log()
  	this.agent=new Agent(this.agent_id,this.name,this.DOB,this.phone_no,this.username,this.password,this.branch_id);
  	console.log(this.agent);
    this.agentregService.createAgent(this.agent)
  	.subscribe(data=> console.log(data),error=>console.log(error));


  	//this.router.navigate(['agentdashboard']);
  }
   
/*  agentregistration()
{
	this.router.navigate(['/agentregistration']);
}

*/
}
