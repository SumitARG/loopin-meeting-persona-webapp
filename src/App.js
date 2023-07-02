import { useEffect } from "react";
import "./App.scss";
// import FooterComponent from "./components/FooterComponent/FooterComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import LandingPageComponent from "./components/LandingPageComponent/LandingPageComponent";
import QuizContainer from "./components/QuizContainer/QuizContainer";
import { LOCAL_STORAGE } from "./config/Constants";

function App() {
  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE.ANSWERS_STORAGE,
      JSON.stringify({ 1: "", 2: "", 3: "", 4: "", 5: "", 6: "" })
    );
  });

  return (
    <div className="App">
      <HeaderComponent />
      <LandingPageComponent />
      <QuizContainer />
      {/* <FooterComponent/> */}
    </div>
  );
}

export default App;
