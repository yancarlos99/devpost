import { PaginaPost } from './paginaPost.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from './post.model';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl = 'http://localhost:8080/posts';
  constructor(private http: HttpClient) { }

  gravar(post: Post): Observable<Post>{
    return this.http.post<Post>(this.apiUrl, post);
  }

  buscarPostPorId(id: number): Observable<Post>{
    return this.http.get<any>(`http://localhost:8080/posts/${id}`);

  }

  atualizar(id: number, body): Observable<Post>{
    return this.http.put<Post>(`http://localhost:8080/posts/${id}`, body);
  }

  listarPosts(page, size): Observable<PaginaPost> {
    const params = new HttpParams()
    .set('page', page)
    .set('size', size);

    return this.http.get<any>(`${this.apiUrl}?${params.toString()}`);
  }

  deletar(id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/posts/${id}`);

  }
}
