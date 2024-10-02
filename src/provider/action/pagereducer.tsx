import { PageState } from "../../type/other";
import { PageAction } from "../../type/action";
export const PageReducer = (
    state: PageState,
    action: PageAction
): PageState => {
    switch (action.type) {
        case "TOGGLE_DRAWER":
            return { ...state, openDrawer: !state.openDrawer };
        case "OPEN_DRAWER":
            return { ...state, openDrawer: true };
        case "CLOSE_DRAWER":
            return { ...state, openDrawer: false };

        default:
            return state;
    }
};
