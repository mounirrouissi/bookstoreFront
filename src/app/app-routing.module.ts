import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { AuthGuard } from './auth/auth.guard';
import { BlogComponent } from './blog/blog.component';
import { BookComponent } from './books/book.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { CartCheckoutComponent } from './components/cart-checkout/cart-checkout.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { FofComponent } from './components/fof/fof.component';
import { HomeComponent   } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OwlSliderComponent } from './components/owl-slider/owl-slider.component';
import { SearchComponent } from './components/search/search.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
// {path:"",canActivate:[AuthGuard]},
// {path:"/**",redirectTo:""}

{path:"",component:HomeComponent  },
{path:"contact",component:ContactComponent  },
{path:"slider",component:OwlSliderComponent  },
{path:"login/callback",component:OktaCallbackComponent},
{path:"login",component:LoginComponent},
{path:"checkout",component:CartCheckoutComponent},
{path:"category/:id",component:BookComponent},
// {path:"category/:name",component:BookComponent},
{path:"blog",component:BlogComponent},
{path:"cart-details",component:CartDetailsComponent},
// {path:"cart-checkout",component:CartCheckoutComponent},
{path:"pricing",component:PricingComponent,canActivate:[AuthGuard]},
{path:"books",component:BookComponent},
{path:"books/:id",component:BookDetailComponent},
{path:"search/:keyword",component:BookComponent},
{path:"home",redirectTo:""},
{path:"**",component:FofComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



