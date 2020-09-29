import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import avatar from '../imgs/avatar.png'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import phpicon from '../imgs/phplogo.svg';
import laravelicon from '../imgs/laravel.png';
import css3icon from '../imgs/css3.png';
import html5 from '../imgs/html5.png';
import jqueryicon from '../imgs/jquery.png';
import javascript from '../imgs/javascript.png';
import reacticon from '../imgs/react.png';
import mysqlicon from '../imgs/mysql.png';
import bootstrapicon from '../imgs/bootstrap.png';
class About extends React.Component{

componentDidMount(){
/*
	$(document).ready(
	$("#buttonmodal").on("click",function(){
	$("#exampleModal").show();
	})	
	);
*/
}

render(){

return(

	<div className="sobrecontainer pt-5 pb-5">

		<div id="sobrecontainerid" className="titlesobre pb-4 text-center posrelative">	
			SOBRE 
		</div>

		<img src={avatar} className="avatarstyle pb-4" />

	<div className="sobre text-center textcustomstyle posrelative">
		<p>Bem-vindo!</p>
		<p> Meu é Milton Lima, sou um Desenvolvedor Front End com formação <br /> 
    em Análise e Desenvolvimento de Sistemas pela Faculdade de <br /> 
    Tecnologia de Praia Grande, onde ocorreu o meu primeiro <br/> 
    contato com a programação. O meu primeiro emprego foi como <br /> 
    estagiário faculdade, minha função era criar funções pro site <br /> 
    principal usando o framework PHP Laravel. </p> <p> Logo após terminar a faculdade trabalhei como desenvolvedor júnior em em uma <br />
    empresa de médio porte – lidando com desenvolvimento Back-End(PHP,Laravel,MYSQL) 
    <br /> e Front-end(HTML5,CSS,Javascript,Bootstrap e jQuery). 
    Possuo 1 ano <br /> de experiência como profissional na área de tecnologia e abaixo <br /> deixo listado as tecnologias que possuo conhecimento e que costumo usar em meus projetos. </p>

		<div id="carouselExampleControls" className="carousel slide pt-5" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      	{/* LOGOS PT1 */}
      		<div className="container">
      			<div className="row">

      				<div className="col-lg-3 col-md-6 col-sm-12  pb-4">
      					<img className="icontech" src={phpicon} />
      				</div>


      				<div className="col-lg-3 col-md-6 col-sm-12  pb-4">
      					<img className="icontech" src={laravelicon} />
      				</div>

      				<div className="col-lg-3 col-md-6 col-sm-12 pb-4">
      					<img className="icontech" src={css3icon} />
      				</div>

      				<div className="col-lg-3 col-md-6 col-sm-12 pb-4">
      					<img className="icontech" src={html5} />
      				</div>

      			</div>
      		</div>
 		{/* LOGOS PT1 - FIM */}
    </div>
    <div className="carousel-item">

       	{/* LOGOS PT2 */}
      		<div className="container">
      			<div className="row">

      				<div className="col-lg-3 col-md-6 col-sm-12 pb-4">
      					<img className="icontech" src={jqueryicon} />
      				</div>


      				<div className="col-lg-3 col-md-6 col-sm-12 pb-4">
      					<img className="icontech" src={javascript} />
      				</div>

      				<div className="col-lg-3 col-md-6 col-sm-12 pb-4">
      					<img className="icontech" src={reacticon} />
      				</div>

      				<div className="col-lg-3 col-md-6 col-sm-12 pb-4">
      					<img className="icontech" src={mysqlicon} />
      				</div>

      			</div>
      		</div>
 		{/* LOGOS PT2 - FIM */}

    </div>
    <div className="carousel-item">
      {/* LOGOS PT3 */}
      	<div className="col-lg-12 col-md-12 col-sm-12 pb-4">
      					<img className="icontech" src={bootstrapicon} />
      				</div>
       {/* LOGOS PT3 - FIM */}
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
	</div>

	</div>

	)

}

}

export default About;