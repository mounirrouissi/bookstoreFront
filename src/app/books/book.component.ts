import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../models/Book';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
books:Book[]=[];
 currentCategoryId!: number;
 previousCategoryId!: number;
pageNumber:number=1;
pageSize=10;
totalElements:number=0;



  constructor(private apiService:ApiService,private route:ActivatedRoute) { }

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
  console.log("****"+text);
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
}



  // check if we have a diiferent category than previous 
  // Note : Angular will reuse a component if it is currently being viewed
 
 //if we have a different categor id than the previous => reset page number to one

 if(this.previousCategoryId != this.currentCategoryId)
 {
this.pageNumber=1;

}
this.previousCategoryId = this.currentCategoryId ;
 
//now get products for the given category id
 
  this.apiService.getBooksPaginate(
    this.pageNumber-1,
    this.pageSize,
    this.currentCategoryId).subscribe(  
 data=>{

   this.books=data;
   const sPageNumber = data.map(m => m.page!!.number);
   this.pageNumber=+(sPageNumber)+1;
   const sPageSize = data.map(m => m.page!!.size);
  this.pageSize=+(sPageSize);
  console.log(sPageNumber+"*****"+sPageSize);
 }
    );
}

}

