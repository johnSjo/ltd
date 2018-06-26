import React from 'react';

const ServiceItem = (props) => {
    const { name, serviceTypes, lineStatuses } = props.service;
    const { clickHandler } = props;

    // check if operate at night
    const nightStyle = {
        display: serviceTypes.find((service) => service.name === 'Night')
            ? 'auto'
            : 'none'
    };

    // check if any disruptions
    const disruptionStyle = {
        display: lineStatuses.find((status) => status.statusSeverity !== 10)
            ? 'auto'
            : 'none'
    };

    return (
        <div className='serviceItem' onClick={() => clickHandler({ type: 'SERVICE', item: props.service })}>
            <div>{name}</div>
            <div className='serviceIcons'>
                <div className='night' style={nightStyle}>N</div>
                <div className='disruption' style={disruptionStyle}>D</div>
            </div>
        </div>
    );
};

export default ServiceItem;
