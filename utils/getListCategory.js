import jsdom from "jsdom";
import api from "#config/api";

const { JSDOM } = jsdom;

const getListCategory = async (categoryName) => {
  const homePage = await api("/");
  const htmlCode = homePage.data;

  const { window } = new JSDOM(htmlCode);
  const categories = [
    ...window.document.querySelectorAll(
      `ul.navbar-nav .dropdown-menu a[href*="${categoryName}"]`
    ),
  ];

  return categories.map((category) => category.textContent);
};

export default getListCategory;
