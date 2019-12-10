import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService {

  constructor(private http:HttpClient) { }
   getProfiledetails(id) {
      return this.http.get('http://localhost:8090/ABC_Project/c_agent/'+id);
  }
  deleteAgents(empid)
  {
    console.log(empid);
    return this.http.delete('http://localhost:8090/ABC_Project/delete/c_agent/'+empid,empid);
  }
 UpdateAgents(id)
  {
    return this.http.get('http://localhost:8090/ABC_Project/c_agent/'+id);
  }
}
