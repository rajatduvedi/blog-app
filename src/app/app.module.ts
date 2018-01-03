import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatRadioModule, MatButtonModule, MatIconModule, MatFormFieldModule,
  MatInputModule, MatSliderModule, MatSelectModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule,
  MatCheckboxModule, MatDialogModule, MatStepperModule, MatSlideToggleModule, MatCardModule, MatListModule, MatToolbarModule,
  MatChipsModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
// import { DemoComponent } from './demo/demo.component';
import { CarouselComponent }from '././common-modules/carousel/carousel.component';
import { DataService } from '../app-services/data/data-service.service';
import { AppConfigService } from '../app-services/core/app.contants.service';
import { DialogsService } from '../app-services/service/dialog/dialog.service';
import { CapitalizePipe } from '../app-services/data/pipe.service';
// import { BlogCreateComponent } from './blogs/blog-create/blog-create.component';
// import { BlogListComponent } from './blogs/blog-list/blog-list.component';
import { BlogModule } from './blogs/blog.module';
import {ConfirmDialogComponent} from '../app-services/service/dialog/confirm-dialog.component'
// import { HomeComponent } from './home/home.component';
// import { DemoComponent } from './blogs/demo/demo.component';
@NgModule({
  declarations: [
    AppComponent,
    // DemoComponent,
    CapitalizePipe,
    ConfirmDialogComponent
    // HomeComponent,
    // DemoComponent,
    // BlogCreateComponent,
    // BlogListComponent,
    // BlogViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDialogModule,
    MatStepperModule,
    MatSliderModule,
    MatSelectModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatListModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatChipsModule,
    HttpModule,

    // BlogModule

  ],
  exports:[],
  entryComponents: [ConfirmDialogComponent],
  providers: [CarouselComponent, DataService, AppConfigService, DialogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
