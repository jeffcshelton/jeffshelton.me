import * as React from "react";

import Job from "../components/Job";

const Jobs: React.FC = () => {
	return (
		<section className="row" id="jobs">
			<h1 className="underline-thick flex-shrink-1">Jobs</h1>
			<Job position="Developer" company="Silvervine Software" description="I did some shit" />
		</section>
	);
};

export default Jobs;
