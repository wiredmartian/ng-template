import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {PostService} from '../../api/post/post.service';
import {IPost} from '../../models/post.models';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  post = null as IPost;
  constructor(
    private route: ActivatedRoute,
    private postSvc: PostService
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {

      // get id from parameters
      this.getPostDetails(params.id);
    });
  }

  getPostDetails(id: number): void {
    this.postSvc.getPost(id).toPromise()
      .then((res: IPost) => {
        this.post = res;
      }).catch(err => {
        console.log(err);
    });
  }

  ngOnDestroy(): void {
    // this is why we don't subscribe to things in the first play
    // but sometimes, its just how things work
    this.subscription.unsubscribe();
  }
}
