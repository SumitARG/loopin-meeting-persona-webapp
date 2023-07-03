import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./App.scss";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import LandingPageComponent from "./components/LandingPageComponent/LandingPageComponent";
// import QuizContainer from "./components/QuizContainer/QuizContainer";
import { LOCAL_STORAGE, ROUTE_NAMES } from "./config/Constants";

function App() {
  const navigate = useNavigate();
  // const location = useLocation();

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE.ANSWERS_STORAGE,
      JSON.stringify({ 1: "", 2: "", 3: "", 4: "", 5: "", 6: "" })
    );
    // if (location.pathname === "/") {
      navigate(`/${ROUTE_NAMES.HOME_ROUTE}`);
    // }
  }, []);

  return (
    <div className="App">
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
}

export default App;
