export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

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