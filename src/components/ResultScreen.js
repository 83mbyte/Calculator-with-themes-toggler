import React from 'react';
import RoundedWrapper from '../Wrappers/RoundedWrapper/RoundedWrapper';

const ResultScreen = ({ data }) => {
    return (
        <div className='resultScreen'>
            <RoundedWrapper>
                {data}
            </RoundedWrapper>
        </div>
    );
};

export default ResultScreen;