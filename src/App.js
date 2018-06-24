import React, { Component } from 'react';
import './App.css';
import ServiceMenu from './components/ServiceMenu';
import CycleHire from './components/CycleHire';
import ContentSection from './components/ContentSection';

class App extends Component {
    constructor () {
        super();

        this.state = {
            content: null
        };
    }

    // clickHander = (item) => {
    //     // update Content section
    // }

    render () {
        return (
            <div className='App'>
                <h1>Ltd</h1>
                <div className='menuSection'>
                    <ServiceMenu click={this.clickHander} />
                    <CycleHire />
                </div>
                <ContentSection content={this.state.content} />
            </div>
        );
    }
}

export default App;
