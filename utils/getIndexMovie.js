import jsdom from "jsdom";
import api from "#config/api";

const { JSDOM } = jsdom;

const getIndexMovie = async () => {
  const indexMoviePage = await api("/index-movie");
  const htmlCode = indexMoviePage.data;

  const { window } = new JSDOM(htmlCode);

  const indexMovies = [
    ...window.document.querySelectorAll(`ul.pagination .cat-item a`),
  ];

  return indexMovies.map((category) => category.textContent);
};

export default getIndexMovie;
