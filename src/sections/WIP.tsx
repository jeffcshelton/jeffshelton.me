import * as React from "react";
import resume from "../../res/resume.pdf";

const WIP: React.FC = () => {
	return (
		<section className="vh-100 d-flex align-items-center justify-content-center">
			<h3 className="w-75 text-center">Sorry, this site is still a work-in-progess. Check out <a href="https://github.com/jeffcshelton">my GitHub</a> or <a href={resume}>my resume</a> to see all the cool stuff I'm working on!</h3>
		</section>
	)
};

export default WIP;
