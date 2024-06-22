import React from 'react';

import { cn } from '@/lib/utils';

const Title = ({
  children,
  Component = 'h1',
  className = ''
}: {
  children: React.ReactNode;
  Component?: React.ElementType;
  className?: string;
}) => {
  return (
    <Component className={cn('font-semibold text-2xl md:text-4xl', className)}>
      {children}
    </Component>
  );
};

export default Title;
