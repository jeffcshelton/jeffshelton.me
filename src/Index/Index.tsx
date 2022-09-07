import { createRoot } from "react-dom/client";
import * as React from "react";

import Splash from "../sections/Splash/Splash";
import About from "../sections/About/About";
import Skills from "../sections/Skills/Skills";
import Experience from "../sections/Experience/Experience";
import Projects from "../sections/Projects/Projects";
import "./Index.less";

const Index: React.FC = () => {
	return (
		<main className="Index">
			<Splash />
			<About />
			<Skills />
			<Experience />
		</main>
	);
};

const root = createRoot(document.getElementById("root"));
root.render(<Index />);
