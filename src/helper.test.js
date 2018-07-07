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

const mockScroll = "this is the crawl for a movie";
let url = "https://swapi.co/api/films";
let url2 = "https://swapi.co/api/planets/1/";
const mockFilmInfo = {
  filmTitle: "Cowabunga",
  date: "1977-05-25",
  crawl: mockScroll
}

window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
  json: () => Promise.resolve({
    count : 0,
    results: [{title: "Cowabunga",
              release_date: "1977-05-25",
              opening_crawl: mockScroll}]
  })
}))

describe('helper', () => {

  it('calls fetch with the right data when grabScroll is called', () => {
    grabScroll();

    expect(window.fetch).toHaveBeenCalledWith(url);
  })

  it('returns mockScroll when grabScroll is called', async () => {
    const actual = await grabScroll();
    expect(actual).toEqual(mockFilmInfo);
  })

  it('calls fetch with the right data when grabPeople is called', () => {

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        count : 0,
        results: [{name: "Chucky",
                  homeworld: url2,
                  species: ['bullhockey']}]
      })
    }))

    url = 'https://swapi.co/api/people';

    grabPeople();

    expect(window.fetch).toHaveBeenCalledWith(url);

  })

  it('calls getHomeWorld when grabPeople is called', async () => {
    const getHomeWorld = jest.fn().mockImplementation(() => {
      Promise.resolve({
        json: () => Promise.resolve({
          planetName: "Bumfuck",
          population: "1"
        })
      })
    })
    await grabPeople();

    expect(getHomeWorld).toHaveBeenCalled();
  })




})