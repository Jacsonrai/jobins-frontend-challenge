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
