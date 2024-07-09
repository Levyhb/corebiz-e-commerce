interface Installment {
  quantity: number;
  value: number;
}

export interface ProductsInterface {
  productId: number;
  imageUrl: string;
  title: string;
  stars: number;
  listPrice: number;
  price: number;
  discount: string;
  installments: Installment[];
}