import React from 'react';
import ReactDOM from 'react-dom';
import email from '../imgs/email.png';
import cellphone from '../imgs/cellphoneicon.png';

class Contact extends React.Component{

formModel(){
  /*

  <div className="contactcontainer text-center pt-5 pb-5 justify-content-center"> 
    <div className="text-center titlesobre pb-4">CONTATO</div>
    <div class="formcontainer">
    <form>
  <div className="form-group">
    <label for="exampleInputEmail1">E-mail:</label>
    <input type="email" className="form-control inputcustom" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <small id="emailHelp" className="form-text text-muted"></small>
  </div>
  <div className="form-group">
    <label for="exampleInputSubject1">Assunto:</label>
    <input type="text" className="form-control inputcustom" id="exampleInputPassword1" />
  </div>
  <div className="form-group">
    <label>Mensagem:</label>
    <textarea className="form-control" rows="5" />
  </div>
  <button type="submit" className="btn btn-primary">Enviar</button>
  </form>
  </div>
  </div>

  */
}

render(){

return(

	<div className="contactcontainer text-center pt-5 pb-5 justify-content-center">	
    <div id="contatoid" className="text-center titlesobre pb-4">CONTATO</div>

   <div className="container">

      <div className="row justify-content-center"> 

  <div className="d-flex flex-column bd-highlight mb-3 border widthadjust">
    <div className="p-2 bd-highlight"><img className="contacticon" src={email} /></div>
    <div className="p-2 bd-highlight fontsizetitlecontact">E-mail:</div>
    <div className="p-2 bd-highlight fontsizecontentcontact">miltonferlimajunior@gmail.com</div>
  </div>

    <div className="pr-4"></div>

  <div className="d-flex flex-column bd-highlight mb-3 border widthadjust">
    <div className="p-2 bd-highlight"><img className="contacticon" src={cellphone} /></div>
    <div className="p-2 bd-highlight fontsizetitlecontact">Telefone:</div>
    <div className="p-2 bd-highlight fontsizecontentcontact">(13) 988483372</div>
  </div>

    </div>

  </div>

	</div>


	)

}

}

export default Contact;