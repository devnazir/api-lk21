import api from "#config/api";
import getMovieData from "#utils/getMovieData";

export const index = async (req, res) => {
  const numPage = req.query.page || 1;
  const imdbRatingPage = await api(`/rating/page/${numPage}`);
  const htmlCode = imdbRatingPage.data;

  const { result, totalPages } = getMovieData({ htmlCode });

  res.json({
    data: result,
    totalItems: result.length,
    totalPages,
    currentPage: Number(numPage),
  });
};
