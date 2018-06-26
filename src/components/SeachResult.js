import React from 'react';

const SeachResult = (props) => {
    const { id, commonName, lat, lon } = props.item;
    const bikePoint = id.substr(id.indexOf('_') + 1);
    const latLon = `(${lat}, ${lon})`;

    return (
        <div className='bikeResults'>
            <div>{bikePoint} {commonName}</div>
            <div>{latLon}</div>
        </div>
    );
};

export default SeachResult;
