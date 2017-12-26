import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../app-services/data/data-service.service';
import { ICategory, Category, IBlog, Blog} from '../../models/blog.model';

@Component({
  selector: 'app-sub-category-list',
  templateUrl: './sub-category-list.component.html',
  styleUrls: ['./sub-category-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SubCategoryListComponent implements OnInit {
  categorykey;
  subCategoryKey;
  blogModel: IBlog = new Blog();
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
   this.categorykey = params['topics'];
   this.subCategoryKey = params['subTopic'];
});

  console.log(this.categorykey);
  console.log(this.subCategoryKey);
  this.getBlogsbysubcategory();
  }

  getBlogsbysubcategory() {
    this.dataService.getBlogBysubcategory({categorykey: this.categorykey, subCategoryKey: this.subCategoryKey})
      .subscribe(
        res =>{
          console.log(res);
          this.blogModel = res;
        }
      )
  }


}
