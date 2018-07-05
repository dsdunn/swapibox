export default class DataCleaner {
  
  grabScroll = async () => {
    const url = "https://swapi.co/api/films"
    const films = await fetch(url);
    const response = await films.json();
    const count = await response.count;
    const random = Math.floor(Math.random() * count);
    const crawl = await response.results[random].opening_crawl
    return crawl;
  } 

  getPeople = async () => {
    const url = 'https://swapi.co/api/people';
    const response = await fetch(url);
    const peopleObj = await response.json();
    const people = await peopleObj.results;
    const peopleList = people.map( async (person) => {
      const name = await person.name;
      const { planetName, population } = await this.getHomeWorld(person);
      const species = await this.getSpecies(person);
      return ({
        name,
        planetName,
        population,
        species
      })
    })
    return Promise.all(peopleList);
  }

  getHomeWorld = async (person) => {
    const response = await fetch(person.homeworld);
    const worldObj = await response.json();
    const planetName = await worldObj.name;
    const population = await worldObj.population;
    return ({planetName, population});
  }

  getSpecies = async (person) => {
    const response = await fetch(person.species[0]);
    const speciesObj = await response.json();
    const speciesName = await speciesObj.name;
    return speciesName;
  }

  getVehicles = async () => {
    const url = 'https://swapi.co/api/vehicles/';
    const response = await fetch(url);
    const vehicleObj = await response.json();
    const vehicles = await vehicleObj.results;
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
  }

  getPlanets = async () => {
    const url = 'https://swapi.co/api/planets';
    const response = await fetch(url);
    const planetObj = await response.json();
    const planets = await planetObj.results;
    const planetList = planets.map( async (planet) => {
      const {name, terrain, population, climate} = await planet;
      const residents = await this.getResidents(planet);
      return ({
        name,
        terrain,
        population,
        climate,
        residents
      })
    })
    return Promise.all(planetList)
  }

  getResidents = async (planet) => {
    const residentNames = planet.residents.map(async residentLink => {
      const response = await fetch(residentLink);
      const residentObj = await response.json();
      const residentName = await residentObj.name;
      return residentName;
    })
    return Promise.all(residentNames);
  } 

}

