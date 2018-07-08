import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import SideBar from '../';

describe('SideBar', () => {
  let wrapper;
  it('should match the snapshot', () => {
    wrapper = shallow(<SideBar filmInfo={{some: "kind of object"}} />)
    expect(wrapper).toMatchSnapshot();
  })

  it('should return an empty string if there is no filmInfo', () => {
    wrapper = shallow(<SideBar />)
    expect(wrapper.find('p').length).toEqual(0);
  })
})