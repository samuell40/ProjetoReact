import { ProductProps } from '@/utils/data/products';
import { create } from "zustand"
import * as cartInMemory from './helpers/cart-in-memory';

export type ProductCartProps = ProductProps & {
  quantity: number;
};

//para saber quantos pedido o usuario adicionou ao carinho e tambem qauntos do mesmo produto o usuario adicionou
type StateProps = {
  products: ProductCartProps[];
  add: (product: ProductProps) => void;
};

//Serve guardar o conteudo e compartilhar com toda aplicação
export const useCartStore = create<StateProps>((set) => ({
  products: [],

  //vai receber um produto com este tipo 
  add: (product: ProductProps) =>
    set((state) => ({
      products: cartInMemory.add(state.products, product),
    })),
}));