import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./App.scss";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
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
      navigate(`/${ROUTE_NAMES.HOME_ROUTE}`);
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App" id="mainApp">
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
}

export default App;
