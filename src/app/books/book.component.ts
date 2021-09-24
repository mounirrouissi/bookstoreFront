import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../models/Book';
import { Books } from '../models/Books';
import { CartItem } from '../models/cart';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  
  books: Book[] | any = [];
 currentCategoryId: number=1;
 previousCategoryId!: number;
pageNumber:number=1;
pageSize=10;
totalElements:number=0;



  constructor(private apiService:ApiService,private route:ActivatedRoute,private cartService:CartService) { }

  ngOnInit(): void {
   this.route.paramMap.subscribe(()=>{
    this.listProducts();
   } )  ;
  }
  listProducts() {
    if(this.route.snapshot.paramMap.has("keyword"))
   { this.getProductsBySearch()}
   else

{  this.getBooks() ;
    }
  }
  getProductsBySearch() {
  //
  const text=this.route.snapshot.paramMap.get("keyword");
  console.log("**bcomponent searched keywoord**"+text);
  this.apiService.searchMethod(text).subscribe(
    res=>{this.books=res;},
    _error=>{alert("can't get data from seaarched text");}
    )
  }


  //get books by category
 getBooks() {
   //  check if 'id ' is avaialble
const hasCategoryId:boolean=this.route.snapshot.paramMap.has('id');

if(hasCategoryId )
{
this.currentCategoryId= Number(this.route.snapshot.paramMap.get('id'));
console.log("***cureentId==="+this.currentCategoryId);
this.apiService.getBooksByCategory(this.currentCategoryId).subscribe(
  res=>{
  console.log(res),
    this.books=res}
);
}

  // check if we have a diiferent category than previous 
  // Note : Angular will reuse a component if it is currently being viewed
 
 //if we have a different categor id than the previous => reset page number to one

  if(this.previousCategoryId != this.currentCategoryId)
  {
 this.pageNumber=1;

}
this.previousCategoryId = this.currentCategoryId ;
 
console.log("current category id =="+this.currentCategoryId+"pageNumber="+this.pageNumber)
 //now get products for the given category id
 
  this.apiService.getBooksPaginate(
    this.pageNumber-1,
    this.pageSize,
    this.currentCategoryId).subscribe(  
 data=>{
console.log("data.content.books"+data)
   this.books=data.content;
   console.log("🚀 ~ file: book.component.ts ~ line 89 ~ BookComponent ~ getBooks ~   data.content.books;",   data.content)
   this.pageNumber = data.number+1;
   this.pageSize = data.size;
this.totalElements=data.totalElements;

  }
    ); 
 
}



  
addToCart(book:Book){

const cartItem=new CartItem(book);

console.log("ddd"+cartItem.name)


//TODO ...do the real  work

this.cartService.addItem(cartItem);
}

}

