import type { SVGProps } from "react";

export interface SvgIconProps extends SVGProps<SVGSVGElement> {}
type Props = { title: string } & SvgIconProps;
export const SvgIcon: React.FC<Props> = ({
	width,
	height,
	path,
	title,
	viewBox,
	fill,
}) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox={viewBox}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>{title}</title>
			<path d={path} fill={fill} />
		</svg>
	);
};

export default SvgIcon;
