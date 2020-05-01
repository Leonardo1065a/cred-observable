import { Post } from './../resource/post.resource';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, pipe } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const API_BASE = 'https://jsonplaceholder.typicode.com'; 
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  get(): Observable<Post[]>{
    return this.http.get<Post[]>(`${ API_BASE }/posts`)
      .pipe(this.result());
  }

  post(post: Post): Observable<Post> {
    return this.http.post(`${ API_BASE }/posts`, post)
      .pipe(this.result());
  }

  put(post: Post): Observable<Post> {
    return this.http.put(`${ API_BASE }/posts/${ post.id }`, post)
      .pipe(this.result());
  }

  delete(id: number): Observable<Object> {
    return this.http.delete(`${ API_BASE }/posts/${ id }`);
  }

  result(): any{
    return pipe(
      map((res: any) => res),
      catchError((err: any) => throwError({ message: err })))
   }


}
