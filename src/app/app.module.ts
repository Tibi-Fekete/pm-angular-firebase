import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {AppRoutingModule} from './app-routing.module';
import {PagesModule} from "./pages/pages.module";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {PostService} from "./posts/post.service";
import {PostMockService} from "./posts/post-mock.service";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
    ToastrModule.forRoot(),


  ],
  providers: [
    {provide: PostService, useClass: PostMockService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
