import jsdom from "jsdom";
import { baseURL } from "#config/api";

const { JSDOM } = jsdom;

const getMovieData = ({ htmlCode }) => {
  const { window } = new JSDOM(htmlCode);

  const movieCards = window.document.querySelectorAll("article.mega-item");
  const totalPages = Number(
    window.document.querySelector("#pagination span").textContent.split(" ")[3]
  );

  let result = [];

  movieCards.forEach((movie) => {
    const poster = movie
      .querySelector(".grid-poster a img")
      .getAttribute("src");
    const rating = movie.querySelector(".grid-meta .rating").textContent;
    const quality = movie.querySelector(".grid-meta .quality").textContent;
    const categories = [...movie.querySelectorAll(".grid-categories a")]
      .map((category) => category.textContent)
      .join(",");
    const options = JSON.parse(
      movie.querySelector("script[type='application/ld+json']").textContent
    );
    const downloadLink = `https://t21.press/download${options.url
      .split(baseURL)
      .join("")}`;

    result.push({ poster, rating, quality, categories, downloadLink, options });
  });

  return { result, totalPages };
};

export default getMovieData;
