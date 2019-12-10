import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Customer } from './Customer';
@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService {
	
  constructor(private http:HttpClient) { }
  getUserDetails(){
    let accNo=localStorage.getItem('token');
  	return this.http.get('http://localhost:8090/ABC_Project/d_Customer/'+accNo);
  }
  setUserDetails(acc:number,cust:object){
  	console.log(cust);
  	return this.http.put<Customer>('http://localhost:8090/ABC_Project/put/d_Customer/'+acc,cust);

  }
  
}
