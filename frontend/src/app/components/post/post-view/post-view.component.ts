import { Observable } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Router } from '@angular/router';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { ConfirmationService } from 'primeng/api';




@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css'],
})
export class PostViewComponent implements OnInit {

  post: Post = {
    titulo: '',
    autor: '',
    texto: '',
  };

  id: number;
  success: boolean = false;

  constructor(
    private service: PostService,
    private activatedRoute: ActivatedRoute,
    private rotas: Router,
    ) { }

  ngOnInit(): void {

    const params: Observable<Params> = this.activatedRoute.params;
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if (this.id){
        this.service
        .buscarPostPorId(this.id)
        .subscribe(
          response => {

          this.post = response;
          console.log(response);
          });
      }
    });
  }

  rotaBotaoVisualizar(id: number): void{
    this.rotas.navigate([`posts/update/${id}`]);
  }

  navegacaoHeader(): void {
    this.rotas.navigate(['/posts']);
  }

  deletarPost(): void{

    this.service.deletar(this.id).subscribe();
    setTimeout(() => this.navegacaoHeader(), 1000);
    this.success = true;

  }



}
