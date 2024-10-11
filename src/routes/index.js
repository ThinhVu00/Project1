import Homepage from "../pages/Homepage/Homepage";
import Librabrypage from "../pages/Librabry/Librabrypage";
import TypeBookPage from "../pages/TypeBookPage/TypeBookPage";
import Orderpage from "../pages/Orderpage/Orderpage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

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
    path: "/type",
    page: TypeBookPage,
    isShowHeader: true,
  },
  {
    path: "/librabry",
    page: Librabrypage,
    isShowHeader: false,
  },
  {
    path: "/sign-in",
    page: SignInPage,
    isShowHeader: false,
  },
  {
    path: "/sign-up",
    page: SignUpPage,
    isShowHeader: false,
  },
];
