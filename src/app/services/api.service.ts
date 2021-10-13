import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Purchase } from 'app/models/checkoutOrder/purchase';
import { Feedback } from 'app/models/Feedback';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Author } from '../models/Author';
import { Book } from '../models/Book';
import { Books } from '../models/Books';
import { Category } from '../models/category';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
}) 
export class ApiService {
  filterBooksByDAte(books: any):Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl+"books/filter/date");
  }
  
  
  
  
  sendOrder(purchase: Purchase):Observable<any>{
    return this.http.post<Purchase>(this.baseUrl+"purchase",purchase);
  }
  getlatestSixBooks(id: Number):Observable<Book[]> {
    
   return this.http.get<Book[]>(this.baseUrl+"/books/latest/"+id) 
  }
  getCategoryById(currentCategoryId: number):Observable<Category> {
  return this.http.get<Category>(this.baseUrl+"category/"+currentCategoryId)
  }
  
  
  postFeedback(model: Feedback) :Observable<Feedback>{
  return this.http.post<Feedback>(this.baseUrl+"feedback/",model);
  }

  getBooksByCategoryId(categoryId: number): Observable<Book[]> {
    console.log("url url"+this.baseUrl + "categories/id/" + categoryId+"?page=0&size=3")
    return this.http.get<Book[]>(this.baseUrl + "categories/" + categoryId+"?page=0&size=3");
  }
  getBooksByCategoryName(categoryName: string): Observable<Book[]> {
  const url= this.baseUrl + "categories/name/?name=" + categoryName+"&page=0&size=3"
  console.log("urlurlurl="+url)
    return this.http.get<Book[]>(url);
  }



  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + "categories");
  }
  baseUrl: any = environment.baseUrl
  constructor(private http: HttpClient) { }


  login(email: string, password: string) {
    //   const headers = new HttpHeaders(user ? {
    //     authorization : 'Basic ' + btoa(user.email + ':' + user.password)
    // } : {});

    return this.http.post(this.baseUrl + "login", { email, password })
  }

  //get pagination based on page number and size ;spring rest apply pagination internelly
   getBooksPaginate(pageNumber: number, pageSize: number, categoryId: number): Observable<Books> {
    let url = this.baseUrl + "categories/" + categoryId + "?page=" + pageNumber + "&size=" + pageSize;
    return this.http.get<Books>(url);

  }


// ***Books***


  getBookById(bookId: number): Observable<Book> {
    return this.http.get<Book>(this.baseUrl + "books/" + bookId)
  }

  getBooks(categoryId: number): Observable<Book[]> {
    //TODO
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get<Book[]>(this.baseUrl + "categories/" + categoryId)
    /* .toPromise(resp=>console.log(resp)).then()
    .catch(err=>console.log(err));
   */

  }

  searchMethod(text?: any): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl + "books/search/" + text)
  }


}



