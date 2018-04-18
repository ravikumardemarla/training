import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UploadService } from '../upload.service';
import { FileUploader } from 'ng2-file-upload';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  public emailForm: FormGroup;
  public userDetails: FormGroup;
  constructor(private fb: FormBuilder, private uploadService: UploadService) { }

  ngOnInit() {
    this.userDetails = this.fb.group({
      first: [''],
      last: [''],
      image: ['']
    });

    this.emailForm = this.fb.group({
      email: ['']
    });

  }

  public saveImage(): void {
    this.uploadService.saveUser(this.userDetails.value).subscribe(data => {
      console.log(data);
    });
  }

  public reset(): void {

  }

  public sendEmailConfiguration(): void {
      this.uploadService.sendMailToReg(this.emailForm.value).subscribe(data => console.log(data));
  }

}
