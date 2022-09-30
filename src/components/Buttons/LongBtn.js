import React from 'react';

const LongBtn = ({ value, clickBtnHandler }) => {
    let styleString = '';
    if (value === 'RESET') {
        styleString = ' colored'
    } else if (value === '=') {
        styleString = ' resultBtn'
    }
    return (
        <div className={`longBtn${styleString}`} onClick={() => clickBtnHandler(value)}>
            <span style={{ border: '0px solid red', margin: '0px', padding: '0px', marginTop: '5px' }}>
                {value}
            </span>
        </div>
    );
};

export default LongBtn;