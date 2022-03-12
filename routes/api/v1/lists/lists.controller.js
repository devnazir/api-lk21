import getListCategory from "#utils/getListCategory";

export const index = async (req, res) => {
  const { category } = req.params;
  const categoriesResult = await getListCategory(category);

  res.json({ data: categoriesResult, totalCategory: categoriesResult.length });
};
