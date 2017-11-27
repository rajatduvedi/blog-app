import { Component, OnInit , Input , ViewChild } from '@angular/core';

@Component({
  selector: 'demo-carousel',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  @Input() coursesList:any;
  @Input() width: number = 1400;
  @ViewChild('carouselwrapper') elementView;
  childIndex: number = 0;
  amount: number = 0;
  public images: any;
  constructor() {
    this.images = [
      'assets/image1.jpg',
      'assets/image2.jpg',
      'assets/image3.jpg' ,
      'assets/image4.jpg' ,
      'assets/image5.jpg' ,
      'assets/image6.jpg' ,
      'assets/image7.jpg' ,
      'assets/image8.jpg',
      'assets/image9.jpg',
      'assets/image3.jpg' ,
      'assets/image4.jpg' ,
      'assets/image5.jpg' ,
      'assets/image6.jpg' ,
      'assets/image7.jpg' ,
      'assets/image1.jpg',
      'assets/image2.jpg',
      'assets/image8.jpg' ,
      'assets/image9.jpg' ,
      'assets/image5.jpg' ,
      'assets/image6.jpg' ,
      'assets/image7.jpg',
      'assets/image6.jpg' ,
      'assets/image7.jpg' ,
      'assets/image1.jpg',
      'assets/image2.jpg',
      'assets/image3.jpg' ,
      'assets/image4.jpg' ,
      'assets/image8.jpg' ,
      'assets/image9.jpg' ,
      'assets/image6.jpg' ,
      'assets/image7.jpg' ,
      'assets/image1.jpg',
      'assets/image2.jpg',
      'assets/image8.jpg' ,
      'assets/image9.jpg' ,
      'assets/image5.jpg' ,
      'assets/image6.jpg' ,
      'assets/image7.jpg',
      'assets/image6.jpg' ,
      'assets/image7.jpg' ,
      'assets/image6.jpg' ,
      'assets/image7.jpg' ,
      'assets/image1.jpg',
      'assets/image2.jpg',
      'assets/image8.jpg' ,
      'assets/image9.jpg' ,
      'assets/image5.jpg' ,
      'assets/image6.jpg' ,
      'assets/image7.jpg',
      'assets/image6.jpg' ,
      'assets/image7.jpg' ,
    ]}

  ngOnInit() {
    console.log(this.images)
  }


}
