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

  const mockScroll = "this is the crawl for a movie";
  const mockPeople = [{
    name: "Joe",
    homeWorld: 'Earth',
    population: '7 billion',
    species: ['human']
    }];
  const mockPlanets = [{
    climate: "wasteland",
    terrain: "rocky",
    residents: ['link1', 'link2'],
    population: "7 billion",
    name: "Nowhereland",
    population: "1"
  }];
  const mockHomeWorld = { 
    planetName: 'Earth', 
    population: '7 billion' 
  }
  const mockSpeciesName = 'human';
  const mockVehicles = [{
    name:'mustang',
    model: '4.0',
    vehicle_class: 'muscle car',
    passengers: '4'
  }]
  const mockResidentNames = ['Jules Verne', 'Jules Verne']

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

  it('should return mockPeople when grabPeople is called', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({results: mockPeople})
    }))
    let actual = await grabPeople();

    expect(actual).toEqual(mockPeople)
  })

  it('returns mockHomeWorld when getHomeWorld is called', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({ 
                                    name: 'Earth', 
                                    population: '7 billion' 
                                  })
    }))
    let actual = await getHomeWorld(mockPeople[0]);

    expect(actual).toEqual(mockHomeWorld);
  })

  it('returns mockSpeciesName when getSpecies is called', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({name: 'human'})
    }))

    let actual = await getSpecies(mockPeople[0])

    expect(actual).toEqual(mockSpeciesName)

  })

  it('calls fetch with the right data when grabVehicles is called', () => {
    const vehicleURL = 'https://swapi.co/api/vehicles/'
    grabVehicles();

    expect(window.fetch).toHaveBeenCalledWith(vehicleURL);
  })

  it('returns mockVehicles when grabVehicles is called', async () => {
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

  it('returns mockPlanets when grabPlanets is called', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        count : 0,
        results: mockPlanets
      })
    }))
    let actual = await grabPlanets()

    expect(actual).toEqual(mockPlanets);
  })

  it('returns mockResidentNames when getResidents is called', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({name: 'Jules Verne'})
    }))
    let actual = await getResidents(mockPlanets[0])
    expect(actual).toEqual(mockResidentNames)
  })

})