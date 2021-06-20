import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { BlogComponent } from './blog/blog.component';
import { BookComponent } from './books/book.component';
import { BookDetailComponent } from './component/book-detail/book-detail.component';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
// {path:"",canActivate:[AuthGuard]},
// {path:"/**",redirectTo:""}
{path:"login",component:LoginComponent},
{path:"category/:id",component:BookComponent},
{path:"blog",component:BlogComponent},
{path:"footer",component:FooterComponent},
{path:"about",component:AboutComponent},
{path:"pricing",component:PricingComponent,canActivate:[AuthGuard]},
{path:"books",component:BookComponent},
{path:"books/:id",component:BookDetailComponent},
{path:"search/:keyword",component:BookComponent},
{path:"home",redirectTo:""},
{path:"**",redirectTo:""},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }