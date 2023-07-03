import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingContainer from "./components/LandingContainer/LandingContainer";
import QuizContainer from "./components/QuizContainer/QuizContainer";
import SubmitFormComponent from "./components/SubmitFormComponent/SubmitFormComponent";
import { ROUTE_NAMES } from "./config/Constants";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: ROUTE_NAMES.HOME_ROUTE,
        element: <LandingContainer />,
      },
      {
        path: ROUTE_NAMES.HOME_ROUTE,
        element: <LandingContainer />,
        children: [
          {
            path: ROUTE_NAMES.QUIZ_ROUTE,
            element: <QuizContainer />,
          },
        ],
      },
      {
        path: ROUTE_NAMES.SUBMIT_FORM_ROUTE,
        element: <SubmitFormComponent />
      }
      //   {
      //     path: ROUTE_NAMES.QUIZ_ROUTE,
      //     element: <QuizContainer />,
      //   },
    ],
  },
]);

export default AppRouter;
