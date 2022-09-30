import React from 'react';
import RoundedWrapper from '../Wrappers/RoundedWrapper/RoundedWrapper';
import LongBtn from './Buttons/LongBtn';
import SmallBtn from './Buttons/SmallBtn';

const Keypad = ({ clickBtnHandler }) => {
    const keysValues = [
        '7', '8', '9', 'DEL', '4', '5', '6', '+', '1', '2', '3', '-', '.', '0', '/', 'x', 'RESET', '='
    ];

    return (

        <div className='keypad'>

            <RoundedWrapper>
                {
                    keysValues.map((value, index) => {
                        if ((value !== 'RESET') && (value !== '=')) {
                            return <SmallBtn value={value} key={index + '_btn'} clickBtnHandler={clickBtnHandler} />
                        }
                        else {
                            return <LongBtn value={value} key={index + '_btn'} clickBtnHandler={clickBtnHandler} />
                        }
                    })
                }
            </RoundedWrapper>

        </div>
    );
};

export default Keypad;