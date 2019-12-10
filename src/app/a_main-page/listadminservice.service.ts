import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListadminserviceService {

  constructor(private http:HttpClient) { }

  getAdminDetails() {
  	return this.http.get('http://localhost:8090/ABC_Project/a_employee');
  }
  getSuperuserDetails(){
  	return this.http.get('http://localhost:8090/ABC_Project/a_superuser');
  }
}
