const Resources = [
  { id: 1, movie: "The Matrix", year: 1999 },
  { id: 2, movie: "The Godfather", year: 1972 },
  { id: 3, movie: "The Dark Knight", year: 2008 },
  { id: 4, movie: "Toy Story", year: 1995 },
];

module.exports = {
  getResources: () => {
    return Resources;
  },

  getResourceByID: (id) => {
    const resource = Resources.find((c) => c.id === parseInt(id));
    if (!resource) {
      return "The resource with the given ID was not found."; //404
    } else {
      return resource;
    }
  },

  updateResource: (id, data) => {
    const resource = Resources.find((c) => c.id === parseInt(id));
    if (!resource) {
      return "The resource with the given ID was not found."; //404
    } else {
      resource.movie = data.movie;
      resource.year = data.year;
      return resource;
    }
  },
  deleteResource: (id) => {
    const resource = Resources.find((c) => c.id === parseInt(id));
    if (!resource) {
      return "The resource with the given ID was not found."; //404
    } else {
      const index = Resources.indexOf(resource);
      Resources.splice(index, 1);
      return resource;
    }
  },
  addResource: (data) => {
    const resource = {
      id: Resources.length + 1,
      movie: data.movie,
      year: data.year,
    };
    Resources.push(resource);
    return resource;
  },
};
