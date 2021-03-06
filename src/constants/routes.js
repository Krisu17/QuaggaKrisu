import FridgesList from "../Pages/FridgesList/FridgesList";
import ProductsList from "../Pages/ProductsList/ProductsList"
import UserPage from "../Pages/UserPage/UserPage";
import FuckingLoginPage from "../Pages/LoginPage/FuckingLoginPage";


export const path_list = {
    DASHBOARD: {
        route: "/",
        name: "Dashboard"
    },
    REGISTER: {
        route: "/register",
        name: "Register"
    },
    LOGIN: {
        route: "/login",
        name: "Log in"
    },
    PROFILE: {
        route: "/user",
        name: "My profile"
    },
    SETTINGS: {
        route: "/settings",
        name: "Settings"
    },
    FRIDGE_LIST: {
        route: "/user/fridge",
        name: "My fridge list"
    },
    FRIDGE: {
        route: "/user/fridge/:fridge_id",
        redirect: (fridge_id) => `/user/fridge/${fridge_id}`,
        name: "My fridge"
    },
    FRIDGE_NEW_PRODUCT: {
        route: "/user/fridge/new-product",
        name: "Add product"
    },
}

export default [
    {
        path: path_list.FRIDGE.route,
        component: ProductsList,
        exact: true
    },
    {
        path: path_list.LOGIN.route,
        component: FuckingLoginPage,
        exact: true
    },
    {
        path: path_list.PROFILE.route,
        exact: true,
        component: UserPage
    },
    {
        path: path_list.FRIDGE_LIST.route,
        exact: true,
        component: FridgesList
    }
];