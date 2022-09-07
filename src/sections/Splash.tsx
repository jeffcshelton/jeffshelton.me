import * as React from "react";

import jeffPhoto from "../../res/jeff.jpg";
import resume from "../../res/resume.pdf";

const Splash: React.FC = () => {
	return (
		<section className="row vh-100">
			<div className="col d-flex justify-content-center align-items-center">
				<img src={jeffPhoto} className="shadow rounded" />
			</div>
			<div className="col d-flex flex-column flex-nowrap">
				<nav className="d-flex justify-content-evenly align-items-center mt-4">
					<a className="text-dark fw-bold text-decoration-none hover-underline" href="#about">About</a>
					<a className="text-dark fw-bold text-decoration-none hover-underline" href="#skills">Skills</a>
					<a className="text-dark fw-bold text-decoration-none hover-underline" href="#experience">Experience</a>
					<a className="btn btn-primary text-light fw-bold shadow" href={resume}>Resume</a>
				</nav>
				<div className="d-flex align-items-center flex-grow-1">
					<div>
						<h1 className="fw-light">Hi, I'm <span className="text-dark fw-bold">Jeff Shelton</span>.</h1>
						<h2 className="fw-light">I make <span className="text-primary fw-bolder"><strong>software</strong></span>.</h2>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Splash;
