export default class DataCleaner {
  
  grabScroll = async () => {
    const random = Math.floor(Math.random() * 7);
    const url = "https://swapi.co/api/films"
    const films = await fetch(url);
    const results = await films.json();
    //console.log(results)
  }
}