import { Route, BrowserRouter } from "react-router-dom";

import Home from "../../App.jsx";
import Login from "../../Components/Auth/LoginPage.jsx";


const Routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route component={Home} path="/" exact />
                <Route component={Login} path="/login" />
            </Routes>
        </BrowserRouter>
    )
}

export default Routes;