import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
cname:string;
  constructor(private router: Router,public authService: AuthService) {this.cname=localStorage.getItem('cname');  }

  ngOnInit() {
  }
   logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['Login']);
  }
}
