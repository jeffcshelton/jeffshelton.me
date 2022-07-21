import * as React from "react";

import Button from "../../components/Button/Button";
import Link from "../../components/Link/Link";
import jeffPhoto from "./jeff.jpg";
import "./Splash.less";

const Splash: React.FC = () => {
	return (
		<main className="Splash">
			<section id="welcome">
				<div className="left-container">
					<img src={jeffPhoto} />
				</div>
				<div className="right-container">
					<nav>
						<Link>About</Link>
						<Link>Skills</Link>
						<Link>Experience</Link>
						<Button lifted>Resume</Button>
					</nav>
					<div id="name-container">
						<div id="name-description">
							<h1>Hi, I'm <strong>Jeff Shelton</strong>.</h1>
							<h2>I make <span className="theme-blue"><strong>software</strong></span>.</h2>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Splash;
