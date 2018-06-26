import React from 'react';

const SeachResult = (props) => {
    const { id, commonName, lat, lon } = props.item;
    const bikePoint = id.substr(id.indexOf('_') + 1);
    const latLon = `(${lat}, ${lon})`;

    return (
        <div>
            {bikePoint} {commonName} {latLon}
        </div>
    );
};

export default SeachResult;
