import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-inicial',
  templateUrl: './page-inicial.component.html',
  styleUrls: ['./page-inicial.component.css']
})
export class PageInicialComponent implements OnInit {

  constructor(private rotas: Router) { }

  ngOnInit(): void {
  }

  rotaBotaoClique(): void{
    this.rotas.navigate(['/posts']);
  }

}
