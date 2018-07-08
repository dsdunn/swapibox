
const grabScroll = async () => {
    try {
      const url = "https://swapi.co/api/films"
      const films = await fetch(url);
      const response = await films.json();
      const count = response.count;
      const random = Math.floor(Math.random() * count);
      const crawl = response.results[random].opening_crawl;
      const filmTitle = response.results[random].title;
      const date = response.results[random].release_date;
      const filmInfo = {crawl, filmTitle, date};
      
      return filmInfo;
    } catch(error) {
      return error.message;
    }
  }

const grabPeople = async () => {
    try {  
      const url = 'https://swapi.co/api/people';
      const response = await fetch(url);
      const peopleObj = await response.json();
      return peopleObj.results;
    } catch(error) {
      return error.message
    }
  }

const getHomeWorld = async (person) => {
    const response = await fetch(person.homeworld);
    const worldObj = await response.json();
    const planetName = worldObj.name;
    const population = worldObj.population;
    return ({planetName, population});
  }

const getSpecies = async (person) => {
    const response = await fetch(person.species[0]);
    const speciesObj = await response.json();
    const speciesName = speciesObj.name;
    return speciesName;
  }

const grabVehicles = async () => {
    try {
      const url = 'https://swapi.co/api/vehicles/';
      const response = await fetch(url);
      const vehicleObj = await response.json();
      const vehicles = vehicleObj.results;
      const vehicleList = vehicles.map( async (vehicle) => {
        const {name, model, vehicle_class, passengers} = await vehicle;
        return ({
          name,
          model,
          vehicle_class,
          passengers
        })
      })
      return Promise.all(vehicleList);
    } catch(error) {
      return error.message
    }
  }

const grabPlanets = async () => {
    try {
      const url = 'https://swapi.co/api/planets';
      const response = await fetch(url);
      const planetObj = await response.json();
      return planetObj.results;
    } catch(error) {
      return error.message;
    }
  }

const getResidents = async (planet) => {
    const residentNames = planet.residents.map(async residentLink => {
      const response = await fetch(residentLink);
      const residentObj = await response.json();
      const residentName = residentObj.name;
      return residentName;
    })
    return Promise.all(residentNames);
  } 



export {getResidents, grabPlanets, grabPeople, grabVehicles, getSpecies, getHomeWorld, grabScroll}

