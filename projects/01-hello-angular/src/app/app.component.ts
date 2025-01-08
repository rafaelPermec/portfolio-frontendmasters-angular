import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1 class="cachorro">If you are reading this...</h1>
    <p>Things have worked out well! 🎉</p>

    <span> Musics </span>
    <ol>
      <li>Pirate Love - New York Dolls</li>
      <li>Lust for Life - Iggy Pop</li>
      <li>ZigZag Wander - Frank Zappa</li>
    </ol>

    <span> Movies </span>
    <ol>
      <li>Blade Runner</li>
      <li>Matrix</li>
      <li>2001: A Space Odyssey</li>
    </ol>

    <span> Books </span>
    <ol>
      <li>1984 - George Orwell</li>
      <li>Me, Robot - Isaac Asimov</li>
      <li>Neuromancer - William Gibson</li>
    </ol>

  `,
  styles: `
    .cachorro {
      color: red;
    }
    p {
      color: blue;
    }
    ol {
      list-style-type: upper-roman;
    }

    li {
      color: blue;

      &::marker {
        color: red;
      }
    }
  `,
})
export class AppComponent {}
