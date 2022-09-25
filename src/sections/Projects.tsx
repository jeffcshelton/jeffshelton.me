import * as React from "react";
import Project from "../components/Project";

const Projects: React.FC = () => {
	return (
		<section className="row" id="projects">
			<div className="col d-flex">
				<h1 className="row underline-thick flex-shrink-1">Projects</h1>
				<Project className="row" name="The JDX Project" description="lorem ipsum..." skillsUsed={["C"]} repoLink="https://github.com/jeffcshelton/jdx" />
			</div>
		</section>
	);
};

export default Projects;
