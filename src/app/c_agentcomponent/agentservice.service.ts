import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AgentserviceService {

  constructor(private http:HttpClient) {

}
getAgentDetails(id)
{
	return this.http.get('http://localhost:8090/ABC_Project/c_agent/'+id);
   }
   getAgentDetails1(id,e)
{
	console.log(e);
	console.log(id);
	return this.http.put('http://localhost:8090/ABC_Project/put/c_agent/'+id,e);
   }
}
