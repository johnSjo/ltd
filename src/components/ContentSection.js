import React from 'react';
import Service from './Service';
import CycleHire from './CycleHire';

const ContentSection = (props) => {
    const { content } = props.state;
    let container = 'lineStatuses or Cycle Hire search';

    if (content) {
        switch (content.type) {
            case 'SERVICE':
                container = <Service name={content.item.name} />;
                break;
            case 'CYCLE_HIRE':
                container = <CycleHire
                    onCycleSearch={props.onCycleSearch}
                    seachResult={props.state.activeCycleSearches}
                />;
                break;
        }
    }

    return (
        <div className='contentSection'>
            {container}
        </div>
    );
};

export default ContentSection;
