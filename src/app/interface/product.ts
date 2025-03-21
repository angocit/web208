export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
export type ProductLite = Pick<IProduct,"title"|"price"|"image"|"id">
interface Rating {
  rate: number;
  count: number;
}
export interface IMenu {
  id: number;
  name: string;
  url: string;
  parent: number;
}