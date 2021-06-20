import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
// {path:"",canActivate:[AuthGuard]},
// {path:"/**",redirectTo:""}
{path:"login",component:LoginComponent},
{path:"blog",component:BlogComponent},
{path:"footer",component:FooterComponent},
{path:"about",component:AboutComponent},
{path:"pricing",component:PricingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }