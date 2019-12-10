import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoanserviceService} from './loanservice.service'
import {Customer} from './Customer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
/*import * as $ from 'jquery';
*/

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class D_LoginComponent implements OnInit {
	 model=new Customer(0,'','');
    loginForm: FormGroup;
    message: string;
    returnUrl: string;
  constructor(private router: Router,private _httpService:LoanserviceService,private formBuilder: FormBuilder, public authService: AuthService) { }

  ngOnInit() {
    
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '/D_customer';
    this.authService.logout();
}
get f() { return this.loginForm.controls; }

  
     login() {

    if (this.loginForm.invalid) {
      alert("Invalid form");
        return;
    }
    else{
        let flag=0;
        this._httpService.getUserDetails().subscribe((res:any[])=>{
         // console.log(res);
        var x=JSON.parse(JSON.stringify(res));
        for (var i = x.length - 1; i >= 0; i--) {

            if(this.f.userid.value == x[i].username && this.f.password.value == x[i].password){
                localStorage.setItem('isLoggedIn', "true");
                localStorage.setItem('token', x[i].account_no);
                localStorage.setItem('cname', x[i].name);
              
                this.router.navigate([this.returnUrl]);
                flag=1;
            }
        }
        if(flag===0){
          this.message="Invalid credentials";
            
        }
      })
        

    }    
}

}
