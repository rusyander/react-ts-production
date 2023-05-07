import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};
