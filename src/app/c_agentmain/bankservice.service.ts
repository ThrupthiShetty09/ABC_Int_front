
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class BankserviceService {

 constructor(private http:HttpClient) { }
   getCustomerDetails(id){
return this.http.get('http://localhost:8090/ABC_Project/c_customer/'+id);
  }
  getTransactiondetails(id){
    return this.http.get('http://localhost:8090/ABC_Project/c_transaction/'+id);
  }
  getProfiledetails(id) {
      return this.http.get('http://localhost:8090/ABC_Project/c_agent/'+id);
  }
}
