import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Navbarsite from './components/nav.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import Portfolio from './components/portfolio.js';
import Bottom from './components/bottom.js';

class Home extends React.Component{

	render(){

		return(

        <div>

			 { /* NAV */ }

        <Navbarsite />

			 { /* END - NAV */}

			 {/* ABOUT */}

  			<About />

  			{/* END - ABOUT*/}

  			{/*	PORTFOLIO */}

			   <Portfolio />

  			{/* PORTFOLIO - END */}

  			{/*	CONTACT */}

			   <Contact />

  			{/* CONTACT - END */}

  			{/* BOTTOM */}

  			<Bottom />

  			{/* BOTTOM - END */}

        </div>

  );

}

}

export default Home;

ReactDOM.render(<Home />,document.getElementById('root'));