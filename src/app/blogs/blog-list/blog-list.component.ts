import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IBlog, Blog } from '../../models/blog.model';
import { DataService } from './../../../app-services/data/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlogListComponent implements OnInit {
  blogModel= [];
  urlstr = [];
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    alert("hello")
    this.getAllBlog();
   this.urlstr = this.router.url.split("/");
   console.log(this.urlstr[1] + '/v')

  }
  getAllBlog() {
    this.dataService.getAllBlogService()
      .subscribe(
        res => {
          console.log(res);
          this.blogModel = res;
        },
        error => {
          console.log(error);
        },
        ()=>{

        }
      )
  }

  gotoBlogView(data) {
    // [routerLink]="['/'+this.urlstr[1]+'/blog-view']"
    console.log(data);
    this.router.navigate([this.urlstr[1]+'/blog/blog-view'], {queryParams: { blogId: data } });

  }

}
