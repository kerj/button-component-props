import React from 'react'

const MenuItem = (props) => {
    return (
        <div>
            <img src={props.src}/>
            {props.children}
        </div>
    )
}

export default MenuItem;
