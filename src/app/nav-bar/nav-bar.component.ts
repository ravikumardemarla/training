import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav-bar.html',
  styleUrls: ['./nav-bar.css']
})

export class NavBarComponent implements OnInit {
  public navList = [
    {routePath: '', description: 'Cache'},
    {routePath: 'sequence', description: 'Sequence Calls'}
  ];

  public ngOnInit(): void {

  }
}
