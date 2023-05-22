import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Order from "../components/Order";
import Table from "../components/Table";

const routes = createBrowserRouter([
    
      
            {
                path: "/",
                element: <Order/>
            },
            {
                path:'items',
                element:<Table/>
            }
            
        
    
])

export default routes;