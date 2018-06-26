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
        const { clickHandler } = this.props;
        const { services } = this.state;
        const loadingStyle = { display: services.length === 0 ? 'auto' : 'none' };

        // order services by modeName and name
        services.sort((a, b) => {
            let sort = a.modeName.toLowerCase().localeCompare(b.modeName.toLowerCase());

            if (sort === 0) {
                sort = a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            }

            return sort;
        });

        return (
            <div>
                <div style={loadingStyle}>Loading services...</div>
                {services.map((service) => (
                    <ServiceItem service={service} clickHandler={clickHandler} key={service.id} />
                ))}
            </div>
        );
    }
}
