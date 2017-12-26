
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DemoComponent } from './blogs/demo/demo.component';
// import { BlogCreateComponent } from './blogs/blog-create/blog-create.component';
// import { BlogListComponent } from './blogs/blog-list/blog-list.component';
// import { BlogViewComponent } from './blogs/blog-view/blog-view.component';
import { HomeComponent } from './home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';

const routes: Routes = [

{ path: '', component: HomeComponent},
{ path: '', component: HomeHeaderComponent , outlet:"header"}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class HomeRoutingModule {
}
// export const appRoutingComponents = [AppComponent];
