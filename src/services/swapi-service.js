export default class SwapiService {
  _apiBase = "https://swapi.dev/api";

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      // eslint-disable-next-line no-useless-concat
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }

    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResource(`/people/${id}/`);
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results;
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}/`);
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results;
  }

  getStraship(id) {
    return this.getResource(`/starships/${id}/`);
  }
}

const swapiPlanet = new SwapiService();
swapiPlanet.getAllPlanets().then((planets) => {
  planets.forEach((p) => {
    console.log(p.name);
  });
  console.log("-------AllPlanets-------");
});

const swapi = new SwapiService();
swapi.getPerson(3).then((p) => {
  console.log(p.name);
  console.log("-------OneName-------");
});

const planet = new SwapiService();
planet.getPlanet(8).then((p) => {
  console.log(p.name);
  console.log("-------OnePlanets-------");
});

const allShips = new SwapiService();
allShips.getAllStarships().then((ships) => {
  ships.forEach((s) => {
    console.log(s.name);
  });
  console.log("-------Ships-------");
});
