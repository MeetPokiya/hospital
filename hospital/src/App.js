

import { Route, Switch } from 'react-router-dom';
import Header from './Component/Header';
import Home from './Container/Home';
import Footer from './Component/Footer';
import Departments from './Container/Departments';
import Doctor from './Container/Doctor';
import About from './Container/About';
import Contact from './Container/Contact';
import Auth from './Container/Auth';
import Appointment from './Container/Appointment';
import Medition from './Container/Medition';
import PublicRoute from './Route/PublicRoute';
import PrivateRoute from './Route/PrivateRoute';




function App() {
  return (
    <>
      <Header />
      <Switch>

        <PublicRoute exact path={"/"} component={Home} />
        <PublicRoute exact path={"/Doctor"} component={Doctor} />
        <PublicRoute exact path={"/Departments"} component={Departments} />
        <PrivateRoute exact path={"/Medition"} component={Medition} />
        <PublicRoute exact path={"/Contact"} component={Contact} />
        <PrivateRoute exact path={"/Appointment"} component={Appointment} />
        <PublicRoute exact path={"/About"} component={About} />
        <PublicRoute restricted={true} exact path={"/Auth"} component={Auth} />

      </Switch>
      <Footer />
    </>
  );
}

export default App;
