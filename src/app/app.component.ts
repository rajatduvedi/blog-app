import { Component,OnInit } from '@angular/core';
import { DataService } from '../app-services/data/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  counter= 1;
  categoryList = [];
  loaded = false;
  imageList =[];
  constructor(private dataService: DataService){


  }
  ngOnInit() {
    this.dataService.getAllCategory()
      .subscribe(
        res =>{
          console.log(res);
          this.categoryList = res;
          this.loaded = true;
        }
      )

  }
}
