import { CardModule } from 'primeng/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {EditorModule} from 'primeng/editor';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MatPaginatorModule} from '@angular/material/paginator';


import { PostListComponent } from '../post/post-list/post-list.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostViewComponent } from './post-view/post-view.component';
import { PostUpdateComponent } from './post-update/post-update.component';






@NgModule({
  declarations: [
    PostListComponent,
    PostCreateComponent,
    PostViewComponent,
    PostUpdateComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    EditorModule,
    FormsModule,
    MessagesModule,
    MessageModule,
    MatPaginatorModule

  ],
  exports: [
    PostListComponent,
    PostCreateComponent,
    PostViewComponent,
    PostUpdateComponent
  ]
})
export class PostModule { }
