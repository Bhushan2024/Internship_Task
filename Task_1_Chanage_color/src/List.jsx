import React from 'react';
import { useState } from 'react';

function List() {
    const [currentColor, setColor] = useState('');
    const colors = ['Orange', 'Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Black', 'Pink'];

    return (
        <>
            <ul>
                {colors.map((color, index) => (
                    <li onClick={() => setColor(color)} style={{ cursor: 'pointer' }}>{color}</li>
                ))}
            </ul>
            <div style={{ backgroundColor: currentColor }}>
                <p>You selected Color is {currentColor}</p>
            </div>
        </>
    )
}

export default List;