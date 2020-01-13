import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Categories from '../components/static/Categories'

configure({ adapter: new Adapter() });

describe('Categories component testing', function () {

    it('should call the parameter function when a category is selected', () => {

        const mockCallback = jest.fn();

        const categories = [
            { id: 1, title: "Cervejas importadas" },
            { id: 2, title: "Refrigerantes" }
        ];

        const wrapper = mount(<Categories onChange={mockCallback} categories={categories} />);
        const select = wrapper.find('select');

        select.simulate('change', { target: { value: '1' } })

        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
