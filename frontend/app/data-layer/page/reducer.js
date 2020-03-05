import {SCROLL_TO_TOP} from "./actions";

const initialState = {
    fixedPageHeader: false,
    scrollToTop: false
};

const pageReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SCROLL_TO_TOP:
            return {
                scrollToTop: payload
            };
        default:
            return state;
    }
};

export default pageReducer;
