import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../posts/post.service";
import {Post} from "../../posts/post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post?: Post;

  constructor(private route: ActivatedRoute, private postService: PostService) {
  }

  ngOnInit(): void {
    const postId = this.route.snapshot.params.id;

    this.postService.getPost(postId)
      .subscribe((post: Post | undefined) => {
        this.post = post;
      });
  }

}
