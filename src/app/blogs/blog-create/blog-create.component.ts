import { Component, OnInit,ViewChild, ViewEncapsulation } from '@angular/core';
import { IBlog, Blog } from '../../models/blog.model'
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {MatChipInputEvent} from '@angular/material';
import {ENTER} from '@angular/cdk/keycodes';
import { DataService } from './../../../app-services/data/data-service.service';
import { DialogsService } from './../../../app-services/service/dialog/dialog.service';
import { AppConfigService } from './../../../app-services/core/app.contants.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
const COMMA = 188;
// import {FroalaEditorModule} from 'ng2-froala-editor/ng2-froala-editor';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css'],
  // directives: 'MediumContentEditor',

  encapsulation: ViewEncapsulation.None,

})
export class BlogCreateComponent implements OnInit {
  @ViewChild('blogImage') imageplayer: any;
  blogModel: IBlog = new Blog();
  createBlogFormGroup: FormGroup;
  tags = [];
  category = [];
  categories = [];
  imageUploaded =  false;
  baseUrl = '';
  anyErrors = false;
  finished = false;
  subCategories = [];
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  imageCtrl = '';
  currentBlogId;
  separatorKeysCodes = [ENTER, COMMA];
  imagePath;

  constructor(private _formBuilder: FormBuilder,
     private dataService: DataService,
     private fileService: AppConfigService,
     private activatedRoute: ActivatedRoute,
     private router: Router,
     private dialogsService:DialogsService) { }

  ngOnInit() {
    console.log(this.blogModel);
    this.activatedRoute.queryParams.subscribe((params: Params) => {
       this.currentBlogId = params['blogId'];
       this.getcurrentBlogById(this.currentBlogId);
     }, err => {
       console.log(err);
     }, () => {
   });
    this.createBlogFormGroup = this._formBuilder.group({

      blogTitle: ['', Validators.required],
      category: ['',Validators.required],
      subCategory: [''],
      tags:[''],
      excerptText: [''],
      readingTime: [''],
      authorId: ['1'],
      authorName: ['Rajat'],
      authorImage: ['/assets/alt.jpg'],
      blogContent: ['', Validators.required],
      totalLikes: ['1'],
      blogimageUrl:['']
    });
    this.getAllCategories();
    console.log(this.createBlogFormGroup);
    console.log(typeof this.createBlogFormGroup);
    var form = new FormData();
    console.log(form);
    console.log(typeof form);
    this.baseUrl = this.fileService.getBaseFileServerUrl();

  }

  getcurrentBlogById(id){
    this.dataService.getBlogById(id)
      .subscribe(
        res => {
          console.log(res);
          this.populateBlogCreateFromObject(res);
        }
      )
  }

