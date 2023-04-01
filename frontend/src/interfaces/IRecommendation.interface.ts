import { IFlowerItem } from "./IFlowerItem.interface";

export interface IRecommendation {
  pk: number;
  name: string;
  product: IFlowerItem[];
}
