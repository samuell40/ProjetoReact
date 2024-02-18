import { PRODUCTS, ProductProps } from '@/utils/data/products';
import { ProductCartProps } from '@/stores/cart-stores';

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

export function remove(product: ProductCartProps[], productRemoveId: string){
  const updateProducts = product.map((product) => 
  product.id === productRemoveId
  ? {
    ...product,
    quantity: product.quantity > 1 ? product.quantity -1 : 0
  } 
  : product
  )

  return updateProducts.filter((product) => product.quantity > 0)
}