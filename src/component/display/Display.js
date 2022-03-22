import React from 'react';

const Display = (props) => {
    return (
        <div style= {{ border:' 2px solid red',}}>
            <p>{props.name}</p>
            <h3>my project :{props.count} </h3>
            
        </div>
    );
};

export default Display;