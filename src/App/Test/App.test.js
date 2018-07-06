import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  grabScroll, 
  getPlanets, 
  getPeople, 
  getVehicles} from '../../helper.js'
import App from '../'

jest.mock('../../helper.js')

describe('App', () => {
  let wrapper;
 
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('calls dataCleaner.grabScroll and sets state with scroll data', () => {
    wrapper.instance().getScroll();

    expect(grabScroll).toHaveBeenCalled();
  })

  it('calls dataCleaner.getPeople from its getPeople method, and sets category to "people"', () => {
    wrapper.instance().getPeople();

    expect(getPeople).toHaveBeenCalled();
  })

  it('calls dataCleaner.getVehicles from its get Vehicles method, and sets category to "vehicles"', () => {
    wrapper.instance().getVehicles();

    expect(getVehicles).toHaveBeenCalled();
  })
  it('calls dataCleaner.getPlanets from its getPlanets method, and sets category to "planets"', () => {
    wrapper.instance().getPlanets();

    expect(getPlanets).toHaveBeenCalled();
  })

  it('pushes an object into the favorites array with toggleFavorites if it doesn\'t already exist',() => {
    wrapper.setState({
      favorites: [{name: 'Bingo'}]
    })

    wrapper.instance().toggleFavorites({name: "Gonzo"});

    expect(wrapper.state('favorites'))


  })

  it.skip('removes object from favorites array with toggleFavorites if it already exists', () => {

  })

  it.skip('sets category to "favorites" when showFavorites is called', () => {

  })

})

