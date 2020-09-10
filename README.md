# Input
You have a stack of cards. You can rearrange them by shifting every card to the left or to the right. When you shift to the left, the first card appears at the end of the stack. When you shift to the right, the last card appears at the beginning of the stack.
For example:

shift to the left [1, 2, 3, 4] -> [2, 3, 4, 1]

shift to the right [1, 2, 3, 4] -> [4, 1, 2, 3].

Now any amount of cards might be "locked" on its position, while the rest should move accordingly to shift direction.
For example, if we lock card num. 2 and we shift to the left, we have [1, !2, 3, 4] -> [3, !2, 4, 1].
If all of the cards locked or only one remains unlocked, the shift doesn't take any effect in any direction: [!1, !2, 3, !4] -> [!1, !2, 3, !4] (cards 1, 2, and 4 should stay on its position, so card num. 3 doesn't have a place to move).

## Plan

write a generic algorithm that gets a stack of cards of any length and information about locked cards and does the shift of stack in both directions.
as advanced, write an algorithm in such a way that one of the directions reuses the generic logic of another shift, so you don't repeat yourself
additionally, you can implement UI that animates shifts (slider analogy)

# StackOfCards

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


