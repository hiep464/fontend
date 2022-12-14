import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Bookdetail from "../pages/Bookdetail";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Cart from "../pages/Cart";
import Notifi from "../pages/Notifi";
import ProfileLayout from "../components/Layout/ProfileLayout";
import Info from "../pages/Info";
import Adress from "../pages/Adress";
import Comment from "../pages/Comment";
import Order from "../pages/Order";

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/categories', component: Categories },
    { path: '/bookdetail', component: Bookdetail },
    { path: '/login', component: Login },
    { path: '/profile', component: Profile, layout: ProfileLayout},
    { path: '/cart', component: Cart },
    { path: '/notifi', component: Notifi , layout: ProfileLayout},
    { path: '/info', component: Info , layout: ProfileLayout},
    { path: '/adress', component: Adress , layout: ProfileLayout},
    { path: '/comment', component: Comment , layout: ProfileLayout},
    { path: '/order', component: Order , layout: ProfileLayout}
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };