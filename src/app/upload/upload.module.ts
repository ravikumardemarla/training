import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image/image.component';
import { UPLOAD_ROUTINGS } from './upload.route';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UploadService } from './upload.service';

@NgModule({
  imports: [
    CommonModule,
    UPLOAD_ROUTINGS,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UploadService],
  declarations: [ImageComponent]
})
export class UploadModule { }
