import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'app/services/api.service';
import { CartService } from 'app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input() categoriesToHeader: any;
totalQuantity: number=0;
totalPrice: number=0;
public isCollapsed=true;

constructor(private cartService:CartService,private service:ApiService,private router:Router) {

}



  ngOnInit(): void {
    this.updateCartStatus();


  }
  doSearch(text:string){
    console.log("text="+text);
    this.router.navigateByUrl('/search/'+text)

  }
  updateCartStatus() {
  

    this.cartService.totalQuantity.subscribe(
  
      (    data: number)=>
      {
        this.totalQuantity=data 
      
      }
      
    ); this.cartService.totalPrice.subscribe(
  
      (    data: number)=>
      {
        this.totalPrice=data 
      
      }
      
    );

    }
}
