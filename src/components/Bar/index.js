import React from 'react';

import './index.css';

const BAR_WIDTH = 30;
const BAR_GAP = 10;

function Bar({ element, isActive, index }) {
    return (
        <div
            className={`bar ${isActive ? 'active' : ''}`}
            style={{ height: element, left: (BAR_WIDTH + BAR_GAP) * index }}
        ></div>
    );
}

export default Bar;
