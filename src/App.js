import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Histoire from './components/Histoire';
import Afrique from './components/Afrique';
import Contact from './components/Contact';



function App() {
  return (
    <>
      <Router>
          <Navbar />
             <Switch>
                 <Route path='/' exact component={Home}  />
                 <Route path='/Histoire' exact component={Histoire} />
                 <Route path='/Contact' exact component={Contact} />
                 <Route path='/Afrique' exact component={Afrique} />
             
             </Switch>
             <Footer />
      </Router>

    </>
  );
}

export default App;
