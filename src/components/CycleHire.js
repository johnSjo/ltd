import React from 'react';
import SeachResult from './SeachResult';

const CycleHire = (props) => {
    const { seachResult } = props;
    const data = seachResult.data;
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            props.onCycleSearch(e.target.value);
        }
    };
    let result;

    if (data) {
        if (data.length > 0) {
            result = data.map((item) => <SeachResult item={item} key={item.id} />);
        } else {
            result = `No bike points found for ${seachResult.string}`;
        }
    }
    
    return (
        <div>
            <div>Cycle hire</div>
            <input type='text' onKeyPress={handleKeyPress}/>
            {result}
        </div>
    );
};

export default CycleHire;
