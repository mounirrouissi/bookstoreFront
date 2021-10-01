import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartItem } from 'app/models/cart';
import { CartService } from 'app/services/cart.service';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent implements OnInit {
  cartItems:CartItem[]=[]
form!:FormGroup

totalPrice:number=0
totalQuantity!:number


  constructor(private service:CartService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.cartItems=this.service.carItems
 this.getCartData()
 this.formMethod()
this.onSubmit()
}
  onSubmit() {
    throw new Error('Method not implemented.');
  }
  formMethod() {
    this.form=this.fb.group({
"clientName":["",Validators.required],
"clientAddr":["",Validators.required],
"clientCity":["",Validators.required],
"clientEmail":["",Validators.required]
    })
  }

  getCartData() {



 
    this.service.totalPrice.subscribe(
      (res)=>{this.totalPrice=res}
      
    )
     
     
    this.service.totalQuantity.subscribe(
      (res)=>{this.totalQuantity=res},
      (error)=>{alert("Problem getting cart Quantity")}
      
    )
    this.service.computeCartTotal()
     
  
  }

}

