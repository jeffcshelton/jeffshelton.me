import Collage from "../components/Collage/Collage";
import * as React from "react";

import graduationPhoto from "../../res/graduation.jpg";
import seniorPhoto from "../../res/senior.jpg";
import beachPhoto from "../../res/beach.jpg";
import suitPhoto from "../../res/suit.jpg";
import promPhoto from "../../res/prom.jpg";

const About: React.FC = () => {
	return (
		<section className="row vh-100" id="about">
			<div className="col">
				<h1 className="underline">About Me</h1>
				<p>
					My name is <strong>Jeff Shelton</strong>. I'm a software developer, designer, aspiring entrepreneur, and student at the <span className="theme-navy"><strong>Georgia Institute of Technology</strong></span> majoring in <strong>computer science</strong>. I love both technology and people
				</p>
			</div>
			<div className="col">
				<Collage radius="3em" center={beachPhoto} outer={[graduationPhoto, suitPhoto, seniorPhoto, promPhoto]} />
			</div>
			<p></p>
		</section>
	);
};

export default About;
