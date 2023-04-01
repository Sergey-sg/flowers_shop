import { ICategory } from "./ICategory.interface";

export interface IFlowerItem {
  pk: number;
  slug: string;
  category: ICategory[];
  name: string;
  description: string;
  price: number;
  image: string | null;
  img_alt: string;
  stock: number | null;
  available: boolean;
}
