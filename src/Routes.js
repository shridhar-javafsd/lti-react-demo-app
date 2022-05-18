import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

import EmployeeData from './components/EmployeeData';

const Routes = () => {

    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <div style={{minHeight: '82vh'}} >
                        <Switch>
                            <Route path="/home"> <Home/> </Route>
                            <Route path="/emp"> <EmployeeData/> </Route>
                            <Route path="/login"> <Login/> </Route>
                            <Route path="/register"> <Register/> </Route>
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Routes;





// const Routes = () => {

//     return (
//         <div>
//             <p>Routes component</p>
//         </div>
//     );

// }

// export default Routes;