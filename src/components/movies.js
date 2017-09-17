import React from 'react';

export default (props) => {
    return (
        <div>
            <img src={props.info['im:image'][2].label}/>
            <h3>{props.info['im:name'].label}</h3>
            <p>{props.info.summary.label}</p>
        </div>
    )
}