import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { }
  getLoginDetails(){
return this.http.get('http://localhost:8090/ABC_Project/c_agent1');
  }
}
