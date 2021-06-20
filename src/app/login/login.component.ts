import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from './models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user=new User('','');
  

 
  constructor(private service:ApiService) { }

  ngOnInit(): void {

  }

login(){
let resp= this.service.login(this.user);
resp.subscribe(data=>{
  console.log(data)
})
}
}
