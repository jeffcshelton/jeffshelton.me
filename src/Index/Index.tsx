import { createRoot } from "react-dom/client";
import * as React from "react";

import Splash from "../sections/Splash";
import WIP from "../sections/WIP";

// import Skills from "../sections/Skills";
// import Jobs from "../sections/Jobs";
// import Projects from "../sections/Projects";

import * as _ from "bootstrap";
import "../scss/styles.scss";

const Index: React.FC = () => {
	return (
		<main className="container-fluid dotted">
			<Splash />
			<WIP />
			{/* <div className="row vh-100">
				<div className="col">
					<Skills />
				</div>
				<div className="col">
					<Jobs />
					<Projects />
				</div>
			</div> */}
		</main>
	);
};

const root = createRoot(document.getElementById("root"));
root.render(<Index />);
