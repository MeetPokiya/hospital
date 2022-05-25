
import './App.css';
import Header from './Component/Header';
import Home from './Container/Home';
import Footer from './Component/Footer';
import Departments from './Container/Departments';
import Doctor from './Container/Doctor';
import About from './Container/About';
import Contact from './Container/Contact';
import Auth from './Container/Auth';
import Appointment from './Container/Appointment';
import { Route ,Switch } from 'react-router-dom';
  

function App() {
  return (
    <>
    <Header/>
    <Switch>
      
      <Route exact path={"/"} component={Home}/>
      <Route exact path={"/Doctor"} component={Doctor}/>
      <Route exact path={"/Departments"} component={Departments}/>
      <Route exact path={"/Contact"} component={Contact}/>
      <Route exact path={"/Appointment"} component={Appointment}/>
      <Route exact path={"/About"} component={About}/>
      <Route exact path={"/Auth"} component={Auth}/>
       
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
