import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { User } from './login/models/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
baseUrl:any="http://www.localhost:8082"
  constructor(private http:HttpClient) {} 


    login(user:User){
const headers=new HttpHeaders({Authorization:'Basic'+btoa(user.email+":"+user.password) })
    return this.http.get(this.baseUrl ,{headers,responseType:'text' as 'json',withCredentials:true})
    
  }
}
