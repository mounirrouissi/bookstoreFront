import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import lottie from 'lottie-web';
import { defineLordIconElement } from "lord-icon-element";
import { FofComponent } from './components/fof/fof.component';
import { Carousel1Component } from './components/carousel/carousel.component';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { CartCheckoutComponent } from './components/cart-checkout/cart-checkout.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { AuthRoutingModule } from './auth-routing.module';
import { HomeComponent } from './components/home/home.component';
import myAppConfig from './config/my-app-config';

// @Injectable()
// export class XhrInterceptor implements HttpInterceptor {

//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     const xhr = req.clone({
//       headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
//     });
//     return next.handle(xhr);
//   }
// }

import {
  OKTA_CONFIG,
  OktaAuthModule,
  OktaCallbackComponent,
  OktaAuthGuard
} from '@okta/okta-angular';


const oktaConfig = Object.assign({
  onAuthRequired: (injector: { get: (arg0: typeof Router) => any; }) => {
    const router = injector.get(Router);

    // Redirect the user to your custom login page
    router.navigate(['/login']);
  }
}, myAppConfig.oidc);
// const oktaAuth = new OktaAuth(oktaConfig);

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
    Carousel1Component,
    HomeComponent    ,
    FofComponent,
    LoginComponent,
    CartCheckoutComponent,
    LoginStatusComponent,

    
  ],
  imports: [
    OktaAuthModule
, OktaAuthGuard,
FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    
    RouterModule,
    AuthRoutingModule
  ],
  providers: [ApiService,
    { provide: OKTA_CONFIG, useValue: oktaConfig }
  ],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule {

  constructor(){
    

  }

 }



