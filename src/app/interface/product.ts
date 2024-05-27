export interface IProduct {
  name: string;
  image: string;
  category: string;
  price: number;
  id?: number;
}
export interface IProductLite {
  name: string;
  image: string;
  price: number;
}