import { Component, OnInit } from '@angular/core';
import { pullStack, pushStack } from './utils/slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(){}

  ngOnInit(): void {
    
  }
}
