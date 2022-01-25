import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {PostPreviewComponent} from "./home/post-preview/post-preview.component";
import {SharedModule} from "../shared/shared.module";
import {PostComponent} from './post/post.component';
import {RouterModule} from "@angular/router";
import {ContactComponent} from './contact/contact.component';
import {CreatePostComponent} from './create-post/create-post.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    PostPreviewComponent,
    PostComponent,
    ContactComponent,
    CreatePostComponent,
    SignInComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PagesModule {
}
