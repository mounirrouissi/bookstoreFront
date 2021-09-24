import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { BlogComponent } from './blog/blog.component';
import { BookComponent } from './books/book.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { FofComponent } from './components/fof/fof.component';
import { HomeComponent   } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
// {path:"",canActivate:[AuthGuard]},
// {path:"/**",redirectTo:""}

{path:"",component:HomeComponent  },
{path:"login/callback",component:OktaCallbackComponent},
{path:"login",component:LoginComponent},
{path:"category/:id",component:BookComponent},
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



