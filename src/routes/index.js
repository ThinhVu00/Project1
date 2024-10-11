import Homepage from "../pages/Homepage/Homepage";
import Librabrypage from "../pages/Librabry/Librabrypage";
import Orderpage from "../pages/Orderpage/Orderpage";
import TypeBookPage from "../pages/TypeBookPage/TypeBookPage";

export const routes = [
  {
    path: "/",
    page: Homepage,
    isShowHeader: true,
  },
  {
    path: "/order",
    page: Orderpage,
    isShowHeader: true,
  },

  {
    path: "/:type",
    page: TypeBookPage,
    isShowHeader: true,
  },
  {
    path: "/Libraby",
    page: Librabrypage,
    isShowHeader: true,
  },
];
