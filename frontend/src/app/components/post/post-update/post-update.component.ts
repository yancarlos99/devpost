import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent implements OnInit {

  post: Post = {
    titulo: '',
    autor: '',
    texto: '',
  };
  id: number;

  success: boolean = false;

  constructor(
    private postService: PostService,
    private rota: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {

    const params: Observable<Params> = this.activatedRoute.params;
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if (this.id){
        this.postService
        .buscarPostPorId(this.id)
        .subscribe(
          response => {

          this.post = response;
          console.log(response);
          });
      }
    });
  }

  atualizarPost(): void{
    this.postService.atualizar(this.post.id, this.post).subscribe();
    this.navegacaoHeader();
  }

  navegacaoHeader(): void{
    this.rota.navigate(['/posts']);
  }

}
