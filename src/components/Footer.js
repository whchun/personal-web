import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<div class="footerLink">
				<div class="fa-3x">
					<a href="https://www.linkedin.com/in/wendyhchun" target="_blank"><i class="fab fa-linkedin-in"></i></a>
					<a href="https://github.com/whchun" target="_blank"><i class="fab fa-github"></i></a>
				</div>

				<div>
					<i class="fab fa-react fa-spin fa-2x"></i>
					<p>Developed in React</p>
					 &#169; {(new Date().getFullYear())} Wendy H. Chun
				</div>
			</div>
		);
	}
}

export default Footer;