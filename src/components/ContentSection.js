import React from 'react';
import Service from './Service';
import CycleHire from './CycleHire';

const ContentSection = (props) => {
    const { state } = props;
    const { content } = state;
    let container = 'lineStatuses or Cycle Hire search';

    if (content) {
        switch (content.type) {
            case 'SERVICE':
                container = <Service item={content.item} />;
                break;
            case 'CYCLE_HIRE':
                container = <CycleHire
                    onCycleSearch={props.onCycleSearch}
                    seachResult={state.activeCycleSearches}
                    loading={state.loadingSearch}
                />;
                break;
            default :
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
