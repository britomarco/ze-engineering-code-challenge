import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import SearchBoxEnter from '../components/container/SearchBoxEnter'

configure({ adapter: new Adapter() });

describe('SearchBoxEnter component testing', function () {

    it('should call the parameter function when press enter', () => {

        const mockCallback = jest.fn();

        const wrapper = mount(<SearchBoxEnter onKeyDown={mockCallback} />);
        const input = wrapper.find('input');
        input.simulate('keydown', { key: 'Enter', keyCode: 13, which: 13 })

        expect(mockCallback.mock.calls.length).toBe(1);
    });

    it('should not call the parameter function when key is not enter', () => {

        const mockCallback = jest.fn();

        const wrapper = mount(<SearchBoxEnter onKeyDown={mockCallback} />);
        const input = wrapper.find('input');
        input.simulate('keydown', { key: 'Z'})

        expect(mockCallback.mock.calls.length).toBe(0);
    });
});