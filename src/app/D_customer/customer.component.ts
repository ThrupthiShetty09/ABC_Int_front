import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerserviceService } from './customerservice.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class D_CustomerComponent implements OnInit {
  id: string;
  cname:string;
  constructor(private router: Router,public authService: AuthService) { 
    console.log();
   this.cname=localStorage.getItem('cname'); 
 }

  ngOnInit() {

    window.onbeforeunload = function() { return "Your work will be lost."; };
    
    this.id = localStorage.getItem('token');

    //alert(this.id);
    if(!(this.id)){
        this.router.navigate(['Login']);
    }
  }
	viewProfile(){
		//alert("dsfs");
		this.router.navigate(['profile']);
	}
  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['D_login']);
  }
}
