import React, {useRef} from 'react';
import {connect} from "react-redux";
import {scrollToTop as scrollToTopAction} from "../../app/data-layer/page/actions";

const mapStateToProps = state => ({
    scrollToTop: state.page.scrollToTop
});

const scrollTo = ({scrollToTop, dispatch}) => {
    const myRef = useRef(null);

    if (scrollToTop) {
        window.scrollTo(0, myRef.current.offsetTop);
        dispatch(scrollToTopAction(false));
    }

    return <div>Test</div>;
};

const ScrollToComponent = connect(mapStateToProps)(scrollTo);
export default ScrollToComponent;
