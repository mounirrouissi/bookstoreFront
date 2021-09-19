import { Injectable, NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ApiService } from './services/api.service';
import { BookComponent } from './books/book.component';
import { SearchComponent } from './components/search/search.component';
import { BookCategoryComponent } from './components/book-category/book-category.component';
import { CartComponent } from './components/cart/cart.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import lottie from 'lottie-web';
import { defineLordIconElement } from "lord-icon-element";
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';
import { FofComponent } from './components/fof/fof.component';
// @Injectable()
// export class XhrInterceptor implements HttpInterceptor {

//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     const xhr = req.clone({
//       headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
//     });
//     return next.handle(xhr);
//   }
// }
@NgModule({
  declarations: [
    AppComponent,
    PricingComponent,
    BlogComponent,
    BookComponent,
    BookCategoryComponent,
    SearchComponent,
    BookDetailComponent,
    CartComponent,
    CartDetailsComponent,
    HeaderComponent,
    CarouselComponent,
    HomeComponent,
    FofComponent,
    
  ],
  imports: [
FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
  ],

  // providers: [ApiService, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class AppModule { 
  constructor(){
    defineLordIconElement(lottie.loadAnimation);

  }
}



