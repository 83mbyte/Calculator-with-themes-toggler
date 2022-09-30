import React from 'react';
const HeaderCalc = ({ setTheme }) => {
    return (
        <div className='headerContainer'>
            <h1>calc</h1>
            <div className='themeTogglerContainer'>
                <div style={{ fontSize: '11px', backgroundColor: 'transparent', marginBottom: '8px' }}>THEME</div>
                <div className='togglerArea'>
                    <div className='togglerText'>
                        <span>1 </span>
                        <span id="spanInMiddle">2</span>
                        <span>3</span>
                    </div>
                    <div className='toggler'>
                        <div className='togglerInput' id="one" onClick={() => { setTheme('1') }}></div>
                        <div className='togglerInput' id="two" onClick={() => { setTheme('2') }}></div>
                        <div className='togglerInput' id="three" onClick={() => { setTheme('3') }}></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeaderCalc;