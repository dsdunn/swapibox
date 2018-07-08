import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import * as helper from '../../helper.js'
import App from '../'

jest.mock('../../helper.js')

const mockScroll = "this is the crawl for a movie";
const mockPeople = [{
  name: "Joe",
  planetName: 'Earth',
  population: '7 billion',
  species: 'human'
  }];
const mockVehicles = [{class: "junk"}];
const mockPlanets = [{
  climate: "wasteland",
  terrain: "rocky",
  residents: ['Billy', 'Bob', 'Butch'],
  population: "7 billion",
  name: "Nowhereland",
  population: "1"
}];

describe('App', () => {
  let wrapper;
 
  beforeEach(() => {
    wrapper = shallow(<App />)
    wrapper.setState({filmInfo: {some: "info"}})
  })

  it('calls helper.grabScroll and sets state with scroll data', async () => {
    await wrapper.instance().getScroll()
    
    expect(wrapper.state('filmInfo')).toEqual(mockScroll)

    expect(helper.grabScroll).toHaveBeenCalled();
  })

  it('does not call helper.grabPeople from getPeople if people exist in state', async () => {
    wrapper.setState({ people: [{name: 'Barry'}]});
    await wrapper.instance().getPeople();

    expect(helper.grabPeople).not.toHaveBeenCalled();
  })

  it('calls helper.grabPeople from its getPeople method, sets people in state, and sets category to "people"', async () => {
    await wrapper.instance().getPeople();

    expect(helper.grabPeople).toHaveBeenCalled();
    expect(wrapper.state('people')).toEqual(mockPeople);
    expect(wrapper.state('category')).toEqual('people');
  })

  it('does not call helper.grabVehicles from getVehicles if vehicles exist in state', async () => {
    wrapper.setState({ vehicles: [{class: 'truck'}]});
    await wrapper.instance().getPeople();

    expect(helper.grabVehicles).not.toHaveBeenCalled();
  })

  it('calls helper.grabVehicles from its get Vehicles method, and sets category to "vehicles"', async () => {
    await wrapper.instance().getVehicles();

    expect(helper.grabVehicles).toHaveBeenCalled();
    expect(wrapper.state('vehicles')).toEqual(mockVehicles);
    expect(wrapper.state('category')).toEqual('vehicles');
  })

  it('does not call helper.grabPlanets from getPeople if planets exist in state', async () => {
    wrapper.setState({ planets: [{terrain: 'jungle'}]});
    await wrapper.instance().getPeople();

    expect(helper.grabPlanets).not.toHaveBeenCalled();
  })

  it('calls helper.grabPlanets from its getPlanets method, and sets category to "planets"', async () => {
    await wrapper.instance().getPlanets();

    expect(helper.grabPlanets).toHaveBeenCalled();
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

