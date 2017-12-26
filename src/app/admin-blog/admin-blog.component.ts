// import { BlogComponent } from './../blog/blog.component';
// import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.scss']
})
export class AdminBlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    alert("admin")
  }

  // showInPopup() {
  //   let dialogRef = this.dialog.open(BlogComponent, {
  //     height: '400px',
  //     width: '600px',
  //   });
  // }

}
