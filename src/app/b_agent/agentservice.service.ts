import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AgentserviceService {

  constructor(private http:HttpClient,private _httpService: AgentserviceService) { }
  
  getUserDetails(){
  	return this.http.get
  	('http://localhost:8090/ABC_Project/B_Agent');

  }

  delAgent(agent_id){
  	console.log(agent_id);
  	return this.http.delete('http://localhost:8090/ABC_Project/delete/B_Agent/'+agent_id,agent_id);
  }


}

