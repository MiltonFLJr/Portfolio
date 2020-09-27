import React from 'react';
import ReactDOM from 'react-dom';
import icon1 from '../imgs/linkedinicon.png';
import icon2 from '../imgs/githubicon.png';
import icon3 from '../imgs/twittericon.png';

class Bottom extends React.Component{

render(){


return(

<div className="pt-4 pb-4 containerbottom text-center text-white">
	<bottom className="bottomcustomstyle blackbackground">

		<div className="d-flex justify-content-center">
			<div className="pr-3"><a href="https://www.linkedin.com/in/milton-lima-341047152/"><img className="iconsstyle" src={icon1} /></a></div>
			<div className="pr-3"><a href="https://github.com/MiltonFLJr"><img className="iconsstyle" src={icon2} /></a></div>
			<div className="pb-4"><a href="https://twitter.com/MiltonL06524966"><img className="iconsstyle" src={icon3} /></a></div>
		</div>


		<div>MILTON LIMA ©2020!</div>

	</bottom>
	</div>
	
	)

}

}

export default Bottom;