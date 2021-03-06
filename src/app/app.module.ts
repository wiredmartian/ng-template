import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {InterceptorService} from './api/interceptor.service';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import {PostService} from './api/post/post.service';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { HomeComponent } from './pages/home/home.component';
import { SecretsComponent } from './pages/secrets/secrets.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostDetailsComponent,
    HomeComponent,
    SecretsComponent
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
