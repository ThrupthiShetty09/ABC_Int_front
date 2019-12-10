import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Agent } from './agent';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentregistrationserviceService {

  constructor(private http:HttpClient) { }

  createAgent(agent:Object):Observable<Object>{
  	console.log(agent);
  	return this.http.post<Agent>('http://localhost:8090/ABC_Project/post/B_Agent',agent);
  }
}
