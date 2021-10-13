import { CartItem } from "../cart";

export class OrderItem {
    imageUrl!: string;
    unitPrice!: number;
    quantity!: number;
    productId!: string;

    constructor(carItem:CartItem){
this.imageUrl=carItem.imageUrl
this.unitPrice=carItem.price
this.quantity=carItem.quantity
this.productId=carItem.imageUrl

    }
}
