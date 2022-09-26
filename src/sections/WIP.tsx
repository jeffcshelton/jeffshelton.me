import * as React from "react";
import resume from "../../res/resume.pdf";

const WIP: React.FC = () => {
	return (
		<section className="vh-100 d-flex align-items-center justify-content-center">
			<div className="w-75">
				<h3 className="text-center">This site is still a work-in-progess. Check out <a href="https://github.com/jeffcshelton">my GitHub</a> or <a href={resume}>my resume</a> to see all the cool stuff I'm working on!</h3>
				<h3 className="text-center">Even check out the <a href="https://github.com/jeffcshelton/jeffshelton.me">source code</a> for this website!</h3>
			</div>
		</section>
	)
};

export default WIP;
