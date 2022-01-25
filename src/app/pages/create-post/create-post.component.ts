import {Component, OnInit} from '@angular/core';
import {Post} from "../../posts/post";
import {PostService} from "../../posts/post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  post: Post = {
    title: '',
    body: '',
    subtitle: '',
    author: '',
    date: ''
  };

  constructor(private postService: PostService, private router: Router) {
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    this.post.date = new Date().toISOString();
    const savedPostRef = await this.postService.createPost(this.post);
    await this.router.navigate(['home']);
    console.log(savedPostRef);
  }
}
