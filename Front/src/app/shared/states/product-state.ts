import { Action, Selector, State, StateContext } from "@ngxs/store";
import { ProductStateModel } from "./product-state-model";
import { AddProduct, DeleteProduct } from "../actions/product-action";

@State<ProductStateModel>({
  name: "listProducts",
  defaults: {
    products: []
  }
})
export class ProductState {

  @Selector()
  static getNbProducts(state: ProductStateModel): number {
    return state.products.length;
  }

  @Selector()
  static getTotalPrice(state: ProductStateModel): number {
    return state.products.reduce((sum, product) => sum + product.price, 0);
  }

  @Selector()
  static getTotalPriceWithTVA(state: ProductStateModel): number {
    return state.products.reduce((sum, product) => (sum + product.price)*1.20 , 0);
  }

  @Action(AddProduct)
  add(
    { getState, patchState }: StateContext<ProductStateModel>,
    { payload }: AddProduct
  ) {
    const state = getState();
    patchState({
      // créer un nouveau tableau
      // l'opérateur ... permet de consituer une liste d'élement du tableau
      products: [...state.products, payload]
    });
  }

  @Action(DeleteProduct)
  del(
    { getState, patchState }: StateContext<ProductStateModel>,
    { payload }: DeleteProduct
  ) {
    const state = getState();
    patchState({
      // supprimer le payload dans products
      products: state.products.filter(
        item => item.id != payload.id
      )
    });
  }
}
