import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() button: string;

  constructor(public rota: Router) { }

  ngOnInit(): void {
  }

  navegacaoPostCreate(): void{
    this.rota.navigate(['posts/create']);
  }

  navegacaoHeader(): void{
    this.rota.navigate(['posts']);
  }

}
