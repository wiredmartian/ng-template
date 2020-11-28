import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import {PostDetailsComponent} from './pages/post-details/post-details.component';
import {HomeComponent} from './pages/home/home.component';
import {SecretsComponent} from './pages/secrets/secrets.component';
import {AuthGuard} from './api/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsListComponent },
  { path: 'posts/:id', component: PostDetailsComponent },
  { path: 'secrets', component: SecretsComponent, canActivate: [AuthGuard] }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
