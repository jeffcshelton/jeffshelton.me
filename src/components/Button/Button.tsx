import { useNavigate } from "react-router-dom";
import * as React from "react";

import "./Button.less";

type ButtonProps = {
	children: React.ReactNode,
	lifted?: boolean,
	onClick?: () => void
};

const Button: React.FC<ButtonProps> = ({ children, lifted, onClick }) => {
	return <button className={`Button ${lifted ? "lifted" : ""}`} onClick={onClick}>{children}</button>;
};

export default Button;
