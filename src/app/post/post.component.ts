// PostComponent - the parent component


import { Component, OnInit } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
