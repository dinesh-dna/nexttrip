import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Table from './table';

configure({adapter: new Adapter()});

describe('<Table />', () => {
    let wrapper;
    let props = {
        headers: ['Routes', 'Description', 'Departs'],
        timePointDeparture: [{
            Route: '1',
            Description: 'Target',
            DepartureText: '4 min'
        }]
    };
    
    wrapper = shallow(<Table {...props}/>);
    
    it('Test render of the component', () => {
        expect(wrapper).toBeTruthy();
    });

    it('Test render of the component and elements', () => {
        expect(wrapper.find('thead')).toHaveLength(1);
        expect(wrapper.find('th')).toHaveLength(3);
        expect(wrapper.find('tbody')).toHaveLength(1);
        expect(wrapper.find('td')).toHaveLength(3);
    });

});