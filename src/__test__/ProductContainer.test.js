import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Product from '../components/container/ProductContainer';

configure({ adapter: new Adapter() });

describe('Product card testing', function () {

  test('Should increment when a product is added', () => {

    const mockProductAdded = jest.fn();
    const mockProductRemoved = jest.fn();

    const wrapper = mount(<Product title="Budweiser 350ml - Unidade"
      price={3.49} quantity={10} imageUrl="#"
      productAdded={mockProductAdded} productRemoved={mockProductRemoved} />);

    const button = wrapper.find('button.btn-plus');

    button.simulate('click')
    button.simulate('click')

    const qtd = wrapper.find(".box-quantity span")
    expect(qtd.text()).toBe("12");
  });

  test('Should decrement the quantity when a product is removed', () => {

    const mockProductAdded = jest.fn();
    const mockProductRemoved = jest.fn();

    const wrapper = mount(<Product title="Budweiser 350ml - Unidade"
      price={3.49} quantity={10} imageUrl="#"
      productAdded={mockProductAdded} productRemoved={mockProductRemoved} />);

    const button = wrapper.find('button.btn-subtract');

    button.simulate('click')

    const qtd = wrapper.find(".box-quantity span")
    expect(qtd.text()).toBe("9");
  });

  test('Should not decrement the quantity when a product is removed and quantity is zero', () => {

    const mockProductAdded = jest.fn();
    const mockProductRemoved = jest.fn();

    const wrapper = mount(<Product title="Budweiser 350ml - Unidade"
      price={3.49} quantity={0} imageUrl="#"
      productAdded={mockProductAdded} productRemoved={mockProductRemoved} />);

    const button = wrapper.find('button.btn-subtract');

    button.simulate('click')

    const qtd = wrapper.find(".box-quantity span")
    expect(qtd.text()).toBe("0");
  });

});