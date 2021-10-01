import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Category } from './models/category';
import { ApiService } from './services/api.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test2';
  isAuthenticated: boolean = false;
categories:Category[]=[]
  constructor(public oktaAuth: OktaAuthService,private service:ApiService,private cartSerive:CartService) {
  }

  async ngOnInit() {
/*     this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    ); */
    this.getCategories()
  }
 getCategories() {
  
this.service.getCategories().subscribe(

  res=>{this.categories=res;},
  errs=>{alert("Problem")}
)
}

}
