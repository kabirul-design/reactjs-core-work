import React, { useEffect, useState } from 'react';
import Display from '../display/Display';

const Watch = () => {
    const [count, setCount] = useState(0);

    const countedPrice = () =>{
        const newCountedPrice = count + 1;
        console.log(newCountedPrice);
        
         setCount(newCountedPrice);
    };

    useEffect( ()=> {
        // console.log('time');
    },[count])

    return (
        <div>
            <h2>Watch :{count} </h2>
            <button onClick={countedPrice}>count Price</button>
            <Display name='grameen' count={count}></Display>
        </div>
    );
};

export default Watch;


