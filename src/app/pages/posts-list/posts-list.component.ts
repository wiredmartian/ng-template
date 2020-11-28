import { Component, OnInit } from '@angular/core';
import {PostService} from '../../api/post/post.service';
import {IPost} from '../../models/post.models';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: IPost[];
  constructor(
    private postSvc: PostService
  ) { }

  ngOnInit(): void {
    this.fetchPosts();
  }
  fetchPosts(): void {
    this.postSvc.getPosts()
      .subscribe((result: IPost[]) => {
        this.posts = result;
      }, error =>  {
        console.log(error);
      });
  }
}
