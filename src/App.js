import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ServiceMenu from './components/ServiceMenu';
import CycleHireButton from './components/CycleHireButton';
import ContentSection from './components/ContentSection';

class App extends Component {
    constructor () {
        super();

        this.state = {
            content: null,
            cycleSearches: [],
            activeCycleSearches: {},
            loadingSearch: false
        };
    }

    clickHandler (item) {
        this.setState({ ...this.state, content: item });
    }

    onCycleSearch (search) {
        const oldSearch = this.state.cycleSearches.find((item) => item.string === search);

        if (oldSearch) {
            this.setState({ ...this.state, activeCycleSearches: oldSearch });
        } else {
            this.setState({ ...this.state, loadingSearch: true });
            
            axios.get(`https://api.tfl.gov.uk/BikePoint/Search?query=${search}`)
                .then((response) => {
                    const newSearch = {
                        string: search,
                        data: response.data
                    }
                    const searches = this.state.cycleSearches.slice();
                    
                    searches.push(newSearch);
                    
                    this.setState({
                        ...this.state,
                        cycleSearches: searches,
                        activeCycleSearches: newSearch,
                        loadingSearch: false
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    render () {
        return (
            <div className='App'>
                <h1>Ltd</h1>
                <div className='page'>
                    <div className='menuSection'>
                        <ServiceMenu clickHandler={this.clickHandler.bind(this)} />
                        <CycleHireButton clickHandler={this.clickHandler.bind(this)} />
                    </div>
                    <ContentSection
                        state={this.state}
                        onCycleSearch={this.onCycleSearch.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

export default App;
