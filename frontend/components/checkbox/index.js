import React, {useState} from 'react';
import PropTypes from "prop-types";
import './style.scss';

const Checkbox = ({title, active, onClick}) => {
    const [isActive, setActive] = useState(active);
    const onClickAction = () => {
        setActive(!isActive);
        onClick(isActive);
    };

    return <div className="checkbox">
        <span className="checkbox__title">{title}</span>
        <div className={`checkbox__checkbox-input${active ? ' checkbox__checkbox-input--active' : ''}`}
            onClick={onClickAction}>
        </div>
    </div>
};

Checkbox.propTypes = {
    title: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func
};

export default Checkbox;
