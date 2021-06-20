import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { User } from '../models/User';
import { Category } from '../models/category';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user=new User('','');

  constructor(private service:ApiService,private router:Router) { }

  ngOnInit(): void {
  }


login(user:User){

this.service.login(user.email,user.password).subscribe
( () => {
  this.router.navigateByUrl('/');
});
}



}
