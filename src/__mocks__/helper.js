const mockScroll = "this is the crawl for a movie";
const mockPeople = [{}, {}];
const mockVehicles = [{}, {}];
const mockPlanets = [{}, {}];

const grabScroll = jest.fn().mockImplementation(()=> {
  Promise.resolve(mockScroll)
})

const getPeople = jest.fn().mockImplementation(()=> {
  Promise.resolve(mockPeople)
})

const getPlanets = jest.fn().mockImplementation(() => {
  Promise.resolve(mockPlanets)
})
const getVehicles = jest.fn().mockImplementation(() => {
  Promise.resolve(mockVehicles)
})

export {grabScroll, getPlanets, getPeople, getVehicles}
  // , getSpecies, getHomeWorld, getResidents 
