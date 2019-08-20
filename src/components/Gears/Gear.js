import React from 'react';
import {IoIosCog} from "react-icons/io";

const Gear = ({size, offset, top, left}) => {
    return (
        <span style={{
            transform: `rotate(${offset}deg)`,
            position: 'fixed',
            top: top,
            left: left,
            width: `${size}px`,
            height: `${size}px`,
            margin: 'auto',
        }}
        >
            <IoIosCog fontSize={size} color={'black'}/>
        </span>
    );
};

export default Gear;