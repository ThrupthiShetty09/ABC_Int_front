import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionserviceService {

  constructor(private http:HttpClient) { }

  getUserDetails(){
  	let accNo=localStorage.getItem('token');
  	console.log(accNo);
  	return this.http.get('http://localhost:8090/ABC_Project/d_Customer/Transaction/'+accNo);
  }
}
