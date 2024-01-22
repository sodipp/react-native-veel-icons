import React from 'react';

import Icons from './icons';

export default function Vicon({
  name,
  height,
  width,
}: {
  name: 'setting' | 'user' | 'video' | 'tag';
  height: number;
  width: number;
}) {
  const Icon = Icons[name];

  return <Icon height={height} width={width} />;
}
