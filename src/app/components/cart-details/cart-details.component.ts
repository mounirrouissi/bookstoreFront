import { Component, OnInit } from '@angular/core';
import { CartItem } from 'app/models/cart';
import { CartService } from 'app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  cartItems:CartItem[]=[]
  price: number=0;

  constructor(private cartservice:CartService  ) { }

  ngOnInit(): void {
    this.cartItems=this.cartservice.carItems
    this.cartservice.totalPrice.subscribe(
(data)=>this.price=data

    );
    this.cartservice.computeCartTotal()
  }

decrementQuantity(item:CartItem){
  item.quantity--;

  if(item.quantity===0)
   this.cartservice.remove(item)
   else
   this.cartservice.computeCartTotal()

}

incrementQuantity(item:CartItem){
  this.cartservice.addItem(item)
  
}
remove(item:CartItem){

   this.cartservice.remove(item)
}
}
