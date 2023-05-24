import { lazy } from "react"
const Home = lazy(() => import('./components/Home'))
const CreateProduct = lazy(() => import('./components/Pages/Product/CreateProduct'))
const ListProduct = lazy(() => import('./components/Pages/Product/ListProduct'))
const ListCategory = lazy(() => import('./components/Pages/Category/ListCategory'))
const CreateCategory = lazy(() => import('./components/Pages/Category/CreateCategory'))
const UpdateCategory = lazy(() => import('./components/Pages/Category/UpdateCategory'))
const UpdateProduct = lazy(() => import('./components/Pages/Product/UpdateProduct'))

const HomeClient = lazy(() => import('./ClientSide/HomePage'))
const ListProductClient = lazy(() => import('./ClientSide/ListProducts'))


export const routesDashboard = [
    {
        path: '/admin',
        element: Home,
        name: 'Home',
        exact: true
    },
    {
        path: '/admin/products/add',
        element: CreateProduct,
        name: 'Create-product',
        exact: true
    },
    {
        path: '/admin/products',
        element: ListProduct,
        name: 'Products',
        exact: true
    },
    {
        path: '/admin/categories/add',
        element: CreateCategory,
        name: 'Categories',
        exact: true
    },
    {
        path: '/admin/categories',
        element: ListCategory,
        name: 'Home',
        exact: true
    },
    {
        path: `/admin/UpdateCategory/:id`,
        element: UpdateCategory,
        name: 'update',
        exact: true
    },
    {
        path: `/admin/UpdateProduct/:id`,
        element: UpdateProduct,
        name: 'update',
        exact: true
    }

]

export const routesClient = [
    {
        path: '/',
        element: HomeClient,
        name: 'Home',
        exact: true
    },
    {
        path: '/list-product',
        element: ListProductClient,
        name: 'ListProductClient',
        exact: true
    },

]
