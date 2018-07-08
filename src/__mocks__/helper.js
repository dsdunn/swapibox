const mockScroll = "this is the crawl for a movie";
const mockPeople = [{
  name: "Joe",
  planetName: 'Earth',
}];
const mockHomeWorld = {
  planetName: 'Earth',
  population: '7 billion'
}
const mockResidents = ['Billy', 'Bob', 'Butch']
const mockVehicles = [{class: "junk"}];
const mockPlanets = [{
  climate: "wasteland",
  terrain: "rocky",
  name: "Nowhereland",
  population: "1"
}];
const mockSpecies = 'human';

const grabScroll = jest.fn().mockImplementation(() => (
  Promise.resolve(mockScroll)
))

const grabPeople = jest.fn().mockImplementation(() => (
  Promise.resolve(mockPeople)
))

const grabPlanets = jest.fn().mockImplementation(() => (
  Promise.resolve(mockPlanets)
))

const grabVehicles = jest.fn().mockImplementation(() => (
  Promise.resolve(mockVehicles)
))

const getHomeWorld = jest.fn().mockImplementation(() => (
    Promise.resolve(mockHomeWorld)
  ))

const getResidents = jest.fn().mockImplementation(() => (
    Promise.resolve(mockResidents)
  ))

const getSpecies = jest.fn().mockImplementation(() => (
    Promise.resolve(mockSpecies)
  ))

export {grabScroll, grabPlanets, grabPeople, grabVehicles, getHomeWorld, getResidents, getSpecies}
   
