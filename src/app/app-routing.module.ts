import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SideMenuComponent } from './common/side-menu/side-menu.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
const routes: Routes = [
  { path: 'login-page', component: LoginPageComponent },
  { path: 'signup-page', component: SignupPageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup-page', component: FooterComponent },
  { path: 'signup', component: SideMenuComponent },
  { path: 'login', component: HeaderComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },  // Wildcard route for a 404 page


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
