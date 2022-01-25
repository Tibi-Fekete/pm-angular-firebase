import {Component, OnInit} from '@angular/core';
import {PostService} from "../../posts/post.service";
import {Post} from "../../posts/post";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts?: Observable<Post[]>;

  constructor(private postService: PostService, private router: Router) {
  }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }

  async navigateToPost(post: Post) {
    await this.router.navigate(['post', post.id] );
  }

}
