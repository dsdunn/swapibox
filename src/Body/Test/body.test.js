import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Body from '../'

describe('Body',  () => {
  let wrapper;
  let mockState = {
    category: 'people',
    people: [{name:'joe'}],
    vehicles: [{class: 'junk'}, {class: 'luxury'}],
    favorites: [],
    filmInfo: {some: "info"}
  }
  const mockToggleFavs = jest.fn();

  it('should match the snapshot', () => {
    wrapper = shallow(<Body 
                      state={mockState} 
                      toggleFavorites={mockToggleFavs}
                      />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render cards for each item in current category', () => {
    mockState = {
    category: 'people',
    people: [{name:'joe'}],
    vehicles: [{class: 'junk'}, {class: 'luxury'}],
    planets: [{name:'thisOne'}, {name:'thatOne'}, {name:'anotherOne'}],
    favorites: [],
    filmInfo: {some: "info"}
  }

    wrapper = shallow(<Body 
                      state={mockState} 
                      toggleFavorites={mockToggleFavs}
                      />)

    expect(wrapper.find('Card').length).toEqual(1);

    mockState = {
      category: 'vehicles',
      people: [{name:'joe'}],
      vehicles: [{class: 'junk'}, {class: 'luxury'}],
      planets: [{name:'thisOne'}, {name:'thatOne'}, {name:'anotherOne'}],
      favorites: [],
      filmInfo: {some: "info"}
    }

    wrapper = shallow(<Body 
                      state={mockState} 
                      toggleFavorites={mockToggleFavs}
                      />)

    expect(wrapper.find('Card').length).toEqual(2);

    mockState = {
      category: 'favorites',
      people: [{name:'joe'}],
      vehicles: [{class:'junk'}, {class:'luxury'}],
      planets: [{name:'thisOne'}, {name:'thatOne'}, {name:'anotherOne'}],
      favorites: [{class:'junk'}, {name:'joe'}, {name:'thatOne'}, {class:'luxury'}],
      filmInfo: {some: "info"}
    }

    wrapper = shallow(<Body 
                      state={mockState} 
                      toggleFavorites={mockToggleFavs}
                      />)

      
    expect(wrapper.find('Card').length).toEqual(4);

    mockState = {
      category: 'planets',
      people: [{name:'joe'}],
      vehicles: [{class: 'junk'}, {class: 'luxury'}],
      planets: [{name:'thisOne'}, {name:'thatOne'}, {name:'anotherOne'}],
      favorites: [],
      filmInfo: {some: "info"}
    }

    wrapper = shallow(<Body 
                      state={mockState} 
                      toggleFavorites={mockToggleFavs}
                      />)

    expect(wrapper.find('Card').length).toEqual(3);
  })

  it('should render a noFavorites message if category is favorite and favorites is empty', () => {
    mockState = {
      category: 'favorites',
      people: [{name:'joe'}],
      vehicles: [{class: 'junk'}, {class: 'luxury'}],
      planets: [{name:'thisOne'}, {name:'thatOne'}, {name:'anotherOne'}],
      favorites: [],
      filmInfo: {some: "info"}
    }
    wrapper = shallow(<Body 
                      state={mockState} 
                      toggleFavorites={mockToggleFavs}
                      />)

    expect(wrapper.find('Cards').length).toEqual(0);
    expect(wrapper.find('h2').length).toEqual(1)

  })

  it('should render no cards if state is empty', () => {
    mockState = {
      category: '',
      people: [{name:'joe'}],
      vehicles: [{class: 'junk'}, {class: 'luxury'}],
      planets: [{name:'thisOne'}, {name:'thatOne'}, {name:'anotherOne'}],
      favorites: [],
      filmInfo: {some: "info"}
    }
    wrapper = shallow(<Body 
                      state={mockState} 
                      toggleFavorites={mockToggleFavs}
                      />)

    expect(wrapper.find('Card').length).toEqual(0);
  })

})