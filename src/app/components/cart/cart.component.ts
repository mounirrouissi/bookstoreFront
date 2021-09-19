import { Component, OnInit } from '@angular/core';
import { CartService } from 'app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalPrice: number =0;
  totalQuantity: number=0;
  isCollapsed=false;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.updateCartStatus();
  }

    //subscrbe to service events

  updateCartStatus() {
  

  this.cartService.totalPrice.subscribe(

    (    data: number)=>this.totalPrice=data 
  );  
  this.cartService.totalQuantity.subscribe(

    (    data: number)=>this.totalQuantity=data 
  );

  console.log("cartcartcart "+this.totalQuantity)
  }
  showBoughtItems(){
    alert("empty");
  }
}