import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'app/models/Book';
import { CartItem } from 'app/models/cart';
import { ApiService } from 'app/services/api.service';
import { CartService } from 'app/services/cart.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book!:Book;


  constructor(private service:ApiService,private route:ActivatedRoute, private location: Location,private cartService:CartService) { }

  ngOnInit(): void {
     this.getBookById();
  }
  getBookById() {
    let bookId=Number(this.route.snapshot.paramMap.get("id"));
   this.service.
   getBookById(bookId).subscribe
   (
     res=>{
      console.log("BOok="+res) ,
      this.book=res},
     _error=>{alert("no sush book ")}
   )
  }
  back() {
    this.location.back();
  }
  addToCart() {
    

    const cartItem=new CartItem(this.book);
    console.log("🚀 ~ file: book-detail.component.ts ~ line 39 ~ BookDetailComponent ~ addToCart ~ cartItem", cartItem)
    this.cartService.addItem(cartItem);
    
  }

}
