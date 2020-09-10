import { Component, OnInit } from '@angular/core';
import { pullStack, pushStack, findRightUnlocked, findFirstUnlocked } from './utils/slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  pullStack = pullStack;
  numbers: number[] = [];
  lockMap: number[] = [];
  constructor(){}

  ngOnInit(): void {
    console.log(pullStack([1, 2, 3, 4], [1]));
    console.log(pushStack([2, 3, 4, 5], []));
    this.numbers = [1, 2, 3, 4, 5, 6, 7];
    console.log(pullStack(this.numbers, this.lockMap));
  }

  swipe(items, lockMap): void {
    this.numbers = pullStack(items, lockMap);
  }
}
