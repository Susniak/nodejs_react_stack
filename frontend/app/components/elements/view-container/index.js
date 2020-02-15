import React from 'react';


const ViewContainerComponent = ({children}) => {
    return <div className="app-container">
        {children}
    </div>
};

export default ViewContainerComponent;
