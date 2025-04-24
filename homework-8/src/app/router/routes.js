import MainLayout from "../../features/layouts/MainLayout";
import HomeComposite from "../../features/home/HomeComposite";
import CatalogComposite from "../../features/catalog/CatalogComposite";
import ProductComposite from "../../features/product/ProductComposite";
import AuthComposite from "../../features/auth/AuthComposite";
import CartComposite from "../../features/cart/CartComposite";

export const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomeComposite />,
            },
            {
                path: "catalog",
                element: <CatalogComposite />,
            },
            {
                path: "product/:id",
                element: <ProductComposite />,
            },
            {
                path: "auth",
                element: <AuthComposite />,
            },
            {
                path: "cart",
                element: <CartComposite />,
            },
        ],
    },
    {
        path: "*",
        element: (
            <>
                <h1>404 not found</h1>
            </>
        ),
    },
];
