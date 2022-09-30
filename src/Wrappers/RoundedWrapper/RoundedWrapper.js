import React from 'react';

const RoundedWrapper = ({ children }) => {

    return (
        <div className={`roundedWrapper`}>
            {children}
        </div>
    );
};

export default RoundedWrapper;