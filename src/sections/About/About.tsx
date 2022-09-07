import Collage from "../../components/Collage/Collage";
import * as React from "react";
import "./About.less";

import graduationPhoto from "../../../res/graduation.jpg";
import seniorPhoto from "../../../res/senior.jpg";
import beachPhoto from "../../../res/beach.jpg";
import suitPhoto from "../../../res/suit.jpg";
import promPhoto from "../../../res/prom.jpg";

const About: React.FC = () => {
	return (
		<section className="About">
			<div className="left-container">
					<h1><strong><span className="theme-red">&lt;</span>About Me<span className="theme-red">&gt;</span></strong></h1>
				<p>
					My name is <strong>Jeff Shelton</strong>. I'm a software developer, designer, aspiring entrepreneur, and student at the <span className="theme-navy"><strong>Georgia Institute of Technology</strong></span> majoring in <strong>computer science</strong>. I love both technology and people
				</p>
				<h1><strong><span className="theme-red">&lt;/</span>About Me<span className="theme-red">&gt;</span></strong></h1>
			</div>
			<div className="right-container">
				<Collage radius="3em" center={beachPhoto} outer={[graduationPhoto, suitPhoto, seniorPhoto, promPhoto]} />
			</div>
			<p></p>
		</section>
	);
};

export default About;
