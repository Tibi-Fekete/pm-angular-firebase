import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {PostComponent} from "./pages/post/post.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {CreatePostComponent} from "./pages/create-post/create-post.component";
import {SignInComponent} from "./pages/sign-in/sign-in.component";

const routes: Routes = [
  {path: '', component: SignInComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'about', component: AboutComponent},
  {path: 'post/:id', component: PostComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'create-post', component: CreatePostComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
