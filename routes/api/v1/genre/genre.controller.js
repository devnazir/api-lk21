import api from "#config/api";
import getMovieData from "#utils/getMovieData";

export const movieByGenreName = async (req, res) => {
  const numPage = req.query.page || 1;

  const { genreName } = req.params;
  const movieByGenre = await api(`/genre/${genreName}/page/${numPage}`);
  const htmlCode = movieByGenre.data;

  const { result, totalPages } = getMovieData({ htmlCode });

  res.json({
    data: result,
    totalItems: result.length,
    totalPages,
    currentPage: Number(numPage),
  });
};
