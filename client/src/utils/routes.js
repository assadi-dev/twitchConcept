import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Channels from "../pages/Channels";
const routes = [
  {
    path: "/",
    component: Home,
    isPrivate: true,
    exact: true,
  },
  {
    path: "/categories",
    component: Categories,
    isPrivate: true,
  },
  {
    path: "/channels",
    component: Channels,
    isPrivate: true,
  },
];

export default routes;
