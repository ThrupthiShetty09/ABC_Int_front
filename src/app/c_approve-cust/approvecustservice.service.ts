import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApprovecustserviceService {

  constructor(private http:HttpClient) {
  }
  getCustomerDetails(id){
return this.http.get('http://localhost:8090/ABC_Project/c_customer/'+id);
  }
  updateAction(agent,id)
  {
    console.log(agent.action);
    return this.http.put('http://localhost:8090/ABC_Project/put/c_customer/'+id,agent,id);
  }
}

