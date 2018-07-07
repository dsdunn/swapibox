const mockScroll = "this is the crawl for a movie";
const mockPeople = [{name: "Joe"}];
const mockVehicles = [{class: "junk"}];
const mockPlanets = [{climate: "wasteland"}];

const grabScroll = jest.fn().mockImplementation(() => (
  Promise.resolve(mockScroll)
))

const grabPeople = jest.fn().mockImplementation(()=> (
  Promise.resolve(mockPeople)
))

const grabPlanets = jest.fn().mockImplementation(() => (
  Promise.resolve(mockPlanets)
))

const grabVehicles = jest.fn().mockImplementation(() => (
  Promise.resolve(mockVehicles)
))

export {grabScroll, grabPlanets, grabPeople, grabVehicles}
   
