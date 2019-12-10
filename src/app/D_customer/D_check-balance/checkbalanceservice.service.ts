import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CheckbalanceserviceService {

  constructor(private http:HttpClient) { }

  getUserDetails(){
  	let accNo=localStorage.getItem('token');
  	return this.http.get('http://localhost:8090/ABC_Project/d_Customer/Balance/'+accNo);
  }
}
