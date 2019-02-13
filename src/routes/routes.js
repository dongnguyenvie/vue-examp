import HomeLayout from '../components/layout/Home'
import Home from '../components/page/Home'
import About from '../components/page/About'
import DetaiProduct from '../components/page/detail'
import Cart from '../components/cart/Cart'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeLayout,
        children:[
            {
                path: '',
                component: Home
            },
            {
                path:'/about',
                component: About
            },
            {
                path: '/product',
                component: DetaiProduct,
                name:'product detail'
            },
            {
                path: '/cart',
                component: Cart,
                name: 'cart'
            }
        ]
    }
]

export default routes