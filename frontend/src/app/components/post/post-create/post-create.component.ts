import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from './../post.model';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  post: Post = {
    titulo: '',
    autor: '',
    texto: '',
  };

  // tslint:disable-next-line: no-inferrable-types
  success: boolean = false;

  constructor(
    private postService: PostService,
    private rota: Router
    ) { }

  ngOnInit(): void {}

  navegacaoHeader(): void{
    this.rota.navigate(['/posts']);
  }

  submit(): void{
    this.postService.gravar(this.post).subscribe(response => {
      this.success = true;
      setTimeout(() => this.navegacaoHeader(), 1000);
    });
  }

}
