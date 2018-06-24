import React, { Component } from 'react';
import axios from 'axios';
import ServiceItem from './ServiceItem';

export default class ServiceMenu extends Component {
    constructor () {
        super();

        this.state = {
            services: []
        };

        axios.get('https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr/Status?detail=true')
            .then((response) => {
                this.setState({ services: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render () {
        const { services } = this.state;
        const loadingStyle = { display: services.length === 0 ? 'auto' : 'none' };

        // order services by modeName and name

        return (
            <div>
                <div style={loadingStyle}>Loading services...</div>
                <ul>
                    {services.map((item) => (
                        <ServiceItem name={item.name} key={item.id} />
                    ))}
                </ul>
            </div>
        );
    }
}
