import { GetterTree } from 'vuex';

const getters: GetterTree<any, any> = {
  cartProducts(state:any) {
    console.log(state);
    // return state.cart.added.map(({ id, quantity }: any) => {
    //   const product = state.products.all.find((p:any) => p.id === id);
    //   return {
    //     title: product.title,
    //     price: product.price,
    //     quantity,
    //   };
    // });
  },
};

export default getters;
