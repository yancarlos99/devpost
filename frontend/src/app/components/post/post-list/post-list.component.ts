
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];

  totalElementos = 0;
  pagina = 0;
  tamanho = 2;
  pageSizeOptions: number[] = [2];

  constructor(private postService: PostService, private rotas: Router) { }

  ngOnInit(): void {
    this.listarPosts(this.pagina, this.tamanho);
  }

  // tslint:disable-next-line: typedef
  listarPosts(pagina = 0, tamanho = 0){
    this.postService.listarPosts(pagina, tamanho).subscribe(response => {
      this.posts = response.content;
      this.totalElementos = response.totalElements;
      this.pagina = response.number;
    });
  }

  // tslint:disable-next-line: typedef
  paginar(event: PageEvent){
    this.pagina = event.pageIndex;
    this.listarPosts(this.pagina, this.tamanho);
  }

  rotasBotaoVisualizar(id: number): void{
    this.rotas.navigate([`posts/${id}`]);
  }

}
