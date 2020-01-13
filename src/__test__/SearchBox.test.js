import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import SearchBox from '../components/presentational/SearchBox'

configure({ adapter: new Adapter() });

describe('SearchBox component testing', function () {

    it('should call the parameter function', () => {

        const mockCallback = jest.fn();

        const wrapper = mount(<SearchBox onKeyDown={mockCallback} />);
        const input = wrapper.find('input');
        const text = "skol";
        input.value = text
        input.simulate('keydown', { key: 'Enter', keyCode: 13, which: 13 })

        expect(mockCallback.mock.calls.length).toBe(1);
    });
});