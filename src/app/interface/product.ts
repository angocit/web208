export interface IProduct {
  name: string;
  image: string;
  category: string;
  price: string;
  id?: number;
}
export interface IProductDemo {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
export type ProductLite = Pick<IProductDemo,"name"|"price"|"image"|"id">
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