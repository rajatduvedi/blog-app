import { Component, OnInit, OnDestroy,OnChanges, AfterContentInit, Input, ViewEncapsulation, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../app-services/data/data-service.service';
import { ICategory, Category, IBlog, Blog} from '../../models/blog.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-category-list',
  templateUrl: './sub-category-list.component.html',
  styleUrls: ['./sub-category-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SubCategoryListComponent implements OnInit, OnDestroy, AfterContentInit,OnChanges {

  @Input() passData:any;
  categorykey;
  subCategoryKey;
  blogModel= [];
  blogModelcon = [];
  urlstr=[];
  loadnumber =0;
  check;
  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    console.log(this.passData);
    console.log("category is cming here");
    this.route.params
  .forEach(params => {
    this.categorykey = params['topics'];
    this.subCategoryKey = params['subTopic'];

    // this.searchArticles(tech, keyword);
  })
//     this.route.params.subscribe(params => {
//    this.categorykey = params['topics'];
//    this.subCategoryKey = params['subTopic'];
// });
  if(this.passData == 'recent') {
    this.getrecentyBlogsList(0);

  }
  if(this.passData == 'popular') {
    this.getPopularBlogsList(0);

  }
  if(this.categorykey && this.subCategoryKey){
    this.check = 1;
  console.log(this.categorykey);
  console.log(this.subCategoryKey);
  this.getBlogsbysubcategory(this.loadnumber);
  }
  if(this.subCategoryKey == 'recent'){
    this.getrecentyBlogsList(this.loadnumber);
  }
  if(this.subCategoryKey == 'popular'){
    this.getPopularBlogsList(this.loadnumber);
  }
  this.urlstr = this.router.url.split("/");
  console.log(this.urlstr);

  if(this.subCategoryKey === this.categorykey){

    localStorage.setItem('prevCategory', this.categorykey);
    this.getBlogBycategory(this.loadnumber);

  }

  }
  ngAfterContentInit(){
    console.log("after");
  }
  ngOnChanges(){
    console.log("changes");
  }

  getPopularBlogsList(loadnumber){
    this.dataService.getPopularBlogs(loadnumber)
      .subscribe(
        res =>{
    console.log(res);

    this.blogModel = res;

    if(this.blogModelcon){
        this.blogModelcon = this.blogModelcon.concat(res);
    }
    else{
          this.blogModelcon = this.blogModel.concat(res);
    }
    console.log(this.blogModel)


        }
      )
  }

  getrecentyBlogsList(loadnumber){
    this.dataService.getrecentyBlogs(loadnumber)
      .subscribe(
        res =>{
    console.log(res);
    // if(this.categorykey && this.subCategoryKey){
    //   this.blogModelcon = res;
    // }

    this.blogModel = res;

    if(this.blogModelcon){
        this.blogModelcon = this.blogModelcon.concat(res);
    }
    else{
          this.blogModelcon = this.blogModel.concat(res);
    }
    console.log(this.blogModel)


        }
      )
  }

  getBlogsbysubcategory(loadnumber) {
    this.dataService.getBlogBysubcategory({categorykey: this.categorykey, subCategoryKey: this.subCategoryKey},loadnumber)
      .subscribe(
        res =>{
          console.log(res);
          // this.blogModelcon = res;
          this.blogModel = res;

          if(this.blogModelcon){
              this.blogModelcon = this.blogModelcon.concat(res);
          }
          else{
                this.blogModelcon = this.blogModel.concat(res);
          }
        }
      )
  }

  getBlogBycategory(loadnumber){
    this.dataService.getBlogBycategory({categorykey: this.categorykey},loadnumber)
      .subscribe(
        res =>{
          console.log(res);
          // this.blogModelcon = res;
          this.blogModel = res;

          if(this.blogModelcon){
              this.blogModelcon = this.blogModelcon.concat(res);
          }
          else{
                this.blogModelcon = this.blogModel.concat(res);
          }
        }
      )
  }

  gotoBlogView(data) {
    // [routerLink]="['/'+this.urlstr[1]+'/blog-view']"
    console.log(data);
    this.router.navigate(['/blog/blog-view'], {queryParams: { blogId: data } });

  }

  viewMore(){
    this.loadnumber++;
    if(this.urlstr[3] == 'recent') {
      this.getrecentyBlogsList(this.loadnumber);
    }
    if(this.urlstr[3] == 'popular') {
      this.getPopularBlogsList(this.loadnumber);
    }
    else{
      this.getBlogsbysubcategory(this.loadnumber);
    }
  }

  ngOnDestroy(){

    console.log("madercjod")
  }




}
