import React from 'react';
import SeachResult from './SeachResult';

const CycleHire = (props) => {
    const { seachResult } = props;
    const data = seachResult.data;
    const handleKeyPress = (e) => {
        seachString = e.target.value;
    };
    const handleSubmit = (e) => {
        props.onCycleSearch(seachString);
        e.preventDefault();
    };
    const idleStyle = { display: props.loading ? 'none' : 'inline-block' };
    const loadingStyle = { display: props.loading ? 'inline-block' : 'none' };
    const resultStyle = { display: data ? 'block' : 'none' };
    let resultHeader;
    let result;
    let seachString = '';

    if (data) {
        if (data.length > 0) {
            result = data.map((item) => <SeachResult item={item} key={item.id} />);
            resultHeader = `Bike points for: ${seachResult.string}`;
        } else {
            resultHeader = `No bike points found for: ${seachResult.string}`;
        }
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Seach for bike points: 
                    <input type='text' onKeyPress={handleKeyPress} />
                </label>
                <div style={loadingStyle}>Seaching...</div>
                <input style={idleStyle} type='submit' value='Seach' />
            </form>
            <div style={resultStyle}>
                <h3>{resultHeader}</h3>
                {result}
            </div>
        </div>
    );
};

export default CycleHire;
