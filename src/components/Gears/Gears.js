import React, {useEffect, useState} from 'react';
import Gear from "./Gear";

const Gears = () => {
    const [offset, setOffset] = useState(0);


    useEffect(() => {
        window.addEventListener('scroll', scroll);

        return () => {
            window.removeEventListener('scroll', scroll)
        }
    });

    const scroll = (event) => {
        setOffset(window.pageYOffset);
    };


    console.log(offset);
    return (
        <div>
            <Gear size={'144'} offset={offset} top={-15} left={-15} color={'white'}/>
            <Gear size={'90'} offset={-offset + 5} top={-50} left={-45} color={'white'}/>
            <Gear size={'100'} offset={-offset} top={74} left={-60} color={'white'}/>
            {/*<Gear size={'40'} offset={-offset} top={105} left={36}/>*/}
            {/*<Gear size={'80'} offset={offset} top={-40} left={110}/>*/}
            {/*<Gear size={'72'} offset={offset} top={10} left={10}/>*/}
        </div>
    );
};

export default Gears;