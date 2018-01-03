import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../app-services/data/data-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SubCategoryListComponent } from '../blogs/sub-category-list/sub-category-list.component';
// import { CarouselComponent }from '.././common-modules/carousel/carousel.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  imageList =[];
  blogList = [];
  constructor(private dataService: DataService, private router: Router) {
    this.imageList = [
      'assets/image1.jpg',
      'assets/image2.jpg',
      'assets/image3.jpg',
      'assets/image4.jpg',
      'assets/image5.jpg',
      'assets/image6.jpg',
      'assets/image7.jpg',
      'assets/image8.jpg',
      'assets/image9.jpg',
      'assets/rama.jpg',
    ]
  }

  ngOnInit() {

  }



  gotoBlogView(data) {
    // [routerLink]="['/'+this.urlstr[1]+'/blog-view']"
    console.log(data);
    this.router.navigate(['/blog/blog-view'], {queryParams: { blogId: data } });

  }

  gotToBlockListBySubcategory(cat, subcat){
    this.router.navigate(['/topics',cat, subcat]);
  }

}
