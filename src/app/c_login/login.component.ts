import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from '../login';
import { LoginserviceService } from './loginservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class c_LoginComponent implements OnInit {
getData:any;
   model: any = {};
  loginForm: FormGroup;
  message: string;
  returnUrl: string;
  constructor(private router: Router,private _httpService:LoginserviceService,private formBuilder: FormBuilder,public authService: AuthService) { }

  ngOnInit() {
        this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '/dashboard';
    this.authService.logout();
  }
  get f() { return this.loginForm.controls; }

// here this event is Auth the user name & password comes form web service 

  loginUser(){

   //console.log(this.model.name,this.model.password);
  /*  var user=this.model.name;
    var password=this.model.password;
    console.log(user);
    console.log(password);*/
console.log("hhnh");
     this._httpService.getLoginDetails().subscribe((res:any[])=>{
     //var x=JSON.parse(JSON.stringify(res));
     for (var i = 0; i < res.length; ++i) {
           if (this.loginForm.invalid) {
        return;
    }
    else     if(this.f.userid.value == res[i].username && this.f.password.value ==res[i].password ){
                  console.log("Login successful");
        //this.authService.authLogin(this.model);
           localStorage.setItem('isLoggedIn', "true");
           localStorage.setItem('token', this.f.userid.value);
             this.router.navigate(['/c_agentmain']);

             }
             else
   {
         this.message = "Please check your userid and password";
   }
 
     }
       
            
     }); 
   
   
   
   
}
}
