import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <article class="offer">
      <h1>
        <span>Bonus Offer</span>
        <span>{{item.price}}</span>
      </h1>
      <img src="/assets/noun-product-6277512.png" width="400" />
      <p>{{item.name}}</p>
      <p>{{item.description}}</p>
      <button>Order Now</button>
    </article>
  `,
  styles: `
    .offer {
      font-family: Verdana;
      border: solid 1px gray;
      width: 400px;
      padding: 20px;
      border-radius: 3px;
      color: white;
      background: #7f6b41;
    }
    h1 {
      display: flex;
      justify-content: space-between;
    }
    button {
      display: block;
      width: 100%;
      padding: 10px;
      border: solid 1px white;
      border-radius: 3px;
      cursor: pointer;

      &:hover {
        background: white;
        color: #7f6b41;
      }
    }
  `,
})
export class AppComponent {
  item = {
    name: 'Treasure Trove Trunk',
    price: Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(30),

    description:
      'Unveil a treasure trove of surprises in this delightful mystery box.',
  };
}
