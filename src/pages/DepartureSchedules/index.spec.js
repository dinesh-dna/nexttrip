import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { DepartureSchedules } from './index.js';

configure({adapter: new Adapter()});

describe('<DepartureSchedule />', () => {
    let wrapper;
    let props = {
        departure: {
                        Actual: true,
                        DepartureText: "15 Min"
                   },
        timePointDeparture: [{
            Route: '1',
            Description: 'Target',
            DepartureText: '4 min'
        }],
        history: {
            push : jest.fn()
        }
    };
    
    wrapper = shallow(<DepartureSchedules {...props}/>);
    
    it('Test render of the component', () => {
        expect(wrapper).toBeTruthy();
    });

    it('Check the condition render with empty timePointDeparture', () => {
        let props = {
            timePointDeparture: [],
            departure: {
                DepartureText: '4 min'
            }
        };
        const wrapper = shallow(<DepartureSchedules {...props}/>);
        expect(wrapper.text()).toContain('No Schedules at this time. Please try later.');
    });

    it('Check for all the components weather its rendering', () => {
        expect(wrapper.find('DepartureTable')).toHaveLength(1);
        expect(wrapper.find('timing')).toHaveLength(1);
        expect(wrapper.find('Button')).toHaveLength(1);
    });

    it('check handleBackButton button ', () => {
        const instance = wrapper.instance();
        instance.handleBackButton = jest.fn();
        // wrapper.forceUpdate();
        wrapper.find('Button').simulate('click');
        expect(instance.handleBackButton).toHaveBeenCalled();
        expect(props.history.push).toHaveBeenCalledTimes(1);
    });
});