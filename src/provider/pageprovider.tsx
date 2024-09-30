import React, { createContext, ReactNode, useReducer } from "react";
import { PageState } from "../type/other";
import { PageAction } from "../type/action";
import { PageReducer } from "./action/pagereducer";

const initialState = {
    openDrawer: false,
    noPageStatus: false,
};

export const PageContext = createContext<
    | {
          state: PageState;
          dispatch: React.Dispatch<PageAction>;
      }
    | undefined
>(undefined);

export const PageProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(PageReducer, initialState);
    return (
        <PageContext.Provider value={{ state, dispatch }}>
            {children}
        </PageContext.Provider>
    );
};
