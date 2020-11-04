import { PostModule } from './components/post/post.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './views/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { PageInicialComponent } from './views/page-inicial/page-inicial.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageInicialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    PostModule,
    HttpClientModule,
    InputTextareaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
