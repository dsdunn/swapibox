import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  grabScroll, 
  grabPlanets, 
  grabPeople, 
  grabVehicles} from '../../helper.js'
import App from '../'

jest.mock('../../helper.js')

const mockScroll = "this is the crawl for a movie";
const mockPeople = [{name: "Joe"}];
const mockVehicles = [{class: "junk"}];
const mockPlanets = [{climate: "wasteland"}];

describe('App', () => {
  let wrapper;
 
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('calls grabScroll and sets state with scroll data', async () => {
    await wrapper.instance().getScroll()
    
    expect(wrapper.state('filmInfo')).toEqual(mockScroll)

    expect(grabScroll).toHaveBeenCalled();
  })

  it('calls grabPeople from its getPeople method, sets people in state, and sets category to "people"', async () => {
    await wrapper.instance().getPeople();

    expect(grabPeople).toHaveBeenCalled();
    expect(wrapper.state('people')).toEqual(mockPeople);
    expect(wrapper.state('category')).toEqual('people');
  })

  it('calls grabVehicles from its get Vehicles method, and sets category to "vehicles"', async () => {
    await wrapper.instance().getVehicles();

    expect(grabVehicles).toHaveBeenCalled();
    expect(wrapper.state('vehicles')).toEqual(mockVehicles);
    expect(wrapper.state('category')).toEqual('vehicles');
  })

  it('calls grabPlanets from its getPlanets method, and sets category to "planets"', async () => {
    await wrapper.instance().getPlanets();

    expect(grabPlanets).toHaveBeenCalled();
    expect(wrapper.state('planets')).toEqual(mockPlanets);
    expect(wrapper.state('category')).toEqual('planets');
  })

  it('pushes an object into the favorites array with toggleFavorites if it doesn\'t already exist',() => {
    wrapper.setState({
      favorites: [{name: 'Bingo'}]
    })

    wrapper.instance().toggleFavorites({name: "Gonzo"});
    expect(wrapper.state('favorites').length).toEqual(2)

  })

  it('removes object from favorites array with toggleFavorites if it already exists', () => {
    wrapper.setState({
      favorites: [{name: 'Bingo'}]
    })

    wrapper.instance().toggleFavorites({name: "Bingo"});
    expect(wrapper.state('favorites').length).toEqual(0)
  })

  it('sets category to "favorites" when showFavorites is called', () => {

    wrapper.setState({
      category: 'people'
    })

    expect(wrapper.state('category')).toEqual('people');
    wrapper.instance().showFavorites();

    expect(wrapper.state('category')).toEqual('favorites')

  })

})

