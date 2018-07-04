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


}

