import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { ROUTE_NAMES } from "./config/constants";

const AppRouter = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children: [
            
        ]
    }
]);

export default AppRouter;