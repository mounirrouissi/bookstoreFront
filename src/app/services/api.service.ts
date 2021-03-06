import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { Author } from '../models/Author';
import { Book } from '../models/Book';
import { Category } from '../models/category';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getBookById(bookId:number):Observable<Book> {
return this.http.get<Book>(this.baseUrl+"books/"+bookId)
  }
  getCategories(): Observable<Category[]> {
    return this.http.get<any>(this.baseUrl + "categories");
  }
  baseUrl: any = "http://www.localhost:8042/"
  constructor(private http: HttpClient) { }


  login(email: string, password: string) {
    //   const headers = new HttpHeaders(user ? {
    //     authorization : 'Basic ' + btoa(user.email + ':' + user.password)
    // } : {});

    return this.http.post(this.baseUrl + "login", { email, password })
  }

//get pagination based on page number and size ;spring rest apply pagination internelly
  getBooksPaginate(pageNumber:number,pageSize:number,categoryId: number): Observable<Book[]> {
    let url=this.baseUrl + "categories/" + categoryId  + "?page="+ pageNumber+"&size="+pageSize ;
    return this.http.get<Book[]>(url);
 
  }
  getBooks(categoryId: number): Observable<GetResponse['books']> {
    //TODO
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get<GetResponse["books"]>(this.baseUrl + "categories/" + categoryId)
    /* .toPromise(resp=>console.log(resp)).then()
    .catch(err=>console.log(err));
   */

  }

  searchMethod(text?: any): Observable<GetResponse['books']> {
    return this.http.get<GetResponse['books']>(this.baseUrl + "books/search/" + text)
  }


}
interface GetResponse {

  books: Book[];

}


