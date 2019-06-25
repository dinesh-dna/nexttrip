import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DropDowns from './Dropdowns.js';

configure({adapter: new Adapter()});

describe('<DropDowns />', () => {
    let wrapper;
    const handleChange = jest.fn()
    let props = {
        list: [{'Route': 1},{'Route': 2}], 
            selectedItem : '', 
            displayText : 'Route', 
            keyValue : 'Route', 
            label : 'Route',
            handleChange,
        }
    beforeEach(() => {
        wrapper = shallow(<DropDowns {...props}/>);
    });

    it('should render component', () => {
        expect(wrapper).toBeTruthy();
    });

    it('should have formControl element', () => {
        expect(wrapper.find('FormControl')).toHaveLength(1);
    });

    it('should have formControl element, with simulate onChange ', () => {
        wrapper.find('FormControl').simulate('change');
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('Disabled Dropdown check ', () => {
        const props = {
            list: [{'Route': 1},{'Route': 2}], 
            selectedItem : '', 
            displayText : 'Route', 
            keyValue : 'Route', 
            label : 'Route',
            handleChange,
            disabled :true
        }
        wrapper = shallow(<DropDowns {...props}/>);
        expect(wrapper.find('FormControl').props().disabled).toBe(true);
    });
})
