import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Post} from "./post";


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() {
  }

  public getPosts():Observable<Post[]> {
    return of()
  }

  public getPost(id: number):Observable<Post> {
     return of()
  }

  public createPost(post: Post): Observable<Post>{
    return of()
  }

}
