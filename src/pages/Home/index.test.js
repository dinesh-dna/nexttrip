import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {App} from './index.js';
configure({adapter: new Adapter()});

describe('<App />', () => {
    let wrapper;
    const handleRouteChange = jest.fn();
    const handleStopEntry = jest.fn();
    const handleStopChange = jest.fn();
    const handleDirectionChange = jest.fn();
    const _getStops= jest.fn();
    const _getDirection= jest.fn();
    const _getTimePointDeparture= jest.fn();
    const _getRoutes= jest.fn();
    const _getDepartureList = jest.fn();
    let props = {
        routes: [{
            Route: '1',
            Description: 'Home'
        }],
        direction: [{
            Text: 'East',
            Value: '1'
        }],
        stopsStationList: [{
            Text: 'Target',
            Value: '20'
        }],
        history: {
            push: jest.fn()
        },
        displayText: "Description",
        id: "routeDropDown",
        keyValue: "Route",
        label: "Select Route",
        handleRouteChange,
        handleStopEntry,
        handleStopChange,
        handleDirectionChange,
        _getStops,
        _getDirection,
        _getTimePointDeparture,
        _getRoutes,
        _getDepartureList
    };


    beforeEach(() => {
        wrapper = shallow(<App {...props}/>);
    });

    it('Call componentDidMount lifecycle and Render Component', () => {
        expect(wrapper).toBeTruthy();
        expect(_getRoutes).toHaveBeenCalledTimes(1);
    });

    it('Test input Text box -> onChange method', () => {
        wrapper.find('#txtstopNumber').simulate('change',{target: {value: '1000'}});
        expect(wrapper.state('stopNumber')).toBe('1000');
    });

    it('check for button, input, DropDowns components are present', () => {
        expect(wrapper.find('#stopNumber')).toHaveLength(1);
        expect(wrapper.find('#txtstopNumber')).toHaveLength(1);
        expect(wrapper.find('Dropdowns')).toHaveLength(3);
    });

    it('Test the input box -> keyEntry method with data , check if button is enabled', () => {
        wrapper.setState({stopNumber: 1});

        wrapper.find('#txtstopNumber').simulate('keyPress',{key: 'Enter'});
        expect(wrapper.find('#stopNumber').props().disabled).toBe(false);
    });

    it('check for button is disbled', () => {
        expect(wrapper.find('#stopNumber').props().disabled).toBe(true);
    });

    it('SetState -> SelectedRoute and verify _getDirection is called ', () => {
        const wrapper = mount(<App {...props}/> );
        wrapper.find('#routeDropDown').at(2).simulate('change',{target: {value: 'Home'}});
        expect(_getDirection).toHaveBeenCalledTimes(1);
    });

    it('Test the handleRouteChange method and _getDirection Props', () => {
        const instance = wrapper.instance();
        instance.handleRouteChange({target: {value: 'Home'}});
        expect(wrapper.state('selectedRoute')).toEqual({ Route: '1', Description: 'Home' });
        expect(_getDirection).toHaveBeenCalled();
    });

    it(' Test handleDirectionChange method _getStops', () => {
        const instance = wrapper.instance();
        instance.handleDirectionChange({target: {value: 'East'}});
        expect(wrapper.state('selectedDirection')).toEqual({ Text: 'East', Value: '1' });
        expect(_getStops).toHaveBeenCalledTimes(1);
    });

    it(' Test handleStopChange method _getTimePointDeparture', () => {
        const instance = wrapper.instance();
        instance.handleStopChange({target: {value: 'Target'}});
        expect(wrapper.state('selectedStop')).toEqual({ Text: 'Target', Value: '20' });
        expect(_getTimePointDeparture).toHaveBeenCalledTimes(1);
    });
});
