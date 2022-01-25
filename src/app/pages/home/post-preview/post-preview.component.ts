import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../../../posts/post";

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent implements OnInit {
  @Input() post?: Post;
  @Output() onPostClick = new EventEmitter<Post>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick() {
    if (this.post) {
      this.onPostClick.emit(this.post);
    }
  }

}
