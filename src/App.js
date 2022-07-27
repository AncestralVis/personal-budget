import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './style/Global';
// import { AppProvider } from './Context/AppContext';
// import Menu from './Components/navbar/Menu';
import Navbar from './Components/navbar/Navbar';
import Home from './Components/navbar/Home';
import PersonalBudget from './Components/navbar/PersonalBudget';
import About from './Components/navbar/About';
import Privacy from './Components/navbar/Privacy';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {
    
    return (
      <Router>
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyle />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/PersonalBudget" element={<PersonalBudget />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Privacy" element={<Privacy />}/>
        </Routes>
      </Router>
    )
  }
}

export default App;