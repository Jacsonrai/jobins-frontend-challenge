import { ReactNode } from "react";

export interface CenterLoaderProps {
    width?: string;
    color?: string;
}
export interface MainLayoutProps {
    children: ReactNode;
}
export interface PageState {
    openDrawer: boolean;
}
export interface IconProps {
    width?: number | string;
    height?: number | string;
}

export interface Customer {
    id: string;
    customer: string;
    date: string;
    total: number;
    method: string;
    status: string;
}
