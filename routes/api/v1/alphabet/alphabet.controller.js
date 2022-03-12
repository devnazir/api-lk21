import api from "#config/api";
import getMovieData from "#utils/getMovieData";
import getIndexMovie from "#utils/getIndexMovie";

export const index = async (req, res) => {
  const numPage = req.query.page || 1;
  const { alphabet } = req.params;
  const releasePage = await api(`/index/${alphabet}/page/${numPage}`);
  const htmlCode = releasePage.data;

  const { result, totalPages } = getMovieData({ htmlCode });

  res.json({
    data: result,
    totalItems: result.length,
    totalPages,
    currentPage: Number(numPage),
  });
};

export const getListAlphabets = async (req, res) => {
  const listAlphabets = await getIndexMovie();
  res.json({ data: listAlphabets, totalCategory: listAlphabets.length });
};
