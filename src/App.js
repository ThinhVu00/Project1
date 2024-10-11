import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Orderpage from "./pages/Orderpage/Orderpage";
import Librabrypage from "./pages/Librabry/Librabrypage";
import Contactpage from "./pages/Contactpage/Contactpage";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import { routes } from "./routes";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import BookDetailPage from "./pages/BookDetailPage/BookDetailPage";
import ReaderPage from "./pages/ReaderPage/ReaderPage";

function App() {
  // Sử dụng useLocation từ react-router-dom để lấy thông tin đường dẫn hiện tại
  const location = window.location.pathname;

  // Tìm route hiện tại từ mảng routes
  const currentRoute = routes.find((route) => route.path === location);

  return (
    <div>
      <Router>
        {currentRoute && currentRoute.isShowHeader && <HeaderComponent />}

        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            return (
              <Route key={route.path} path={route.path} element={<Page />} />
            );
          })}
          <Route path="/order" element={<Orderpage />} />
          <Route path="/librabry" element={<Librabrypage />} />
          <Route path="/Contact" element={<Contactpage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/bookdetail" element={<BookDetailPage />} />
          <Route path="/readerpage" element={<ReaderPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
