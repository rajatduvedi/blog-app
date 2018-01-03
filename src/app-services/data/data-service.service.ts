import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, ResponseOptions, RequestOptions } from '@angular/http';
import { MockKeyValues } from './mock-data/key.value.mock';
@Injectable()
export class DataService {
  private getAllCategoryUrl = 'http://localhost:3000/api/getAllCategory';
  private createNewCategoryUrl = 'http://localhost:3000/api/createCategory';
  private createBlogUrl = 'http://localhost:3000/api/createBlog';
  private getAllBlogUrl = 'http://localhost:3000/api/getAllBlogs';
  private deleteBlogByIdUrl = 'http://localhost:3000/api/deleteBlogById';

  private uploadBlogImageUrl = 'http://localhost:3000/api/uploadBlogImage';
  constructor(
    private http: Http,
  ) {}


  getAllCategory() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(headers);
    return this.http.get(this.getAllCategoryUrl, { headers: headers })
      .map((res: Response) => {
        console.log('****   data service saveCourse returned value from DB');
        console.log(res);
        return res.json();
      });
  }

  createBlogCategory(data) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(headers);
    return this.http.post(this.createNewCategoryUrl, data, { headers: headers })
      .map((res: Response) => {
        console.log('****   data service saveCourse returned value from DB');
        console.log(res);
        return res.json();
      });
  }

  createBlog(data) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(headers);
    return this.http.post(this.createBlogUrl, data, { headers: headers })
      .map((res: Response) => {
        console.log('****   data service saveCourse returned value from DB');
        console.log(res);
        return res.json();
      });
  }

  getAllBlogService() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(headers);
    return this.http.get(this.getAllBlogUrl, { headers: headers })
      .map((res: Response) => {
        console.log('****   data service saveCourse returned value from DB');
        console.log(res);
        return res.json();
      });
  }

  getBlogById(id) {
    const getBlogByIdUrl = 'http://localhost:3000/api/getBlogById/' + id;
    const headers = new Headers();
    return this.http.get(getBlogByIdUrl, { headers: headers })
      .map((res: Response) => {
        console.log(res.json());
        return res.json();
      });
  }

  getBlogBysubcategory(data, index){
    var category = data.categorykey;
    var subCategory = data.subCategoryKey;
    const getBlogBysubcategoryUrl = 'http://localhost:3000/api/getBlogBysubcategory/' + category + '/'+ subCategory + '/'+ index;
    const headers = new Headers();
    return this.http.get(getBlogBysubcategoryUrl, { headers: headers })
      .map((res: Response) => {
        console.log(res.json());
        return res.json();
      });
  }
  getBlogBycategory(data, index){
    var category = data.categorykey;
    var subCategory = data.subCategoryKey;
    const getBlogBysubcategoryUrl = 'http://localhost:3000/api/getBlogBycategory/' + category + '/'+ index;
    const headers = new Headers();
    return this.http.get(getBlogBysubcategoryUrl, { headers: headers })
      .map((res: Response) => {
        console.log(res.json());
        return res.json();
      });
  }

  getrecentyBlogs(index){
    const getRecentBlogUrl = 'http://localhost:3000/api/getRecentBlog/'+index;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(headers);
    return this.http.get(getRecentBlogUrl, { headers: headers })
      .map((res: Response) => {
        console.log('****   data service saveCourse returned value from DB');
        console.log(res);
        return res.json();
      });
  }

  uploadBlogImage(item: any) {
    const headers = new Headers();
    return this.http.post(this.uploadBlogImageUrl, item, { headers: headers })
      .map((res: Response) => {
        console.log(res.json());
        return res.json();
      });
  }

  getPopularBlogs(index){
    const getPopularBlogUrl = 'http://localhost:3000/api/getPopularBlog/'+index;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(headers);
    return this.http.get(getPopularBlogUrl, { headers: headers })
      .map((res: Response) => {
        console.log('****   data service saveCourse returned value from DB');
        console.log(res);
        return res.json();
      });
  }
  deleteBlogById(data){
    console.log(data);

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(headers);
    return this.http.post(this.deleteBlogByIdUrl, {_id: data}, { headers: headers })
      .map((res: Response) => {
        console.log('****   data service saveCourse returned value from DB');
        console.log(res);
        return res.json();
      });

  }

  deleteCategory(data){

  }



}
