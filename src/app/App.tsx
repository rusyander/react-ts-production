import React, { Suspense } from "react";
import "./styles/index.scss";
import { Link } from "react-router-dom";

import { classNames } from "../shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";

import { AppRouter } from "./providers/router/ui/AppRouter";

export default function App() {
  const { toggleTheme, theme } = useTheme();
  return (
    // <div className={`app ${theme}`}>
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Change theme</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>about</Link>

      <Suspense fallback={<div>Loading...</div>}>
        {/* <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes> */}
        <AppRouter />
      </Suspense>
    </div>
  );
}
