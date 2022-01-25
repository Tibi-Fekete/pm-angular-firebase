import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Post} from "./post";

@Injectable({
  providedIn: 'root'
})
export class PostMockService {
  private readonly bodyText: string = `Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory.

  Science cuts two ways, of course; its products can be used for both good and evil. But there's no turning back from science. The early warnings about technological dangers also come from science.

  What was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth.

  A Chinese tale tells of some men sent to harm a young girl who, upon seeing her beauty, become her protectors rather than her violators. That's how I felt seeing the Earth for the first time. I could not help but love and cherish her.

  For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us.`;


  private readonly posts: Post[] = [
    {
      id: 1,
      title: 'Man must explore, and this is exploration at its greatest',
      subtitle: 'Problems look mighty small from 150 miles up',
      body: this.bodyText,
      date: '2021-12-29T14:38:47+0000',
      author: 'Laci'
    },
    {
      id: 2,
      title: 'I believe every human has a finite number of heartbeats. I don\'t intend to waste any of mine.',
      body: this.bodyText,
      date: '2021-12-29T14:38:47+0000',
      author: 'Tibi'
    },
    {
      id: 3,
      title: 'Science has not yet mastered prophecy',
      subtitle: 'We predict too much for the next year and yet far too little for the next ten.',
      body: this.bodyText,
      date: '2021-12-29T14:38:47+0000',
      author: 'Adam'
    }
  ];


  constructor() { }


  getPosts(): Observable<Post[]> {
    return of(this.posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date)));
  }

  getPost(id: number): Observable<Post | undefined> {
    return of(this.posts.find(p => p.id == id));
  }

  createPost(post: Post): Observable<Post> {
    post.id = this.posts.length + 1;
    this.posts.push(post);
    return of(post);
  }

}
