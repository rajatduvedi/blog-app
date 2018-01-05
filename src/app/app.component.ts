import { Component,OnInit } from '@angular/core';
import { DataService } from '../app-services/data/data-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { UserRegistrationComponent } from './iamModule/user-registration/user-registration.component';

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
  constructor(private dataService: DataService, public dialog: MatDialog){


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

  openRegPopup() {
    const dialogRef = this.dialog.open(UserRegistrationComponent, {
      disableClose: true,
      width: '60%',
      data: { availableList: "hello", assignedList: [] }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}
