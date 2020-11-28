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
    /* subscribe? I think not...
     * but if you want, an observable is returned by default
     */

    /* this.postSvc.getPosts()
      .subscribe((result: IPost[]) => {
        this.posts = result;
      }, error =>  {
        console.log(error);
      }); */

    // grown ups make promises
    this.postSvc.getPosts().toPromise()
      .then((result: IPost[]) => {
        this.posts = result;
      }).catch(error =>  {
      console.log(error);
    });
  }
  deletePost(post: IPost): void {
    this.postSvc.removePost(post.id).toPromise()
      .then((res: any) => {
        // when we get here, our API call was success
        // now we need to remove the post from UI (table)
        // find post index
        const index = this.posts.findIndex(x => x.id === post.id);
        // remove item in that index
        this.posts.splice(index, 1);
      }).catch(error => {
      console.log(error);
    });
  }
}
