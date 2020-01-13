import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Product from '../components/static/Product';

configure({ adapter: new Adapter() });

describe('Product card testing', function () {

  test('Shoul call the function when the product is added', () => {

    const mockProductAdded = jest.fn();
    const mockProductRemoved = jest.fn();

    const wrapper = mount(<Product title="Budweiser 350ml - Unidade"
      price={3.49} quantity={0} imageUrl="#"
      productAdded={mockProductAdded} productRemoved={mockProductRemoved} />);

    const button = wrapper.find('button.btn-plus');

    button.simulate('click')

    expect(mockProductAdded.mock.calls.length).toBe(1);
  });

  test('Shoul call the function when the product is removed', () => {

    const mockProductAdded = jest.fn();
    const mockProductRemoved = jest.fn();

    const wrapper = mount(<Product title="Budweiser 350ml - Unidade"
      price={3.49} quantity={0} imageUrl="#"
      productAdded={mockProductAdded} productRemoved={mockProductRemoved} />);

    const button = wrapper.find('button.btn-subtract');

    button.simulate('click')

    expect(mockProductRemoved.mock.calls.length).toBe(1);
  });

});
