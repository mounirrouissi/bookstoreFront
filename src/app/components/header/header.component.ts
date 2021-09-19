import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input() categories: any;
totalQuantity: number=0;


constructor(private cartService:CartService) {

}

  ngOnInit(): void {
    this.updateCartStatus();


  }
  updateCartStatus() {
  

    this.cartService.totalQuantity.subscribe(
  
      (    data: number)=>this.totalQuantity=data 
    );
  
    console.log("cartcartcart "+this.totalQuantity)
    }
}
