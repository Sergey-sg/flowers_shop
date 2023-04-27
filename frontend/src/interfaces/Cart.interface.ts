export interface ICartItem {
  pk: number;
  product: {
    pk: number;
    slug: string;
    name: string;
    image: string;
    img_alt: string;
    price: number;
    stock: number | undefined | null;
  };
  quantity: number;
  active: boolean;
  sub_total: number;
}

export interface ICustomer {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
}

export interface IAnswerFromCart {
  cartItem: ICartItem;
  total: number;
}

export interface ICart {
  items: ICartItem[];
  customer: ICustomer;
  total: number | undefined;
}
