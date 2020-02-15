import React from 'react';
import HeaderComponent from "../../typography/header";

/**
 * Base application component
 */

const PanelComponent = ({children, title, className = ''}) => {
        return <div className={className + ' panel'}>
            <HeaderComponent>{title}</HeaderComponent>
            <div className="panel__content">
                {children}
            </div>
        </div>
};

export default PanelComponent;
