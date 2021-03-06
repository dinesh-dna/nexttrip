import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Header } from './Header';

configure({adapter: new Adapter()});

describe('<Header />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header />);
    });
    it('should have component render', () => {
        expect(wrapper).toBeTruthy();
        expect(wrapper.find('img')).toHaveLength(2);
    });
})