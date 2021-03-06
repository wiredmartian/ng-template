import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPost} from '../../models/post.models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>('/posts');
  }
  getPost(postId: number): Observable<IPost> {
    return this.http.get<IPost>(`/posts/${postId}`);
  }
  removePost(postId: number): Observable<any> {
    return this.http.delete(`/posts/${postId}`);
  }
}
