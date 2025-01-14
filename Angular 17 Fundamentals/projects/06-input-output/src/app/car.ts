export interface Car {
  id: number;
  photo: string;
  make: string;
  model: string;
  miles: number;
  price: number;
  year: number;
  transmission: 'Automatic' | 'Manual';
}
