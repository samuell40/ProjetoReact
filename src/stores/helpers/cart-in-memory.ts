import { ProductCartProps } from '@/stores/cart-stores';
import { ProductProps } from '@/utils/data/products';

//verifica a quantidade do mesmo produto para que ao inves de duplicar o produto venha-se a icremnetar a quantidade dele.
export function add(products: 
ProductCartProps[], newProduct: ProductProps) {
  const existingProduct = products.find(({ id }) => newProduct.id === id);

  //verificação do produto e posterior incrementação
  if (existingProduct) {
    return products.map((product) =>
      product.id === existingProduct.id
        ? { ...product, quantity: product.quantity + 1 }
        : product,
    );
  }

  //caso o produto não exista, ele cria a primeira vez
  return [...products, { ...newProduct, quantity: 1 }];
}