import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Timing from './timing';
configure({adapter: new Adapter()});

describe('<Timing />', () => {
    let wrapper;
    let props = {
        departure: {}
    };
    wrapper = shallow(<Timing {...props}/>);
    
    it('Test render of the component', () => {
        expect(wrapper).toBeTruthy();
    });

    it('Test the component without props', () => {
        expect(wrapper.contains('No trips available')).toBe(true);
    });

    it('Test the component with props', () => {
        const newProps = {
            departure: {
                DepartureText : '10 min'
            }
        };
        const wrapper = shallow(<Timing {...newProps}/>);
        expect(wrapper).toBeTruthy();
        expect(wrapper.contains('NexTrip departs in 10 min')).toBe(true);
    });

    it('Test the current time text', () => {
        expect(wrapper.text()).toContain('Current Time:');
    });
});