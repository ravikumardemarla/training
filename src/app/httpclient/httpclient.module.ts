import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpclientComponent } from './httpclient.component';
import { HTTP_CLIENT_ROUTES } from './httpclient.route';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientService } from './httpclient.service';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    HTTP_CLIENT_ROUTES
  ],
  providers: [HttpClientService],
  declarations: [HttpclientComponent]
})
export class HttpclientSampleModule { }
