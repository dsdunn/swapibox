import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  getResidents, 
  grabPlanets, 
  grabPeople, 
  grabVehicles, 
  getSpecies, 
  getHomeWorld, 
  grabScroll} from './helper';


describe('helper', () => {

  it('calls fetch with the right data when grabScroll is called', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        count : 0,
        results: [{title: "Cowabunga",
                  release_date: "1977-05-25",
                  opening_crawl: ''}]
      })
    }))

    const filmsURL = "https://swapi.co/api/films";

    grabScroll();

    expect(window.fetch).toHaveBeenCalledWith(filmsURL);
  })

  it('returns mockFilmInfo when grabScroll is called', async () => {
    const mockFilmInfo = {
      filmTitle: "Cowabunga",
      date: "1977-05-25",
      crawl: ''
    }

    const actual = await grabScroll();
    expect(actual).toEqual(mockFilmInfo);
  })

  it('calls fetch with the right data when grabPeople is called', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve)

    const peopleURL = 'https://swapi.co/api/people';

    grabPeople();

    expect(window.fetch).toHaveBeenCalledWith(peopleURL);

  })

  it.skip('should return mockPeople when grabPeople is called', async () => {
    const mockPeople = [{
      name: "Chucky",
      homeworld: 'Earth',
      species: ['ginger']
    }]

    let actual = await grabPeople()
    // getHomeWorld = jest.fn(()=> Promise.resolve({
    //   json: () => Promise.resolve({
    //     count : 0,
    //     results: [{name: "Earth",
    //               population: '7 billion',
    //               }]
    //   })
    // }))
    expect(actual).toEqual(mockPeople)
  })

  it.skip('calls getHomeWorld when grabPeople is called', async () => {
    const mockGetHomeWorld = jest.fn(() => Promise.resolve)

    // let spy = jest.spyOn(helper, 'getHomeWorld').mockImplementation(()=> mockGetHomeWorld)

    await grabPeople();

    expect().toHaveBeenCalled();
  })

  it.skip('calls getSpecies when grabPeople is called', async () => {

  })

  it.skip('returns mockHomeWorld when getHomeWorld is called', () => {
    const mockHomeWorld = { planetNmae: 'Earth', population: '7 billion' }
  })

  it.skip('returns mockSpeciesName when getSpecies is called', () => {
    const mockSpeciesName = 'human';
  })

  it('calls fetch with the right data when grabVehicles is called', () => {
    const vehicleURL = 'https://swapi.co/api/vehicles/'

    grabVehicles();

    expect(window.fetch).toHaveBeenCalledWith(vehicleURL);
  })

  it('returns mockVehicles when grabVehicles is called', async () => {
    const mockVehicles = [{
      name:'mustang',
      model: '4.0',
      vehicle_class: 'muscle car',
      passengers: '4'
    }]
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        count : 0,
        results: mockVehicles
      })
    }))

    let actual = await grabVehicles();

    expect(actual).toEqual(mockVehicles)
  })

  it('calls fetch with the right data when grabPlanets is called', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve)

    const planetsURL = 'https://swapi.co/api/planets';

    grabPlanets();

    expect(window.fetch).toHaveBeenCalledWith(planetsURL);
  })

  it.skip('returns mockResidentNames when getResidents is called', () => {
    const mockResidentNames = ['Jules Verne', 'Sam Jackson']
  })

})