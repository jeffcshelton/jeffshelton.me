import * as React from "react";

type ProjectProps = {
	name: string,
	className?: string,
	description: string,
	skillsUsed?: string[],
	repoLink?: string
};

const Project: React.FC<ProjectProps> = ({ name, className, description, skillsUsed, repoLink }) => {
	return (
		<div className={"bg-white rounded shadow " + className || ""}>
			<span>
				<h3 className="underline">{name}</h3>
			</span>
			<p>{description}</p>
			{repoLink && <a href={repoLink}>Repository</a>}
		</div>
	);
};

export default Project;
