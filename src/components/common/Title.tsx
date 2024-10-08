import React, { FC, PropsWithChildren } from 'react';

type Props = {
  className?: string;
  tag?: keyof React.JSX.IntrinsicElements;
};

export const Title: FC<PropsWithChildren<Props>> = ({
  children,
  className = '',
  tag: Tag = 'h2',
}) => {
  return <Tag className={className}>{children}</Tag>;
};
