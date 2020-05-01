import { Post } from './../resource/post.resource';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const API_BASE = 'https://jsonplaceholder.typicode.com'; 
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  get(): Observable<Post[]>{
    return this.http.get<Post[]>(`${ API_BASE }/todos`)
      .pipe(
        map((res: any) => res.json() ),
        catchError((err: any) => throwError(err.json())));
  }


}
