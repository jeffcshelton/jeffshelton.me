import * as React from "react";

type JobProps = {
	position: string,
	className?: string,
	company: string,
	description: string,
	repoLink?: string,
	tech?: string[]
};

const Job: React.FC<JobProps> = ({ position, className, company, description, repoLink }) => {
	return (
		<div className={"bg-white rounded shadow " + className || ""}>
			<span>
				<h3 className="underline">{company}</h3>
			</span>
			<p>{description}</p>
			{repoLink && <a href={repoLink}>Repository</a>}
		</div>
	);
};

export default Job;
