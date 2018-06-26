import React from 'react';

const CycleHireButton = (props) => {
    const { clickHandler } = props;

    return (
        <div className='serviceItem' onClick={() => clickHandler({ type: 'CYCLE_HIRE', item: { name: 'Cycle hire' } })}>Cycle hire</div>
    );
};

export default CycleHireButton;