  add(event: MatChipInputEvent, stmt): void {
    let input = event.input;
    let value = event.value;
    // console.log(event);
    // console.log(stmt);

    // Add our person
    if ((value || '').trim()) {
      if(stmt === 'tags') {
        this.tags.push({ name: value.trim() });
     }
    //  if(stmt === 'category') {
    //    this.category.push({ name: value.trim() });
    // }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
 }

  remove(tag: any , stmt): void {
    if(stmt === 'tags'){
      let index = this.tags.indexOf(tag);
      if (index >= 0) {
        this.tags.splice(index, 1);
      }
  }
  //  if(stmt === 'category'){
  //    let index = this.category.indexOf(tag);
  //    if (index >= 0) {
  //      this.category.splice(index, 1);
  //    }
  //  }
  }

  uploadBlogImage() {
    const fileBrowser = this.imageplayer.nativeElement;
    const fileCount = fileBrowser.files.length;
    console.log(fileBrowser.files[0]);
    const formData = new FormData();
    if (fileCount > 0) {
      formData.append('blogImage', fileBrowser.files[0]);
      this.dataService.uploadBlogImage(formData)
        .subscribe(
        res => {
          console.log(res);
          // this.createBlogFormGroup.value
          console.log(this.baseUrl);
          this.createBlogFormGroup.value.blogimageUrl = 'http://' +this.baseUrl + '/' + res.path;
          console.log(this.createBlogFormGroup.value.blogimageUrl);
          this.imageUploaded = true;
          this.imagePath = this.createBlogFormGroup.value.blogimageUrl;
        },
        error => {
          console.log(error);
          this.anyErrors = true;
        },
        () => {
          this.finished = true;
        });
    }
  }

  submit() {
    const form = new FormData();
    console.log(form);
    console.log(this.tags);
    console.log(this.createBlogFormGroup.value);
    this.createBlogFormGroup.value.blogimageUrl = this.imagePath;
    // this.createBlogFormGroup.value.category = this.category;
    this.createBlogFormGroup.value.tags = this.tags;
    console.log(this.createBlogFormGroup.value);
    this.blogModel = <IBlog>this.createBlogFormGroup.value;
    if(!this.currentBlogId){
      this.blogModel._id = null
    }
    this.dataService.createBlog(this.blogModel)
      .subscribe(
        res =>{
          if(res){
            this.dialogsService.showConfirmDialog('', 'Blog created successfully', '','Ok' )
              .subscribe(
                response =>{
                  // if()
                }
              )
          }
          console.log(res);
        },
        error =>{
          console.log(error);
        },
        () =>{

        }
      )
  }

  // valuechange(value) {
  //   console.log(value);
  //   if(value.length>=3) {
  //     alert("hello");
  //   }
  // }

  method() {

  }
  getAllCategories() {
    this.dataService.getAllCategory()
      .subscribe(
        res => {
          console.log(res);
          this.categories = res;
          // this.category. res;
          // this.categories.splice(0,0,{categorykey:'none',categoryValue:'select as Root Category', _id: '0'});

          // console.log(this.categories)

        },
        error =>{
          console.log(error);
        },
        () =>{

        }
      )
  }
  selectedCategory(event) {
    // alert("hello")
    console.log(event.value)
    if(event.value) {
      for(var i=0; i< this.categories.length; i++){
         if(this.categories[i].categorykey == event.value){
           console.log(this.categories[i]);
           this.subCategories = this.categories[i].subCategory;
           console.log(this.subCategories);
          //  break;
         }
      }
      // console.log(this.categories.indexOf(event.value))
    }
  }

  changeImageListener($event): void {             // image
    this.readThisImage($event.target);
  }

  readThisImage(inputValue: any): void {           // image
    const file: File = inputValue.files[0];
    console.log(file);
    const myReader: FileReader = new FileReader();
    if (file !== undefined) {
      this.imageCtrl = 'data:' + file.type + ';base64,'; // file name
      myReader.onloadend = this._handleReaderImageLoaded.bind(this);
      myReader.readAsBinaryString(file);
    }
  }
  _handleReaderImageLoaded(readerEvt) { // image
    const binaryString = readerEvt.target.result;
    // console.log()
    this.imageCtrl = this.imageCtrl + btoa(binaryString);
  }

  populateBlogCreateFromObject(blogData){
    console.log(blogData);
    this.blogModel = blogData;
    this.createBlogFormGroup.patchValue({ blogTitle: blogData.blogTitle });
    this.createBlogFormGroup.patchValue({ excerptText: blogData.excerptText });
    this.createBlogFormGroup.patchValue({ blogContent: blogData.blogContent });
    this.createBlogFormGroup.patchValue({ imageUrl: blogData.imageUrl });
    this.createBlogFormGroup.patchValue({ category: blogData.category });
    this.createBlogFormGroup.patchValue({ subCategory: blogData.subCategory });
    this.createBlogFormGroup.patchValue({ tags: blogData.tags });
    this.createBlogFormGroup.patchValue({ blogimageUrl: blogData.blogimageUrl });
    this.createBlogFormGroup.patchValue({ _id: blogData._id });
    // this.imageCtrl = blogData.blogimageUrl
    this.imageCtrl = this.createBlogFormGroup.value.blogimageUrl;
  }



}
