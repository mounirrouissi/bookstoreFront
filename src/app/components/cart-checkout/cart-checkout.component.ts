import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartItem } from 'app/models/cart';
import { Address } from 'app/models/checkoutOrder/address';
import { Country } from 'app/models/checkoutOrder/coutry';
import { Customer } from 'app/models/checkoutOrder/customer';
import { Order } from 'app/models/checkoutOrder/order';
import { OrderItem } from 'app/models/checkoutOrder/order-item';
import { Purchase } from 'app/models/checkoutOrder/purchase';
import { State } from 'app/models/checkoutOrder/state';
import { ApiService } from 'app/services/api.service';
import { CartService } from 'app/services/cart.service';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent implements OnInit {
  message:string=""
  cartItems:CartItem[]=[]
form!:FormGroup

totalPrice:number=0
totalQuantity!:number


  constructor(private service:CartService,private fb:FormBuilder,private apiService:ApiService) { }

  ngOnInit(): void {
    this.cartItems=this.service.carItems
 this.getCartData()
 this.formMethod()
this.onSubmit()
}
onSubmit(): void {

  // set up order
 let order = new Order()
 order.totalPrice=this.totalPrice
order.totalQuantity=this.totalQuantity
  //get cart Items
const cartItems=this.service.carItems
  //create orderItems from cartItems
let orderItems:OrderItem[]=cartItems.map(item=>new OrderItem(item))
  //set up purchase & populate address
let purchase=new Purchase()

let customerStreet:string=this.form.controls['customerStreet'].value
let customerState=this.form.controls['customerState'].value
let customerCity=this.form.controls['customerCity'].value
let customerCountry=this.form.controls['customerCountry'].value
let shippingAddress=new Address(customerStreet,customerCity,customerState,customerCountry)
purchase.shippingAddress=shippingAddress

const shippingState:State=JSON.parse(JSON.stringify(purchase.shippingAddress.state))
const shippingCountry:Country=JSON.parse(JSON.stringify(purchase.shippingAddress.country))
purchase.shippingAddress.state=shippingCountry.name
purchase.shippingAddress.country=shippingState.name

//populate :--customer
let customerFirstName:string=this.form.controls['customerFirstName'].value
let customerLastName:string=this.form.controls['customerLastName'].value
let customerEmail:string=this.form.controls['customerEmail'].value

let customer=new Customer(customerFirstName,customerLastName,customerEmail)
console.log("shipping   ="+shippingAddress.city)
console.log("customer  ="+customer.email)

purchase.customer=customer

//populate  --purchase -- order &ordcerItems
purchase.order=order
purchase.orderItems=orderItems
console.log("purchase before api"+purchase.customer.email )
  //call service
  this.apiService.sendOrder(purchase).subscribe(
   (res) => {
     this.message="Order Sent Successfuly";
alert("order received"+res.orderTrackingNumber)
      location.reload
   },
   err => {
     alert("An error has occurred while sending Order");
   }
 );
}

  formMethod() {
    this.form=this.fb.group({
"customerFirstName":["",[Validators.required,Validators.minLength(2)]],
"customerLastName":["",[Validators.required,Validators.minLength(2)]],
"customerEmail":["",Validators.required],
"customerCountry":["",Validators.required],
"customerStreet":["",Validators.required],
"customerCity":["",Validators.required],
"customerState":["",Validators.required]
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

