import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css']
})
export class StartpageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  	//document.body.classList.add('bg-img');
  }

	title="ABC Bank";
  superuser(){
     
      this.router.navigate(['a_login']);
  }

admin(){
      console.log("superuser");
      this.router.navigate(['b_login']);
  }

  agent(){
    this.router.navigate(['c_login']);
  }

 customerLogin(){
    this.router.navigate(['D_login']);
  }

}
