import React from 'react';

const Service = (props) => {
    const { lineStatuses, name } = props.item;
    const lineStatuse = lineStatuses.find((status) => status.statusSeverity !== 10);
    const disruption = lineStatuse ? 'Service currently suffering disruptions' : 'No service disruptions';
    const disruptions = lineStatuses.filter((status) => status.statusSeverity !== 10)
        .map((status, index) => <div key={index}>{status.reason}</div>);

    return (
        <div>
            <h3>{name}</h3>
            <h1>{disruption}</h1>
            {disruptions}
        </div>
    );
};

export default Service;
