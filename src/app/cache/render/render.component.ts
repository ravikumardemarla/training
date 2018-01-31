import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-render',
  template: `
    <div class="user">
      <app-user></app-user>
    </div>
    <div class="show-user">
      <app-show-users></app-show-users>
    </div>`,
  styleUrls: ['./render.css']
})

export class RenderComponent implements OnInit {
  public ngOnInit(): void {

  }
}
