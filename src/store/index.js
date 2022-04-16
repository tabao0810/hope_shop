import {createStore} from 'vuex'
import blogs from './modules/blogs';
import slides from './modules/slides'
import brands from './modules/brands';
import sales from './modules/sales';
import user from './modules/user';
import products from './modules/products';

const store = createStore({
    modules:{
        blogs,
        slides,
        brands,
        sales,
        user,
        products
    }
});
export default store