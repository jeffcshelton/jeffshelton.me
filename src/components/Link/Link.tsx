import * as React from "react";
import "./Link.less";

type LinkProps = {
	children: React.ReactNode,
	underline?: boolean
};

const Link: React.FC<LinkProps> = ({ children }) => {
	return <a className="Link">{children}</a>;
};

export default Link;
