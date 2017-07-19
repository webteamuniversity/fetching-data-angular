import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../Post';

@Component({
  selector: 'app-post-list',
  template: `
  <div>
    <ul class="items">
        <li *ngFor="let post of posts">
            <span>{{post.title}}</span>
        </li>
    </ul>
</div>
  `,
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {
private posts: Post[] = [];
private errorMessage: any = '';
  constructor(private postService: PostService) {

  }
    ngOnInit() {
    this.getPosts();
    }

  getPosts() {
 this.postService.getData()
        .subscribe(
            posts => this.posts = posts,
            error => this.errorMessage = <any>error);
}
}
