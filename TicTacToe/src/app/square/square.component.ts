import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      square works!
      <br />
      {{ rando }}
    </p>
  `,
  styles: [],
})
export class SquareComponent {
  rando!: number;

  constructor() {
    setInterval(() => (this.rando = Math.random()), 500);
  }
}
