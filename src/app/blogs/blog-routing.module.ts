import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { BlogViewComponent } from './blog-view/blog-view.component';

const routes: Routes = [
  { path: '', component: AdminBlogComponent },
  { path: 'blog-create', component: BlogCreateComponent},
  { path: 'blog-list', component: BlogListComponent},
  { path: 'blog-view', component:BlogViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class BlogRoutingModule {}
