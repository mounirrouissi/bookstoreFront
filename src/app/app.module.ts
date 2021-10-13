import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Injector } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { PricingComponent } from './pricing/pricing.component';
import { HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ApiService } from './services/api.service';
import { BookComponent } from './books/book.component';
import { SearchComponent } from './components/search/search.component';
import { CartComponent } from './components/cart/cart.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { defineLordIconElement } from "lord-icon-element";
import { FofComponent } from './components/fof/fof.component';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { CartCheckoutComponent } from './components/cart-checkout/cart-checkout.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';
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
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { OwlSliderComponent } from './components/owl-slider/owl-slider.component';
import { FilterPipe } from './pipes/filter.pipe';


const oktaConfig = Object.assign({
  onAuthRequired: Injector=> {
    const router = Injector.get(Router);

    // Redirect the user to your custom login page
    router.navigate(['/login']);
  }
}, myAppConfig.oidc);
// const oktaAuth = new OktaAuth(oktaConfig);

@NgModule({
  declarations: [
    AppComponent,
    PricingComponent,
    BookComponent,
    SearchComponent,
    BookDetailComponent,
    CartComponent,
    CartDetailsComponent,
    HeaderComponent,
    HomeComponent    ,
    FofComponent,
    LoginComponent,
    CartCheckoutComponent,
    LoginStatusComponent,
    ContactComponent,
    OwlSliderComponent,
    FilterPipe,

    
  ],
  imports: [
    OktaAuthModule,
    MDBBootstrapModule.forRoot()

, 
FormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    CarouselModule ,
    
    RouterModule
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



