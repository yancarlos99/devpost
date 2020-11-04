import { PostUpdateComponent } from './components/post/post-update/post-update.component';
import { PostViewComponent } from './components/post/post-view/post-view.component';
import { PostListComponent } from './components/post/post-list/post-list.component';
import { PostCreateComponent } from './components/post/post-create/post-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageInicialComponent } from './views/page-inicial/page-inicial.component';




const routes: Routes = [
  {
    path: '',
    component: PageInicialComponent
  },
  {
    path: 'posts',
    component: PostListComponent
  },

  {
    path: 'posts/create',
    component: PostCreateComponent
  },

  {
    path: 'posts/update/:id',
    component: PostUpdateComponent
  },

  {
    path: 'posts/:id',
    component: PostViewComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
