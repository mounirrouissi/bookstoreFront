import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/Book';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  
  book: Book={

    id:0,
    price:0,
    imageUrl:"",
    name:"",
    dateCreated:new Date,
    dateUpdated:new Date
    
  };

  constructor(private service:ApiService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getBookById();
  }
  getBookById() {
    let bookId=Number(this.route.snapshot.paramMap.get("id"));

   this.service.getBookById(bookId).subscribe
   (
     res=>{this.book=res},
     _error=>{alert("no sush book ")}
   )
  }

}
