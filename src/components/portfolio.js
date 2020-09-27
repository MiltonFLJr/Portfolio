import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import manageland from '../imgs/manage-preview.jpg';
import fyloland from '../imgs/fylo-preview.jpg';
import easybankland from '../imgs/easybank-preview.jpg';
import jokenpogame from '../imgs/rockpaperscissor-preview.jpg';
import weatherinfo from '../imgs/WeatherInfo.png';

class Portfolio extends React.Component{

render(){

return(

	<div className="containerportfolio blackbackground">


{/* MODAL PARA A MANAGE LANDING PAGE- INICIO */}

<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Manage Landing Page</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      	<div className="pb-3">
      		Este é um desafio proposto pelo <a href="https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5">Frontend Mentor</a>, onde o objetivo <br />
      		é criar um template o mais fiel possível ao modelo proposto pelo site. <br />
      		Fiz esse template usando HTML, CSS e Javascript.
      	</div>
        <img src={manageland} className="img-fluid thumbsstyle" /> 
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary buttonmodalstyle" data-dismiss="modal">Close</button>
        <a className="buttonvisualizar buttonmodalstyle" href="https://miltonfljr.github.io/Manage-landing-page/" target="_blank">
        <button type="button" className="btn btn-primary buttonmodalstyle">
        	Visualizar
        </button>
        </a>
      </div>
    </div>
  </div>
</div>

{/* MODAL PARA A MANAGE LANDING PAGE- FIM */}

{/* MODAL PARA A FYLO LANDING PAGE- INICIO */}

<div className="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Fylo Landing Page</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      	<div className="pb-3">
      		Este é um desafio proposto pelo <a href="https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd">Frontend Mentor</a>, onde o objetivo <br />
      		é criar um template o mais fiel possível ao modelo proposto pelo site. <br />
      		Fiz esse template usando HTML, CSS, Javascript e Bootstrap.
      	</div>
        <img src={fyloland} className="img-fluid thumbsstyle" />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary buttonmodalstyle" data-dismiss="modal">Close</button>
        <a className="buttonvisualizar buttonmodalstyle" href="https://miltonfljr.github.io/Fylo-dark-theme-landing-page/" target="_blank">
        <button type="button" className="btn btn-primary buttonmodalstyle">
        	Visualizar
        </button>
        </a>
      </div>
    </div>
  </div>
</div>

{/* MODAL PARA A MANAGE LANDING PAGE- FIM */}

{/* MODAL PARA A EASYBANK LANDING PAGE- INICIO */}

<div className="modal fade" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Easybank Landing Page</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      	<div className="pb-3">
      		Este é um desafio proposto pelo <a href="https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5">Frontend Mentor</a>, onde o objetivo <br />
      		é criar um template o mais fiel possível ao modelo proposto pelo site. <br />
      		Fiz esse template usando HTML, CSS, Javascript e Bootstrap.
      	</div>
        <img src={easybankland} className="img-fluid thumbsstyle" />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary buttonmodalstyle" data-dismiss="modal">Close</button>
        <a className="buttonvisualizar buttonmodalstyle" href="https://miltonfljr.github.io/Easybank-landing-page/" target="_blank" >
        <button type="button" className="btn btn-primary buttonmodalstyle">
        	Visualizar
        </button>
        </a>
      </div>
    </div>
  </div>
</div>

{/* MODAL PARA A EASYBANK LANDING PAGE- FIM */}

{/*  Rock, Paper and Scissors Game - INICIO */}

<div className="modal fade" id="exampleModal4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Rock, Paper and Scissors Game</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      	<div className="pb-3">
      		Este é um desafio proposto pelo <a href="https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5">Frontend Mentor</a>, onde o objetivo <br />
      		é criar um template o mais fiel possível ao modelo proposto pelo site. <br />
      		Jogo feito em HTML, CSS e Javascript.
      	</div>
        <img src={jokenpogame} className="img-fluid thumbsstyle"/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary buttonmodalstyle" data-dismiss="modal">Close</button>
        <a className="buttonvisualizar buttonmodalstyle" href="https://miltonfljr.github.io/Rock-Paper-Scissors-game/" target="_blank" >
        <button type="button" className="btn btn-primary buttonmodalstyle">
        	Visualizar
        </button>
        </a>
      </div>
    </div>
  </div>
</div>

{/* Rock, Paper and Scissors Game - FIM */}

{/*  Weather Info - INICIO */}

<div className="modal fade" id="exampleModal5" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">WeatherInfo</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      	<div className="pb-3">
      		Este é um aplicativo simples com o objetivo de informar as condições temporais da cidade
      		onde o usuário reside. <br /> Os dados são extraidos da <a href="https://openweathermap.org/"> OpenWeatherMap API</a>, o aplicativo <br /> 
      		foi feito usando HTML, CSS, Javascript e React.
      	</div>
        <img src={weatherinfo} className="img-fluid thumbsstyle" data-target="#exampleModal5" data-toggle="modal"/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary buttonmodalstyle" data-dismiss="modal">Close</button>
        <a className="buttonvisualizar buttonmodalstyle" href="http://weatherinfo.infinityfreeapp.com/?i=1" target="_blank" >
        <button type="button" className="btn btn-primary buttonmodalstyle">
        	Visualizar
        </button>
        </a>
      </div>
    </div>
  </div>
</div>

{/* Weather Info - FIM */}

	<div className="container pt-5 pb-5 colorfontwhite blackbackground">

	<div id="portfoliotitle" className="text-center titlesobre pb-4 posrelative">PORTFOLIO</div>

		<div className="row text-center">
		
			<div className="col-lg-4 col-md-12 col-sm-12 thumbspacing">
				<img src={manageland} className="img-fluid thumbsstyle" data-target="#exampleModal" data-toggle="modal" />
			</div>

			<div className="col-lg-4 col-md-12 col-sm-12 thumbspacing">
				<img src={fyloland} className="img-fluid thumbsstyle" data-target="#exampleModal2" data-toggle="modal"/>
			</div>

			<div className="col-lg-4 col-md-12 col-sm-12">
				<img src={easybankland} className="img-fluid thumbsstyle" data-target="#exampleModal3" data-toggle="modal" />
			</div>

		</div>

		<div className="row text-center pt-4 justify-content-center">	

			<div className="col-lg-6 col-md-12 col-sm-12 thumbspacing">
				<img src={jokenpogame} className="img-fluid thumbsstyle" data-target="#exampleModal4" data-toggle="modal"/>
			</div>

			<div className="col-lg-6 col-md-12 col-sm-12">
				<img src={weatherinfo} className="img-fluid thumbsstyle" data-target="#exampleModal5" data-toggle="modal"/>
			</div>

		</div>

	</div>

	</div>

	)

}

}

export default Portfolio;