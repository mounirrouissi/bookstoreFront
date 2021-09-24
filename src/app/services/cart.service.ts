import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { CartItem } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  

  carItems: CartItem[] = []
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }


  addItem(newCartItem: CartItem) {


    // check if we already have the item in our Cart

    let alreadyExist: boolean = false;
    let existingItem: any = undefined;

    if (this.carItems.length > 0) {

      // find item in the cart based on its id

      for (let temp of this.carItems) {
        if (temp.id === newCartItem.id) {
          existingItem = temp
          break;
        }

      }

      //refactoring the for loop by using array.find method
      existingItem = this.carItems.find(temp=>temp.id === newCartItem.id)

      // check if we found it return true or false depend if we found it or not 
      alreadyExist = (existingItem != undefined)
      console.log("alreadyExist"+alreadyExist)
    }

    //increment quantity if item is already exists else add to the array
    if (alreadyExist) {
      existingItem.quantity++
    } else {
      this.carItems.push(newCartItem);
    }

    //compute cart money and quantity total 
    this.computeCartTotal()
  }
  computeCartTotal() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (const currentCartItem of this.carItems) {
      totalPriceValue += currentCartItem.quantity * currentCartItem.price;
      totalQuantityValue += currentCartItem.quantity;
    }
    //publish new values .... all subs will recieve the new data
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

      //logging data 

      this.logCartDAta(totalPriceValue, totalQuantityValue);
    }

  logCartDAta( totalPriceValue: number, totalQuantityValue: number) {
    console.log("content of the cart :\n")
    for (const currentCartItem of this.carItems) {
      const xtotalPriceValue = currentCartItem.quantity * currentCartItem.price;
      const xtotalQuantityValue = currentCartItem.quantity;
      console.log("name \n:"+currentCartItem.name +"\ntotal price  :"+ xtotalPriceValue+"\ntotal quantity : "+xtotalQuantityValue);

  }
  console.log("the Sum : \n"+"\n price :"+totalPriceValue.toFixed(3)+"\nquantity:"+totalQuantityValue)
  }

  remove(item: CartItem) {
  const itmeIndex=this.carItems.findIndex(temp=>temp.id==item.id);
  if(itmeIndex>-1)
  this.carItems.splice(itmeIndex,1)
  }

}


