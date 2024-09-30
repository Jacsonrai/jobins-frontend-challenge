interface SideBarItemsType {
    path: string;
    name: string;
    icon: React.ComponentType<IconProps>;
    type?: "main" | "product";
}
import { IconProps } from "../../type/other";
import BoxIcon from "../icons/boxicon";
import StarIcon from "../icons/staricon";
import ShoppingIcon from "../icons/shoppingicon";
import SmartHomeIcon from "../icons/smarthomeicon";
import CircleIcon from "../icons/circleicon";

export const SideBarItems: SideBarItemsType[] = [
    {
        path: "/",
        name: "Dashboard",
        icon: SmartHomeIcon,
        type: "main",
    },
    {
        path: "/order-management",
        name: "order management",
        icon: ShoppingIcon,
        type: "main",
    },
    {
        path: "/brand",
        name: "brand",
        icon: StarIcon,
        type: "main",
    },
    {
        path: "/add-product",
        name: "add product",
        icon: CircleIcon,
        type: "product",
    },
    {
        path: "/product-list",
        name: "product list",
        icon: BoxIcon,
        type: "product",
    },
];
