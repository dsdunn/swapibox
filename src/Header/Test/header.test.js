import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Header from '../';

describe('Header', () => {
  let wrapper;
  const mockProps = {
    getPeople: jest.fn(),
    getVehicles: jest.fn(),
    getPlanets: jest.fn(),
    showFavorites: jest.fn()
  }

  it('should match the snapshot', () => {
    wrapper = shallow(<Header props={mockProps} />)
    expect(wrapper).toMatchSnapshot();
  })
})