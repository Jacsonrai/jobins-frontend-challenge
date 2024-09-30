export type PageAction =
    | { type: "TOGGLE_DRAWER" }
    | { type: "OPEN_DRAWER" }
    | { type: "CLOSE_DRAWER" }
    | {
          payload: boolean;
          type: "NO_PAGE_FOUND_TRIGGER";
      };
