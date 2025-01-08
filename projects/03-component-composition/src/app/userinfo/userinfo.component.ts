import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userinfo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      This is another component island!
    </p>
  `,
  styles: ``
})
export class UserinfoComponent {

}
