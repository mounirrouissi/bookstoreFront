import { Book } from "./Book";

export class CartItem {
    id:number;
name:string;
imageUrl:string;
price:number;
quantity:number;
  constructor(book:Book) {
    this.id=book.id;
    this.name=book.name;
    this.imageUrl=book.imageUrl;
    this.price=book.price;
this.quantity=1;
   }

}
