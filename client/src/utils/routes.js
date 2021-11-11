import Categories from "../pages/Categories";
import Channels from "../pages/Channels";
import ShowCategories from "../pages/Categories/ShowCategories";
const routes = [
  {
    path: "/categories",
    component: <Categories />,
    isPrivate: true,
  },
  {
    path: "/categorie/:slug",
    component: <ShowCategories />,
    isPrivate: true,
  },
  {
    path: "/channels",
    component: <Channels />,
    isPrivate: true,
  },
];

export default routes;
