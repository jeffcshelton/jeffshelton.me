import { createRoot } from "react-dom/client";
import * as React from "react";

import Splash from "../sections/Splash";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";

import * as bootstrap from "bootstrap";
import "../scss/styles.scss";

// import "./Index.less";

const Index: React.FC = () => {
	return (
		<main className="container-fluid dotted">
			<Splash />
			<About />
			<Skills />
			<Experience />
		</main>
	);
};

const root = createRoot(document.getElementById("root"));
root.render(<Index />);
