import React, { SVGProps } from 'react';

interface IconProps extends SVGProps<any> {
  type: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ type, size }) => (
  <svg className="zhique-icon" aria-hidden="true" style={{ fontSize: size }}>
    <use xlinkHref={`#zhique-icon-${type}`} />
  </svg>
);

export default Icon;
