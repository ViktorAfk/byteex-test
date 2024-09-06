import { arrowIcon } from './Icons';
import { SvgIcon } from './SvgIcon';

type Props = {
  text: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const { height, width, fill, title, path, viewBox } = arrowIcon;

export const NavigationButton: React.FC<Props> = ({ text, ...props }) => {
  return (
    <button
      className={
        'group font-inter flex text-lg gap-5 w-89 rounded-button items-center text-white justify-center h-14 bg-primary hover:bg-white hover:border hover:border-primary hover:text-primary'
      }
      {...props}
      type={'button'}
    >
      <span>{text}</span>
      <SvgIcon
        height={height}
        width={width}
        fill={fill}
        title={title}
        path={path}
        viewBox={viewBox}
        className={'group-hover:fill-primary'}
      />
    </button>
  );
};
