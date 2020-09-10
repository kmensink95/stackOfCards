import { Component, OnInit } from '@angular/core';
import { pullStack, pushStack } from './utils/slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  numbers: number[] = [];
  lockMap: number[] = [];

  constructor(){}

  ngOnInit(): void {
    this.numbers = [1, 2, 3, 4, 5, 6, 7];
  }

  swipeLeft(items: any[], lockMap: any[]): void {
    this.numbers = pullStack(items, lockMap);
  }

  swipeRight(items: any[], lockMap: any[]): void {
    this.numbers = pushStack(items, lockMap);
  }

  lockedMapItem(sliderItem: number): void {
    const index = this.numbers.findIndex(number => number === sliderItem);
    if (this.lockMap.includes(index)) {
      this.lockMap = this.lockMap.filter(number => number !== index);
    } else {
      this.lockMap = [...this.lockMap, index];
    }
    console.log(this.lockMap)
  }
}
