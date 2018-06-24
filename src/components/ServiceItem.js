import React from 'react';

const ServiceItem = (service) => {
    const { name } = service;

    // check if operate at night

    // check if any disruptions

    return (
        <li>
            <div>{name}</div>
        </li>
    );
};

export default ServiceItem;
