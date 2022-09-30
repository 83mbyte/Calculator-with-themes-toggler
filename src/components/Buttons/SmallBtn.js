import React from 'react';

const SmallBtn = ({ value, clickBtnHandler }) => {

    return (
        <div
            className={`smallBtn${value === 'DEL' ? ' colored' : ''}`}
            onClick={() => clickBtnHandler(value)}
        >
            <span style={{ border: '0px solid red', margin: '0px', padding: '0px', marginTop: '5px' }}>
                {value}
            </span>
        </div>
    );
};

export default SmallBtn;