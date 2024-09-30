import { PageState } from "../../type/other";
import { PageAction } from "../../type/action";
export const PageReducer = (
    state: PageState,
    action: PageAction
): PageState => {
    console.log(action, "action");
    switch (action.type) {
        case "TOGGLE_DRAWER":
            return { ...state, openDrawer: !state.openDrawer };
        case "OPEN_DRAWER":
            return { ...state, openDrawer: true };
        case "CLOSE_DRAWER":
            return { ...state, openDrawer: false };
        case "NO_PAGE_FOUND_TRIGGER":
            return { ...state, noPageStatus: action.payload };
        default:
            return state;
    }
};
