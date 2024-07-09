import { StaticImageData } from "next/image";

interface Installment {
  quantity: number;
  value: number;
}

export interface ProductsInterface {
  productId: number;
  imageUrl: StaticImageData;
  productName: string;
  stars: number;
  listPrice?: number;
  price: number;
  discount?: string;
  installments: Installment[];
}