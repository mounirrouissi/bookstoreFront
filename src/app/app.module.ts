import { APP_INITIALIZER, Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { HttpClient, HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { BookComponent } from './books/book.component';
import { SearchComponent } from './components/search/search.component';
import { BookCategoryComponent } from './components/book-category/book-category.component';
import { BookDetailComponent } from './component/book-detail/book-detail.component';
@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    AboutComponent,
    PricingComponent,
    BlogComponent,
    BookComponent,
    BookCategoryComponent,
    SearchComponent,
    BookDetailComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ApiService, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }],

  bootstrap: [AppComponent]
})

export class AppModule { }



