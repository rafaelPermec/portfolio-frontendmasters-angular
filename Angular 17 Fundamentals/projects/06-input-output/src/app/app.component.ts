import { Component } from '@angular/core';
import { Car } from './car';
import { ListingComponent } from "./listing/listing.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListingComponent],
  template: `
    <h1>Saved Cars {{ savedCarList.length }}</h1>
    <section class="container">
      <!-- This article element represents and entire listing -->
      @for(cars of carList; track cars) {
        <app-listing [car]="cars" (carSaved)="addCarSaved($event)"/>
      } @empty {
      <p>No cars found</p>
      }
      <!-- end car listing markup -->
    </section>

    <h2>Saved Cars List (POC):</h2>
    <section class="container">
      <ol>
      @for(cars of savedCarList; track cars) {
        <li>{{ cars.make }} - {{cars.model}}</li>
      } @empty {
      <li>No cars found</li>
      }
    </ol>
    </section>
  `,
  styles: [],
})
export class AppComponent {
  savedCarList: Car[] = [];
  carList: Car[] = [
    {
      id: 1,
      photo:
        'https://quatrorodas.abril.com.br/wp-content/uploads/2022/05/Camry-e1652890084552.jpg?quality=70&strip=info&w=1280&h=720&crop=1',
      make: 'Foyoda',
      model: 'Famery',
      miles: 54354,
      price: 1000,
      year: 2022,
      transmission: 'Manual',
    },
    {
      id: 2,
      photo:
        'https://revistacarro.com.br/wp-content/uploads/2020/10/Honda-Accord-2021-EUA.jpg',
      make: 'Ronda',
      model: 'Disaccord',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      id: 3,
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHYxd8jdEQno6YVYdRLOMEAKVlbZxxn0M5A&s',
      make: 'Specific Motors',
      model: 'Spoke',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      id: 4,
      photo: "https://resized-images.autoconf.com.br/1200x0/veiculos/fotos/543020/fdd855b8-9996-4340-9009-b95a859c7015.jpg",
      make: 'Fjord',
      model: 'Pocus',
      miles: 1,
      price: 22330,
      year: 2023,
      transmission: 'Automatic',
    },
  ];
  addCarSaved = (car: Car) => {
    this.savedCarList.push(car)
    return car;
  };
}
