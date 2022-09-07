import * as React from "react";
import "./Collage.less";

type CollageProps = {
	center: string,
	outer: string[],
	radius: string
};

const Collage: React.FC<CollageProps> = ({ center, outer, radius }) => {
	const imageCount = outer.length;

	return (
		<div className="Collage">
			<img src={center} className="center-image" />
			<div className="overlay-images">
				{outer.map((image, i) => {
					let [r, unit]: (string | number)[] = radius.split(/(?<=\d)(?=[^\d.])/);
					r = parseInt(r);

					const angle = 2 * Math.PI * i / imageCount;
					const x = r * Math.cos(angle);
					const y = r * Math.sin(angle);

					return <img style={{ top: `${y}${unit}`, left: `${x}${unit}` }} src={image} />;
				})}
			</div>
		</div>
	);
};

export default Collage;
