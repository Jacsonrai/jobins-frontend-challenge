import { useContext } from "react";
import { PageContext } from "../provider/pageprovider";

const usePageHook = () => {
    const context = useContext(PageContext);
    if (context === undefined) {
        throw new Error("usePageHook must be used within a PageProvider");
    }
    return context;
};

export { usePageHook };
