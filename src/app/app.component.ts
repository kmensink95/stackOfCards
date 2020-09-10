import { Component, OnInit } from '@angular/core';
import { pullStack, pushStack } from './utils/slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(){}

  ngOnInit(): void {
  }
}
