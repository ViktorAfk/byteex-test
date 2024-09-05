import { arrowIcon } from './Icons';
import SvgIcon from './SvgIcon';

type Props = {
  text: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const { height, width, fill, title, path, viewBox } = arrowIcon;

export const Button: React.FC<Props> = ({ text, ...props }) => {
  return (
    <button className={'flex gap-2 justify-center '} {...props} type={'button'}>
      {text}
      <SvgIcon
        height={height}
        width={width}
        fill={fill}
        title={title}
        path={path}
        viewBox={viewBox}
      />
    </button>
  );
};
