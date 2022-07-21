import { useNavigate } from "react-router-dom";
import * as React from "react";

import "./Button.less";

type ButtonProps = {
	children: React.ReactNode,
	href?: string,
	lifted?: boolean,
	onClick?: () => void
};

const Button: React.FC<ButtonProps> = ({ children, href, lifted, onClick }) => {
	return <a className={`Button ${lifted ? "lifted" : ""}`} href={href} onClick={onClick}>{children}</a>;
};

export default Button;
