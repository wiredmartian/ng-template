import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {InterceptorService} from './api/interceptor.service';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import {PostService} from './api/post/post.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
