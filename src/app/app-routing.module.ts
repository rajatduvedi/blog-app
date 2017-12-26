import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DemoComponent } from './blogs/demo/demo.component';
// import { BlogCreateComponent } from './blogs/blog-create/blog-create.component';
// import { BlogListComponent } from './blogs/blog-list/blog-list.component';
// import { BlogViewComponent } from './blogs/blog-view/blog-view.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{ path: 'admin', loadChildren: './admin-blog/admin-blog.module#AdminBlogModule' },
{ path: 'blog', loadChildren: './blogs/blog.module#BlogModule' },
{ path: '', loadChildren: './home/home.module#HomeModule' },
// { path: '', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {
    enableTracing: true
  }
  )],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
// export const appRoutingComponents = [AppComponent];
