import { Component, OnInit, Input ,Output,EventEmitter  } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RegserviceService } from './regservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl:'./register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string;
  dob: string;
  phno: number;
  username :string;
  password : string;
  role :string;
  emprole: "Admin";
  employee : Employee;  
  submitted = false;
  //registerForm: FormGroup;
  namepattern = "^[A-Za-z]+$";
   constructor( private router: Router, private regService : RegserviceService,private formBuilder: FormBuilder) { }

   model =  new Employee('','',0,'','','');

   registerForm = this.formBuilder.group({
    ename: ['', [Validators.required,Validators.pattern(this.namepattern)]],
    edob: ['', Validators.required],
    ephno: ['', [Validators.required,Validators.pattern(/^[0-9]{10}$/)] ],
    eusername: ['', Validators.required],
    epassword: ['', [Validators.required, Validators.minLength(6)]]
  });

  ngOnInit() {

    this.role = this.emprole;
    /*this.registerForm = this.formBuilder.group({
        ename: ['', [Validators.required]],
        edob: ['', Validators.required],
        ephno: ['', [Validators.required] ],
        eusername: ['', Validators.required],
        epassword: ['', [Validators.required, Validators.minLength(6)]],
        //erole: ['', Validators.required],
        //Validators.pattern(this.namepattern),Validators.pattern(/^[0-9]\d{10}$/)]

    });*/
  }
  get f() { 
    return this.registerForm.controls; 
  } 

  createCustomer() {
    
    var check = this.save();
    if(check) {
      
      this.router.navigate(['a_main-page']);
    }
    else {
      return;
    }
    

  }

  save(): boolean {
    /*this.name = this.model.name;
    this.dob = this.model.dob;
    this.phno = this.model.phno;
    this.username = this.model.username;
    this.password = this.model.password;
    this.role = this.model.emp_role;

    
    this.employee = new Employee(this.name,this.dob,this.phno,this.username,this.password,this.role);
    this.regService.createEmployee(this.employee)
          .subscribe(data => console.log(data), error => console.log(error));*/

        if (this.registerForm.invalid) {
          //alert("INSIDE");
          this.submitted = true;
      //alert("Please enter");
      return false;
        }
        else {
          //alert("ELSE IF");
          this.submitted = false;
          this.name = this.f.ename.value;
          //console.log(this.name);

      this.dob = this.f.edob.value;
      this.phno = this.f.ephno.value;
      this.username = this.f.eusername.value;
      this.password = this.f.epassword.value;
      this.role = this.emprole;
      this.employee = new Employee(this.name,this.dob,this.phno,this.username,this.password,this.role);
      this.regService.createEmployee(this.employee)
            .subscribe(data => console.log(data), error => console.log(error));
          return true;
         
         //this.router.navigate(['a_listadmin']);
        }
  }

  home3(){
    this.router.navigate(['a_main-page']);
  }
  logout(){
  this.router.navigate(['/a_login']);
}
}

