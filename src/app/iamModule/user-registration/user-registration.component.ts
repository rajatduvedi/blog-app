import { Component, OnInit,Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { IUser, User} from '../../models/user.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
declare const gapi: any;
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserRegistrationComponent implements OnInit {
  userRegistrationFormGroup: FormGroup;
  public auth2: any;
  titlepopup = 'Join us'
  private scope = [
   'profile',
   'email',
   'https://www.googleapis.com/auth/plus.me',
   'https://www.googleapis.com/auth/contacts.readonly',
   'https://www.googleapis.com/auth/admin.directory.user.readonly'
 ].join(' ');
  constructor(private formBuilder: FormBuilder,
    public thisDialogRef: MatDialogRef<UserRegistrationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

   }

  ngOnInit() {
    this.googleInit()
    console.log(this.data)

    // this.userRegistrationFormGroup = this.formBuilder.group({
    //   userId: ['', Validators.required],
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   email: ['', Validators.required],
    //   password: ['', Validators.required],
    //   roles: [['normalUser']]
    // });
  }
  public googleInit() {
  gapi.load('auth2', () => {
    this.auth2 = gapi.auth2.init({
      client_id: '70917122304-celg3dloso9j55o23ji3sh0r5daote3f.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin',
      scope: this.scope,
    });
    this.attachSignin(document.getElementById('googleBtn'));
  });
}

public attachSignin(element) {
  this.auth2.attachClickHandler(element, {},
    (googleUser) => {


      let profile = googleUser.getBasicProfile();
      console.log('Token || ' + googleUser.getAuthResponse().id_token);
      console.log('ID: ' + profile.getId());
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());
      //YOUR CODE HERE


    }, (error) => {
      // alert(JSON.stringify(error, undefined, 2));
    });
}

}
